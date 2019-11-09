var Web3 = require('web3');
var web3 = new Web3('http://119.3.43.136:8203');
web3.eth.getBlockTransactionCount("0xc7fa9b531864959f6810c8d20184884d9f5062d8ba4f0f82516d239fc7fa73b8").then(console.log);