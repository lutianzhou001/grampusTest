var Web3 = require('web3');
var web3 = new Web3('http://119.3.43.136:8203');

let encrypted = web3.eth.accounts.encrypt('0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318', 'test!')
console.log(encrypted)