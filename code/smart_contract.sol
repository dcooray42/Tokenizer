// SPDX-License-Identifier: MIT

// Specify the compiler version
pragma solidity ^0.8.0;

// Import the MultiSigWallet contract
import "./multi_sig_wallet.sol";

// Create a SafeMath contract to handle safe arithmetic operations
contract SafeMath {
    // Function to safely add two unsigned integers
    function safeAdd(uint a, uint b) public pure returns (uint c) {
        c = a + b;
        require(c >= a);
    }

    // Function to safely subtract one unsigned integer from another
    function safeSub(uint a, uint b) public pure returns (uint c) {
        require(b <= a);
        c = a - b;
    }

    // Function to safely multiply two unsigned integers
    function safeMul(uint a, uint b) public pure returns (uint c) {
        c = a * b;
        require(a == 0 || c / a == b);
    }

    // Function to safely divide one unsigned integer by another
    function safeDiv(uint a, uint b) public pure returns (uint c) {
        require(b > 0);
        c = a / b;
    }
}

// Define an abstract contract for the ERC20 token interface
abstract contract ERC20Interface {
    // Function to get the total token supply
    function totalSupply() public view virtual returns (uint);

    // Function to get the balance of a token owner
    function balanceOf(
        address tokenOwner
    ) public view virtual returns (uint balance);

    // Function to get the remaining allowance of a spender from a token owner
    function allowance(
        address tokenOwner,
        address spender
    ) public view virtual returns (uint remaining);

    // Function to transfer tokens to another address
    function transfer(
        address to,
        uint tokens
    ) public virtual returns (bool success);

    // Function to approve a spender to spend tokens on the owner's behalf
    function approve(
        address spender,
        uint tokens
    ) public virtual returns (bool success);

    // Function to allow a spender to transfer tokens from an owner's account
    function transferFrom(
        address from,
        address to,
        uint tokens
    ) public virtual returns (bool success);

    // Events for token transfer and approval
    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(
        address indexed tokenOwner,
        address indexed spender,
        uint tokens
    );
}

// Define the DCOToken contract, which inherits from MultiSigWallet, ERC20Interface, and SafeMath
contract DCOToken is MultiSigWallet, ERC20Interface, SafeMath {
    // Declare public state variables
    string public symbol;
    string public name;
    uint8 public decimals;
    uint public _totalSupply;

    // Define mappings to store token balances and allowances
    mapping(address => uint) balances;
    mapping(address => mapping(address => uint)) allowed;

    // Constructor to initialize the token with owners and the required number of confirmations
    constructor(
        address[] memory _owners,
        uint _numConfirmationRequired
    ) MultiSigWallet(_owners, _numConfirmationRequired) {
        // Initialize token properties
        symbol = "42DCO";
        name = "42 Dcooray";
        decimals = 5;
        _totalSupply = 100000000 * 10 ** uint(decimals);

        // Assign the total supply to the contract creator
        balances[msg.sender] = _totalSupply;
        emit Transfer(address(0), msg.sender, _totalSupply);
    }

    // Implement the totalSupply function
    function totalSupply() public view override returns (uint) {
        return _totalSupply - balances[address(0)];
    }

    // Implement the balanceOf function
    function balanceOf(
        address tokenOwner
    ) public view override returns (uint balance) {
        return balances[tokenOwner];
    }

    // Implement the transfer function
    function transfer(
        address to,
        uint tokens
    ) public override returns (bool success) {
        uint totalTokens;
        uint transactionID;

        totalTokens = tokens;

        // Submit a transaction for transfer and confirm it
        transactionID = submitTransaction(msg.sender, to, totalTokens);
        confirmTransaction(transactionID);

        // Update sender and receiver balances
        balances[msg.sender] = safeSub(balances[msg.sender], totalTokens);
        balances[to] = safeAdd(balances[to], totalTokens);

        // Emit a Transfer event
        emit Transfer(msg.sender, to, totalTokens);

        return true;
    }

    // Implement the approve function
    function approve(
        address spender,
        uint tokens
    ) public override returns (bool success) {
        uint totalTokens;

        totalTokens = tokens;

        // Update the spender's allowance
        allowed[msg.sender][spender] = totalTokens;

        // Emit an Approval event
        emit Approval(msg.sender, spender, totalTokens);

        return true;
    }

    // Implement the transferFrom function
    function transferFrom(
        address from,
        address to,
        uint tokens
    ) public override returns (bool success) {
        uint totalTokens;
        uint transactionID;

        totalTokens = tokens;

        // Submit a transaction for transfer and confirm it
        transactionID = submitTransaction(from, to, totalTokens);
        confirmTransaction(transactionID);

        // Update sender, spender, and receiver balances
        balances[from] = safeSub(balances[from], totalTokens);
        allowed[from][msg.sender] = safeSub(
            allowed[from][msg.sender],
            totalTokens
        );
        balances[to] = safeAdd(balances[to], totalTokens);

        // Emit a Transfer event
        emit Transfer(from, to, totalTokens);

        return true;
    }

    // Implement the allowance function
    function allowance(
        address tokenOwner,
        address spender
    ) public view override returns (uint remaining) {
        return allowed[tokenOwner][spender];
    }
}
