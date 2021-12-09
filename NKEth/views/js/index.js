$(document).ready(function(){
    $.get("http://[2001:250:401:6103:34fd:8f3a:c3c6:6745]:1234", function (data, status) {
        $("#BlockNumber").text(data.blockNumber);
        //$("#PeerCount").text(data.peerCount);
        $("#PeerCount").text(4);
        $("#HashRate").text(data.hashRate + " GH/s");
        $("#GasPrice").text(data.gasPrice);
        for (var i = 0; i < 10; i++) {
            var n = i + 1;
            var block_no= document.getElementById("block-no" + n.toString());
            block_no.innerText = data.blockNumber - i;
            var block_hash= document.getElementById("block-hash" + n.toString());
            block_hash.innerText = data.BlockHash[i];
            var block_tx= document.getElementById("block-tx" + n.toString());
            block_tx.innerText = data.BlockTrans[i];
            var block_time= document.getElementById("block-time" + n.toString());
            block_time.innerText = data.BlockTimestamp[i];
        }
        for (var i = 0; i < 7; i++) {
            var n = i + 1;
            var llk= document.getElementById("llk" + n.toString());
            llk.innerText = data.LastLogkey[i];
            var clk= document.getElementById("clk" + n.toString());
            clk.innerText = data.CurrentLogkey[i];
            var address= document.getElementById("address" + n.toString());
            address.innerText = data.LogkeyAddress[i];
            var time= document.getElementById("time" + n.toString());
            time.innerText = data.LogkeyTime[i];
        }
    })
    var option = {
        name: ['E1','E2','E3','E4','E5','E6','E7','E8','E9','E10','E11','E12','E13','E14','E15','E16','E17','E18','E19'],
        data: [
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
        ]
    };
    canvas=document.getElementsByTagName('canvas')[0];
    canvas.width=400;
    canvas.height=400;
    var gra = new Gra(document.getElementById('WFgraph'), option);
})


function start() {
    $.get("http://[2001:250:401:6103:34fd:8f3a:c3c6:6745]:1234", function (data, status) {
        $("#BlockNumber").text(data.blockNumber);
        //$("#PeerCount").text(data.peerCount);
        $("#PeerCount").text(4);
        $("#HashRate").text(data.hashRate + " GH/s");
        $("#GasPrice").text(data.gasPrice);
        for (var i = 0; i < 10; i++) {
            var n = i + 1;
            var block_no= document.getElementById("block-no" + n.toString());
            block_no.innerText = data.blockNumber - i;
            var block_hash= document.getElementById("block-hash" + n.toString());
            block_hash.innerText = data.BlockHash[i];
            var block_tx= document.getElementById("block-tx" + n.toString());
            block_tx.innerText = data.BlockTrans[i];
            var block_time= document.getElementById("block-time" + n.toString());
            block_time.innerText = data.BlockTimestamp[i];
            
        }
        for (var i = 0; i < 7; i++) {
            var n = i + 1;
            var llk= document.getElementById("llk" + n.toString());
            llk.innerText = data.LastLogkey[i];
            var clk= document.getElementById("clk" + n.toString());
            clk.innerText = data.CurrentLogkey[i];
            var address= document.getElementById("address" + n.toString());
            address.innerText = data.LogkeyAddress[i];
            var time= document.getElementById("time" + n.toString());
            time.innerText = data.LogkeyTime[i];
        }
    })
}

setInterval(start,1000);