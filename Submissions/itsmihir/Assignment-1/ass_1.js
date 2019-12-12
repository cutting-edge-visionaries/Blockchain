var sha256 = require('sha-256-js');
var readline = require('readline-sync');

class Block
{

    constructor(data,timeStamp)
    {
        this.data = data;
        this.timeStamp = timeStamp;
        this.hash = sha256(this.data);
        this.previoushash = null;
    }
}

class BlockChain
{
    constructor()
    {
        this.mychain=[this.createGensis()];
    }

    createGensis()
    {
        return new Block("Genesis Block",Date.now());
    }

    mineBlock(data)
    {
        var node = new Block(data,Date.now());
        node.previoushash = this.mychain[this.mychain.length-1].hash;
        this.mychain.push(node);
    }

    print()
    {
        for(var i=0;i<this.mychain.length;i++)
        {
            console.log(this.mychain[i]);
            console.log('.....................................................................................');
        }
    }
}

var blockchain = new BlockChain();

var data = readline.question("Enter the Data ");

blockchain.mineBlock(data);

data = readline.question("Enter the Data ");

blockchain.mineBlock(data);


blockchain.print();