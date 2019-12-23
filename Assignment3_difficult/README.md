### DIFFICULT

* #### Steps to reproduce
    * ##### Creating a new repo on your GITHUB Account
        1. [https://help.github.com/en/github/getting-started-with-github/create-a-repo](https://help.github.com/en/github/getting-started-with-github/create-a-repo)
    * ##### Cloning the Repo
        1. Clone the Repo
        ```git clone <repo URL>```

    * ##### Setting up Environment (only for DIFFICULT solvers)

        1. Install and Setup [METAMASK browser extension](https://metamask.io/)
        2. Install ```nodejs``` and ```npm```.
            [Reference & Help](https://linuxize.com/post/how-to-install-node-js-on-ubuntu-18.04/)
        3. Download & Install ```GANACHE``` a local blockchain software, your project will be running on it.
            Use any one among the [GANAHCE-GUI](https://www.trufflesuite.com/ganache) and [GANACHE-CLI using npm](https://www.npmjs.com/package/ganache-cli)
            *remember about the ports being used in both the cases. GUI uses 8545 while CLI uses 7545*
            
        4.  install truffle using following command
            ```npm install truffle``` or ```sudo npm install truffle```
            
        5.  While into your clones REPO Open(Create) a new truffle project running the following command. *Let us call this directory as **PROJECT_DIR** from now*.
            ```truffle init```
        
* #### Working further on the project
    1. Find the several files listed below in the Assignment Difficult directory
        > .gitignore    (FOLDER)
        
        > *package.json*
        
        > *truffle-config.js*
        
        > *bs-config.js*
        
        > *index.html*
        
        > *app.js*
            
    2. copy paste the contents of the file ```package.json```  in a file of same name in PROJECT_DIR.
        *Add your name as the author and have a look at the dependecies and scripts used in the project*
    3. Now run the following command to install the dependencies which are listed it the ```package.json``` file
        ```npm install``` or ```sudo npm install```
    4.  Add ```.gitignore``` in the ```./PROJECT_DIR```, this will prevent the large size node_modules installed through the above commands, from unecessarily pushing to the repository.
    5. Ignore, since the file already exists.
    6. copy paste the contents of the file ```truffle-config.js```  in a file of same name in PROJECT_DIR.
        *Put the port name ```8545 for GANACHE-CLI``` and ```7545 for GANACHE-GUI```*
    7. create a file ```PROJECT_DIR/migrations/2_deploy_contracts.js``` and paste the contents of file ```PROJECT_DIR/migrations/1_initial_migration.js```.
    8. Replace the name ```Migrations``` at all the places, with the contract name you created in the Easy assignment.
    9. Transfer your contract in the ```contracts``` directory.
    10. Run *GANACHE-CLI* or *GANACHE-GUI*.
    11. Run ```truffle migrate``` to check whether your deployments are working correctly or not.
    12. Now create a folder ```PROJECT_DIR/src/``` and add the following files ```index.html``` and ```app.js```.
    13. Run following command to run your **First dAPP** (possibly). CHEERS!
        ```npm run dev```
        
* #### Submitting your project.
    1. Like you submitted previous assignments.
    2. Go to the [MAIN COURSE REPO](https://github.com/cutting-edge-visionaries/Blockchain) and add your ```<name>``` and ```<Repo URL>``` in the ```Assignment-3-difficult/submissions.md``` file in the following format.
         
        [Name](Repo URL)

        *For e.g. when you will update the README.md, do the following*
        [SHIVANSH](https://github.com/johnsoncarl/CEVWS-Assignment_Blockchain)
    3. Make a pull request. (make sure not to disturb previous entries.)
        
        
-----------------

