// SPDX-License-Identifier: MIT

// Specify the compiler version
pragma solidity ^0.8.0;

// Define the MultiSigWallet contract
contract MultiSigWallet {
    address[] public owners; // Array to store wallet owners
    uint public numConfirm; // Number of required confirmations for a transaction

    struct Transaction {
        address to; // Receiver address of the transaction
        uint value; // Amount to transfer in the transaction
        bool executed; // Flag indicating if the transaction has been executed
    }

    // Mapping to track confirmed status of transactions by owner and owner status
    mapping(uint => mapping(address => bool)) isConfirmed;
    mapping(address => bool) isOwner;

    Transaction[] public transactions; // Array to store transactions

    // Events to log important transaction-related actions
    event TransactionSubmitted(
        uint transactionId,
        address sender,
        address receiver,
        uint amount
    );
    event TransactionConfirmed(uint transactionId);
    event TransactionExecuted(uint transactionId);

    // Modifier to restrict certain functions to only wallet owners
    modifier onlyOwner() {
        require(isOwner[msg.sender], "Not an owner");
        _;
    }

    // Constructor to initialize the contract with owners and required confirmations
    constructor(address[] memory _owners, uint _numConfirmationRequired) {
        require(_owners.length > 1, "At least two owners required");
        require(
            _numConfirmationRequired > 0 &&
                _numConfirmationRequired <= _owners.length,
            "Invalid number of confirmations"
        );
        numConfirm = _numConfirmationRequired;

        // Initialize the owners and their status
        for (uint i = 0; i < _owners.length; i++) {
            require(_owners[i] != address(0), "Invalid Owner");
            owners.push(_owners[i]);
            isOwner[_owners[i]] = true;
        }
    }

    // Function to submit a new transaction
    function submitTransaction(
        address _from,
        address _to,
        uint _value
    ) public returns (uint) {
        require(_to != address(0), "Invalid address");
        require(_value > 0, "Transfer amount must be greater than 0");

        // Create a new transaction and add it to the transactions array
        uint transactionId = transactions.length;
        transactions.push(
            Transaction({to: _to, value: _value, executed: false})
        );

        // Emit the TransactionSubmitted event
        emit TransactionSubmitted(transactionId, _from, _to, _value);
        return transactionId;
    }

    // Function for owners to confirm a pending transaction
    function confirmTransaction(uint _transactionId) public onlyOwner {
        require(_transactionId < transactions.length, "Invalid transaction");
        require(
            !isConfirmed[_transactionId][msg.sender],
            "Transaction is already confirmed by owner"
        );

        // Mark the transaction as confirmed by the calling owner
        isConfirmed[_transactionId][msg.sender] = true;
        emit TransactionConfirmed(_transactionId);

        // If the transaction has enough confirmations, execute it
        if (isTransactionConfirmed(_transactionId)) {
            executeTransaction(_transactionId);
        }
    }

    // Function to check if a transaction has enough confirmations
    function isTransactionConfirmed(
        uint _transactionId
    ) public view returns (bool) {
        require(_transactionId < transactions.length, "Invalid transaction");
        uint confirmation;
        for (uint i = 0; i < numConfirm; i++) {
            if (isConfirmed[_transactionId][owners[i]]) {
                confirmation++;
            }
        }
        return confirmation >= numConfirm;
    }

    // Function to execute a confirmed transaction
    function executeTransaction(uint _transactionId) public {
        require(_transactionId < transactions.length, "Invalid transaction");
        require(
            !transactions[_transactionId].executed,
            "Transaction is already executed"
        );

        // Execute the transaction by sending the specified value to the target address
        (bool success, ) = transactions[_transactionId].to.call{
            value: transactions[_transactionId].value
        }("");

        require(success, "Transaction Execution Failed");
        transactions[_transactionId].executed = true;
        emit TransactionExecuted(_transactionId);
    }
}
