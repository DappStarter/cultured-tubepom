require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'gloom problem brown turtle chaos rare remind modify give clog bridge sustain'; 
let testAccounts = [
"0xe821eb7f4ca9310396adcba8a4c92fbf5b54711023f3fa780f44a4a65fe628f9",
"0x6b5d7670e2abd6487ca0d625d80b0b4b90bc03049b92c9f02bc42a72bc932b4f",
"0x2fac11d589bddb009b3be71e37f2792da59069a5e65248c392ff696e9921e03e",
"0xe27648ee648aa4398869fd128e036aa5197117a8396a1c6d85f1cc3e81f66fe2",
"0xd7618b341bd526ecda16a73893a983d0a858c375c32f4487e04682b48ad173df",
"0xa9ebe274d6c392ba1fc4b3b17528857488898d7bf489ec4fb258f3439fce9126",
"0x78b3db13719eeef763c081c03e3aeace79f82c288b5a1a9e74221d474a52ac5c",
"0x83330e36cd7fd93fdd660d5e56503106fab5c709b201cf12ad58b42c1155e3a3",
"0x9559dc1614817bdb3abb1983d5585a7d232ac78f0361e91e48b4d39ca2090290",
"0x722752c35af37b4b120bb86c9b71ed14c275bdc96c95272e37b2f08e92fa452b"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


