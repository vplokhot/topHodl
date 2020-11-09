const Web3 = require("web3")

const INFURA_KEY = process.env.INFURA_KEY;
const web3 = new Web3(new Web3.providers.HttpProvider(INFURA_KEY))

web3.eth.getBalance("0xa7DE087329BFcda5639247F96140f9DAbe3DeED1", function(err, result) {
  if (err) {
    console.log(err)
  } else {
    console.log(web3.utils.fromWei(result, "ether") + " ETH")
  }
})