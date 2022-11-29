/** @type import('hardhat/config').HardhatUserConfig */

require('@nomiclabs/hardhat-ethers')
require('@nomicfoundation/hardhat-chai-matchers')
require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.17",
};

const GOERLI_PRIVATE_KEY = "0ac187273f09cb3ec5b9420cd84765ed700f0ed07b7c9002aa5372698dff15d0";
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: `https://goerli.infura.io/v3/dc04a514c25745ddb270fa826bac863c`,
      accounts: [GOERLI_PRIVATE_KEY]
    }
  }
};
