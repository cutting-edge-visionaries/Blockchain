pragma solidity ^0.4.0;

contract dataTransaction {
    uint dataReceived;

    function set(uint feed) public {
        dataReceived = feed;
    }

    function get() public view returns (uint) {
        return dataReceived;
    }
}