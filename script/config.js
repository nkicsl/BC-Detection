var ip_addr = "http://localhost:8546";

var contract_addr = '0x9a23c47136c68e88b95599c6e4782e9a8582de30';
var contract_abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_index",
				"type": "uint8"
			},
			{
				"name": "_nodevalue",
				"type": "bytes32"
			}
		],
		"name": "UploadNode",
		"outputs": [],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "GetStatus",
		"outputs": [
			{
				"name": "_res",
				"type": "bool"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_index",
				"type": "uint8"
			}
		],
		"name": "GetNode",
		"outputs": [
			{
				"name": "_res",
				"type": "bytes32"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetNodeCount",
		"outputs": [
			{
				"name": "_res",
				"type": "uint8"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_start",
				"type": "uint8"
			},
			{
				"name": "_end",
				"type": "uint8"
			}
		],
		"name": "GetEdge",
		"outputs": [
			{
				"name": "_res",
				"type": "uint8"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			},
			{
				"name": "_logkey",
				"type": "bytes32"
			}
		],
		"name": "UploadLastLogkey",
		"outputs": [],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetDeviceCount",
		"outputs": [
			{
				"name": "_res",
				"type": "uint8"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "GetLastLogkey",
		"outputs": [
			{
				"name": "_res",
				"type": "bytes32"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint8"
			},
			{
				"name": "",
				"type": "uint8"
			}
		],
		"name": "Graph",
		"outputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint8"
			}
		],
		"name": "Node",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "AddTAL",
		"outputs": [],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_addr",
				"type": "address"
			},
			{
				"name": "_logkey",
				"type": "bytes32"
			}
		],
		"name": "Dectect",
		"outputs": [
			{
				"name": "_res",
				"type": "uint8"
			}
		],
		"payable": false,
		"type": "function",
		"stateMutability": "view"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "_start",
				"type": "uint8"
			},
			{
				"name": "_end",
				"type": "uint8"
			},
			{
				"name": "_relation",
				"type": "uint8"
			}
		],
		"name": "UploadEdge",
		"outputs": [],
		"payable": false,
		"type": "function",
		"stateMutability": "nonpayable"
	}
];

exports.contract_addr = contract_addr;
exports.contract_abi = contract_abi;
