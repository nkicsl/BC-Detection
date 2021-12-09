const express = require('express')
var Web3 = require('web3')
var web3 = new Web3(new Web3.providers.WebsocketProvider("ws://localhost:8545"));
var readline = require('readline');
var fs = require('fs');

var blockNumber = -1;
var peerCount;
var hashRate;
var gasPrice;
var Block_Hash = [];
var Block_Trans = [];
var Block_Timestamp = [];
var time;
var lastestNumber = 10;
var errorlogfile = './errorlog.txt';
var errorlogs = new Array();
var Lastlogkey = [];
var Currentlogkey = [];
var Logkeyaddr = [];
var Logkeytime = [];


async function getBlockInfo(){
    var fRead = fs.createReadStream(errorlogfile);
    var objReadline = readline.createInterface({input: fRead});
    objReadline.on('line',function(line){
        errorlogs.push(line);
    })
    objReadline.on('close',function(){
        console.log("File read success!");
    })
    var index = 0;
    for(i = errorlogs.length - 1; i >= Math.max(errorlogs.length - 25,3); i -= 4){
        Lastlogkey[index] = errorlogs[i-3];
        Currentlogkey[index] = errorlogs[i-2];
        Logkeyaddr[index] = errorlogs[i-1];
        Logkeytime[index] = errorlogs[i];
        index ++;
    }
    blockNumber = await web3.eth.getBlockNumber();

    peerCount = await web3.eth.net.getPeerCount();
    peerCount = peerCount + 1;

    hashRate = await web3.eth.getHashrate();

    gasPrice = await web3.eth.getGasPrice();

    for(i = 0; i < lastestNumber; i++){
        var currentBlock = await web3.eth.getBlock(blockNumber - i);
        Block_Hash[i] = currentBlock.hash;
        Block_Trans[i] = currentBlock.transactions.length;
        Block_Timestamp[i] = currentBlock.timestamp;
        time = getTime();
    }
}

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

var app = express();

app.all('*',function(req,res,next){//跨域问题
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.all('*',function (req, res){
	getBlockInfo();
    while(blockNumber != -1){
		var response = {
			"time": time,
			"blockNumber": blockNumber,
			"peerCount": peerCount,
			"hashRate": hashRate,
            "gasPrice": gasPrice,
            
			"BlockNumber": blockNumber,
			"BlockHash": Block_Hash,
			"BlockTrans": Block_Trans,
            "BlockTimestamp": Block_Timestamp,
            
            "LastLogkey": Lastlogkey,
            "CurrentLogkey": Currentlogkey,
            "LogkeyAddress": Logkeyaddr,
            "LogkeyTime": Logkeytime,
	    }
        console.log(response);
	    res.json(response);
            return;
    }
});

app.listen(1234,'2001:250:401:6103:34fd:8f3a:c3c6:6745',function(){
    console.log('Start server http://2001:250:401:6103:34fd:8f3a:c3c6:6745:1234/');
	console.log('Listining...');
})
