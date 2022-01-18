//https://eth-ropsten.alchemyapi.io/v2/2boPoAF1VDn6kPCN9NA7VSSD69aheqzS


// Waffle helps build smart contract test
require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/2boPoAF1VDn6kPCN9NA7VSSD69aheqzS',
      accounts: ['19b44efb84ff580cccc1bad55c07296bcfddf08a42cb0ac23c5a6e561aa21637']
    }
  }
}