require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'imitate prize frame street name rice night pull harvest glide equal gather'; 
let testAccounts = [
"0x33de9f538ac35f4ce652b1928f884294465bad0417afeb7288a2b71a0aceae59",
"0x171d207e29125f9141d1c9d4c708f1ad20aa0499fad65c6cbfbcfa3db7e332bb",
"0x28d810bd51e17fb1e78995b7e6d8fc0ae640d0bcc41c08ba658d2e5f8811d49d",
"0xe556190bed124300c9f79018d0f1a811a31de7c46372c42dcd3023d364bc7473",
"0xede9aa8fef35475f19f7fcf37608df09b1cc26942065b0b7478a9555fcf12d98",
"0x554d93ebf55add5e3b22bcf60b9d33da5e31e951a4dfcf846cce3d22120ab826",
"0xf7a9817745d7b27af509489537a1bfb655255af2dc2c5fe6f832274deb0bfd68",
"0x54edc76175208873ec76d6cb68b9f228b71f94556b6fa776d7e5762a591d3521",
"0x7f42ea4e1580fb8c241a98cf3625efd590ebbe54737a55482f53f3bd2a8f4d39",
"0x0dcf345b0451b57d715aae0f3434e11d0b80e256c1d3ebad89fb68b8d8dc83d6"
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


