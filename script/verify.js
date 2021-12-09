var config = require('./config');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.WebsocketProvider("ws://localhost:8545"));
var readline = require('readline');
var fs = require('fs');

var contract_addr = config.contract_addr;
var contract_abi = config.contract_abi;
var logkeyfile = './logkey.txt';
var logkeys = new Array();

function getTime(){
    var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	var day = date.getDate();
	var hour = date.getHours();
	var minute = date.getMinutes();
	var second = date.getSeconds();
	return hour+':'+minute+':'+second;
}

function init(){
    var fRead = fs.createReadStream(logkeyfile);
    var objReadline = readline.createInterface({input: fRead});
    objReadline.on('line',function(line){
        logkeys.push(line);
    })
    objReadline.on('close',function(){
        console.log("File read success!");
        //console.log(logkeys);
        upload();
    })
}

async function upload() {
    var accounts = await web3.eth.getAccounts();
    if (accounts != '') {
        console.log("Got account: " + accounts[0]);
    } else {
        console.log("Failed to get account!");
    }

    var addr = accounts[0];
    var contract = new web3.eth.Contract(contract_abi, contract_addr);;
    console.log("Got contract interface.");
    await contract.methods.UploadLastLogkey(addr,web3.utils.fromAscii('E1')).send({ from: accounts[0] });
    console.log("-----------------Start verifying.-----------------")
    for(i = 0; i < logkeys.length; i++){
    //for(i = 0; i < 1; i++){
        var llksrc = await contract.methods.GetLastLogkey(addr).call({ from: accounts[0] });
        var llk = String(web3.utils.hexToUtf8(llksrc));
        console.log("Last logkey: " + llk);

        var res = await contract.methods.Dectect(addr,web3.utils.fromAscii(logkeys[i])).call({ from: accounts[0] });
        //var res = await contract.methods.Dectect(addr,web3.utils.fromAscii('E2')).call({ from: accounts[0] });
        if(res == 1) {
            console.log("Error Address: " + addr + ".\nError Logkey: " + "->" + logkeys[i]);
            fs.appendFile("./errorlog.txt", llk + '\n' + logkeys[i] + '\n' + String(addr) + '\n' + String(getTime()) + '\n', function (err) {
                if (err) { throw err; }
            })
        }
        else if(res == 0){
            await contract.methods.UploadLastLogkey(addr,web3.utils.fromAscii(logkeys[i])).send({ from: accounts[0] });
        }
    }
    console.log("-----------------Verify over.-----------------")
}


init();
