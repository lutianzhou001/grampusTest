var Web3 = require('web3');
var web3 = new Web3('http://119.3.43.136:8203');
web3.eth.getTransactionReceipt("0xec56a2dc51cd10b64a8721f0f915ecdce9a765cafb0bc3c03819e25fd97bd8f4").then(console.log);