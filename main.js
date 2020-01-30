var web3 = new Web3(Web3.givenProvider);
var contractInstance;

$(document).ready(function() {
    window.ethereum.enable().then(function(accounts){
        contractInstance = new web3.eth.Contract(abi, 
            "0x2349468BD5B691800aA8A4677518E0f335CC836b",
            {from: accounts[0]});
        console.log(contractInstance);
    });
});
