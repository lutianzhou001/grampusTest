var Web3 = require('web3');
var web3 = new Web3('http://119.3.43.136:8203');
web3.eth.getTransactionCount("0x6c2fd03faf77be34b33356f40bc9bd837da38434").then(console.log);