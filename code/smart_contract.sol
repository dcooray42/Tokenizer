// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

// Import Multi Signature Wallet

import "./multi_sig_wallet.sol";

//Safe Math Interface

contract SafeMath {
    function safeAdd(uint a, uint b) public pure returns (uint c) {
        c = a + b;
        require(c >= a);
    }

    function safeSub(uint a, uint b) public pure returns (uint c) {
        require(b <= a);
        c = a - b;
    }

    function safeMul(uint a, uint b) public pure returns (uint c) {
        c = a * b;
        require(a == 0 || c / a == b);
    }

    function safeDiv(uint a, uint b) public pure returns (uint c) {
        require(b > 0);
        c = a / b;
    }
}

//ERC Token Standard #20 Interface

abstract contract ERC20Interface {
    function totalSupply() public view virtual returns (uint);

    function balanceOf(
        address tokenOwner
    ) public view virtual returns (uint balance);

    function allowance(
        address tokenOwner,
        address spender
    ) public view virtual returns (uint remaining);

    function transfer(
        address to,
        uint tokens
    ) public virtual returns (bool success);

    function approve(
        address spender,
        uint tokens
    ) public virtual returns (bool success);

    function transferFrom(
        address from,
        address to,
        uint tokens
    ) public virtual returns (bool success);

    event Transfer(address indexed from, address indexed to, uint tokens);
    event Approval(
        address indexed tokenOwner,
        address indexed spender,
        uint tokens
    );
}

//Actual token contract

contract DCOToken is MultiSigWallet, ERC20Interface, SafeMath {
    string public symbol;
    string public name;
    uint8 public decimals;
    uint public _totalSupply;

    mapping(address => uint) balances;
    mapping(address => mapping(address => uint)) allowed;

    constructor(
        address[] memory _owners,
        uint _numConfirmationRequired
    ) MultiSigWallet(_owners, _numConfirmationRequired) {
        symbol = "42DCO";
        name = "42 Dcooray";
        decimals = 5;
        _totalSupply = 100000000 * 10 ** uint(decimals);
        balances[msg.sender] = _totalSupply;
        emit Transfer(address(0), msg.sender, _totalSupply);
    }

    function totalSupply() public view override returns (uint) {
        return (_totalSupply - balances[address(0)]) / 10 ** uint(decimals);
    }

    function balanceOf(
        address tokenOwner
    ) public view override returns (uint balance) {
        return balances[tokenOwner] / 10 ** uint(decimals);
    }

    function transfer(
        address to,
        uint tokens
    ) public override returns (bool success) {
        uint totalTokens;
        uint transactionID;

        totalTokens = tokens * 10 ** uint(decimals);
        transactionID = submitTransaction(msg.sender, to, totalTokens);
        confirmTransaction(transactionID);
        balances[msg.sender] = safeSub(balances[msg.sender], totalTokens);
        balances[to] = safeAdd(balances[to], totalTokens);
        emit Transfer(msg.sender, to, totalTokens);
        return true;
    }

    function approve(
        address spender,
        uint tokens
    ) public override returns (bool success) {
        uint totalTokens;

        totalTokens = tokens * 10 ** uint(decimals);
        allowed[msg.sender][spender] = totalTokens;
        emit Approval(msg.sender, spender, totalTokens);
        return true;
    }

    function transferFrom(
        address from,
        address to,
        uint tokens
    ) public override returns (bool success) {
        uint totalTokens;
        uint transactionID;

        totalTokens = tokens * 10 ** uint(decimals);
        transactionID = submitTransaction(from, to, totalTokens);
        confirmTransaction(transactionID);
        balances[from] = safeSub(balances[from], totalTokens);
        allowed[from][msg.sender] = safeSub(
            allowed[from][msg.sender],
            totalTokens
        );
        balances[to] = safeAdd(balances[to], totalTokens);
        emit Transfer(from, to, totalTokens);
        return true;
    }

    function allowance(
        address tokenOwner,
        address spender
    ) public view override returns (uint remaining) {
        return allowed[tokenOwner][spender] / 10 ** uint(decimals);
    }
}
