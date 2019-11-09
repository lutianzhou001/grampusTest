var Web3 = require('web3');
var web3 = new Web3('http://119.3.43.136:8203');
web3.eth.getBalance('0x5602F505E9Aa8658A6083F06560ae4FD08c0F0e7').then(console.log)