pragma solidity^0.5.0;

contract DBank{

    // Balance will store the deposit ether of each address
    mapping(address=>uint256) private Balance;
    // to save the log in the ledger
    event depositMade(address accAddress, uint256 amount);
    // total accounts present in the Dbank
    uint256 public totalAccount;
    // to convert wei to ETH
    uint256  convertor = 1000000000000000000;

    // init the smart contract
    constructor () public payable{
        totalAccount = 0;
    }
    
    // to create a new account and you can also deposit some ether
    function initAccount() public payable returns(uint256){
       
        require(msg.value>0);       //ether send must be > 0

        Balance[msg.sender]=msg.value;    // updating the balace of the user
        totalAccount++;
        return(Balance[msg.sender]);
    }
    
    function deposit () public payable returns (uint256){
        
        require(msg.value>0);                   //ether send must be > 0
        uint256 amount = msg.value/convertor;   
       Balance[msg.sender] += amount;
       
       emit  depositMade(msg.sender,amount);       
       
       return Balance[msg.sender];
    }
     
    function withDraw(uint256 amount) public payable returns(uint256){

        require(amount<=Balance[msg.sender]);
        Balance[msg.sender]-=amount;
        msg.sender.transfer(amount*convertor);      // to tranfer the amount back into the users account
    
        return(Balance[msg.sender]);
	}


}

