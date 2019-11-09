var Web3 = require('web3');
var web3 = new Web3('http://119.3.43.136:8203');

web3.eth.accounts.signTransaction({
                to: '0xf0109fc8df283027b6285cc889f5aa624eac1f55',
                value: '0x64',
                gasPrice: '0x10000000',
                gas: '0x5218',
                nonce: '0x9',
                chainId: '0x22b8',
                input: '0x0'
        }, 'e9534f981ce834ffb36751d0d73dc480071c286b4a93854ec4388b96a4b95240')
        .then(console.log); //先产生该rawTransaction


//然后发送该rawTransaction
web3.eth.sendSignedTransaction("0xf86509841000000082521894f0109fc8df283027b6285cc889f5aa624eac1f556400824594a01368a3f4f526bd2ed13cae40544dc14809321a4b1a4e95be3ef0fdc7ce3e5eeda033823191dd2deb025a536ebee554a52423e477f8499d098d69de5d46c814a4d3", function (err, hash) {
        if (err) {
                console.log(err)
        } else {
                console.log(hash);
        }

})