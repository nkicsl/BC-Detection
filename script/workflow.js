var config = require('./config');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.WebsocketProvider("ws://localhost:8545"));

var contract_addr = config.contract_addr;
var contract_abi = config.contract_abi;

var node = ['E1','E2','E3','E4','E5','E6','E7','E8','E9','E10','E11','E12','E13','E14','E15','E16','E17','E18','E19'];
var graph = [
    [0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1],
    [0,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0],
    [0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0],
    [0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1],
    [0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],
    [1,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0],
    [0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0]
];
var length = node.length;

async function upload() {
    var accounts = await web3.eth.getAccounts();
    if (accounts != '') {
        console.log("Got account: " + accounts[0]);
    } else {
        console.log("Failed to get account!");
    }

    var contract = new web3.eth.Contract(contract_abi, contract_addr);
    console.log("Got contract interface.");
    
    console.log("-----------------Start uploading.-----------------")
    for (i = 0; i < length; i++) {
        contract.methods.UploadNode(i,web3.utils.fromAscii(node[i])).send({ from: accounts[0] });
        for (j = 0; j < length; j++) {
            contract.methods.UploadEdge(i, j, graph[i][j]).send({ from: accounts[0] });
        }
    }
    console.log("-----------------Upload over.-----------------")
}

upload();
