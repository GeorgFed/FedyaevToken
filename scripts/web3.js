const Web3 = require('web3')
var web3 = new Web3(new Web3.providers.HttpProvider("https://goerli.infura.io/v3/6bbbcbb8e4364b5d8cf8c3a8794145d0"));

// Получаем контракт
const contract_address = "0x960F3834E2D2B793d8b1037123c1c9201014d479";
const contract_abi = require("../artifacts/contracts/FedyaevToken.sol/FedyaevToken.json");


const gettedContact = new web3.eth.Contract(contract_abi.abi, contract_address)
gettedContact.methods.testConnection().call().then(console.log)
