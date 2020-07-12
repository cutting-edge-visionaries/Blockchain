pragma solidity ^0.5.12;
// to create a simple contract of data transaction

contract dataTransaction {
    uint dataReceived;

    function set(uint feed) public {
        dataReceived = feed;
    }

    function get() public view returns (uint) {
        return dataReceived;
    }
}