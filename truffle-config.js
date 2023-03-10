const HDWalletProvider = require('truffle-hdwallet-provider')
const { wrapProvider } = require('arb-ethers-web3-bridge')
require('dotenv').config();

mnemonic = process.env.KEY_MNEMONIC;
infuraApiKey = process.env.KEY_INFURA_API_KEY;

module.exports = {	
  networks: {	
    rpc: {	
      network_id: '*',	
      host: 'localhost',	
      port: 8545,	
      gas: 9000000,	
      gasPrice: 10000000000 //10 Gwei	
    },	
    develop: {	
      network_id: '66',	
      host: 'localhost',	
      port: 8545,	
      gas: 9000000,	
      gasPrice: 10000000000 //10 Gwei	
    },	
    mainnet: {	
      provider: function () {	
        return new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/${infuraApiKey}`)	
      },	
      network_id: '1',	
      gas: 9000000,	
      gasPrice: 10000000000 //10 Gwei	
    },	
    rinkeby: {	
      provider: function () {	
        return new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraApiKey}`)	
      },	
      network_id: '4',	
      gas: 9000000,	
      gasPrice: 10000000000 //10 Gwei	
    },	
    ropsten: {	
      provider: function () {	
        return new HDWalletProvider(mnemonic, `https://ropsten.infura.io/v3/${infuraApiKey}`)	
      },	
      network_id: '3',	
      gas: 8000000,	
      gasPrice: 10000000000 //10 Gwei	
    },	
    kovan: {	
      provider: function () {	
        return new HDWalletProvider(mnemonic, `https://kovan.infura.io/v3/${infuraApiKey}`)	
      },	
      network_id: '42',	
      gas: 9000000,	
      gasPrice: 10000000000 //10 Gwei	
    },
    arbitrumTestnetV3: {
      provider: function() {
        return wrapProvider(new HDWalletProvider(mnemonic, 'https://kovan3.arbitrum.io/rpc'))
      },
      network_id: '79377087078960',
      gas: 9000000,
      gasPrice: 10000000000 //10 Gwei
    },
    tbinance: {
      provider: () => new HDWalletProvider(mnemonic, `https://data-seed-prebsc-1-s1.binance.org:8545`),
      network_id: '97',
      // confirmations: 10,
      // timeoutBlocks: 200,
      truegas: 9000000,
      gasPrice: 10000000000 //10 Gwei
    }
  },	
  build: {},	
  compilers: {	
    solc: {	
      version: '0.6.6',
      settings: {
        evmVersion: 'istanbul',
      }
    }
  },	
  solc: {	
    optimizer: {	
      enabled: true,	
      runs: 200	
    }
  },	
}
