///to store data in blockchain
pragma solidity ^0.5.12;
contract Store{
uint storeddata;
function set(uint x) public{
storeddata = x;   ///store number
}
function get() public view returns(uint){
return storeddata;   ///publish number
}
}
