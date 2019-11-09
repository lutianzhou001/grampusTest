var Web3 = require('web3');
var web3 = new Web3('http://119.3.43.136:8203');
web3.eth.isMining().then(console.log);