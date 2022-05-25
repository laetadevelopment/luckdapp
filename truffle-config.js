const HDWalletProvider = require('@truffle/hdwallet-provider')
require('dotenv').config()

const ropstenkey = process.env.ROPSTEN_PRIVATE_KEY
const ropstenurl = process.env.ROPSTEN_RPC_URL

module.exports = {
  networks: {
    test: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "5777"
    },
    ropsten: {
      provider: () => {
        return new HDWalletProvider(ropstenkey, ropstenurl)
      },
      network_id: '3',
      skipDryRun: true
    }
  },
  compilers: {
    solc: {
      version: "0.8.13",
    }
  }
};
