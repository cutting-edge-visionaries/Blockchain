# CEVWS-Assignment_Blockchain
### Date: Dec 22, 2019
-------

##### This assignment has two levels
##### [EASY](#EASY)
Complete the contract and Make pull request as directed in the [EASY](#EASY) section.

##### [DIFFICULT](#DIFFICULT) {LINUX required}
Complete the tasks directed in the [DIFFICULT](#DIFFICULT) section.
Make a branch and make a pull request.

-----------

### EASY
* #### Steps to reproduce
1. Clone the Repo 
    ```git clone <repo URL>```

2. Make a new folder inside ```Submissions``` directory named as your GITHUB Username
    ```mkdir Submissions/<your_github_username>/Assignment3 -p```
    
    e.g. ```mkdir Submissions/johnsoncarl/Assignment3 -p```

3. **Copy-Paste** the file stored in ```Assignment3``` directory to this newly created directory 
    ```cp Assignment3/balanceLedger.sol Submissions/johnsoncarl/Assignment3```

* #### Problem Statements
    Team CEV tries to utilise every penny they have for good. Since they receive the costs of any activity only after it is done and proper bills are submitted to the authorities providing them with the funds, Team CEV has to keep there [LEDGER](https://www.investopedia.com/terms/g/generalledger.asp) strong so that every penny spent by the members to do an activity is noted carefully. 
    As a solution the Team members decided to use ETHEREUM BLOCKCHAIN to keep their expenditure records. 

    *Shivansh* is a newbie in blockchain he tried to write down the code provided in the ```Assignment3``` directory, named ```balanceLedger.sol```. He was sitting in the CEV ROOM and doing his work peacefully, however, due to disturbance from outside the ROOM from the well known `PMC`, *Shivansh* got distracted and had heavy confusion in implementing following things:
    
    * Mapping a new entry so that it can be identified by its index no. In the following snippet
        ```solidity
        struct entry {
        uint id;
        string content;
        bool completed;
        }
        
        // Create a Public mapping named "entries" of an integer to entry
        // TODO
        
        event TaskCreated(
        uint id,
        string content,
        bool completed
        );
        ```
        
    * Storing the ```entry``` received as an argument in function ```makeEntry(string memory _content) public``` in the right index of the mapping created above.
        ```solidity
        function makeEntry(string memory _content) public {
        count ++;
        // Store the "entry" type data in the "entries"(the mapping declared above) at the index "count"
        // TODO
        emit TaskCreated(count, _content,  false);
        }
        ```
        
    **Can you please help him getting rid of this problem?**
    
    *It is recommended to use **[REMIX IDE](http://remix.ethereum.org/#optimize=false&evmVersion=null&version=soljson-v0.5.0+commit.1d4f565a.js)** to check the working of the contract.*
    
* #### Submissions
    Make a pull request to the Repository, after COPY-PASTING your solution to the ```balanceLedger.sol``` file under ```Submissions/<your_github_username>/Assignment3``` directory.

------------
<On progress>

### DIFFICULT

* #### Steps to reproduce

    * ##### Cloning the Repo and moving to new branch
        1. Clone the Repo
        ```git clone <repo URL>```

        2. Make another branch of your Roll no, and checkout to that branch
        ```git branch <RollNo> && git checkout <RollNo>```

            e.g. ```git branch BC29 && git checkout BC29```

    * ##### Setting up Environment (only for DIFFICULT solvers)
        1. 
