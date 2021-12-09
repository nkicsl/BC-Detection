from web3 import Web3
#web3 = Web3(Web3.HTTPProvider('http://0.0.0.0:8545'))
web3=Web3(Web3.IPCProvider('./ipc/geth.ipc'))
print(web3.isConnected())
