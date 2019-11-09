var Web3 = require('web3');
var web3 = new Web3('http://119.3.43.136:8203');
var account = web3.eth.accounts.create(); //Creates the account (is an object)
console.log(account); //show the object in the console