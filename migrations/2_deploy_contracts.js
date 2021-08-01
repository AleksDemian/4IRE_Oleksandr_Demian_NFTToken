var NFTToken = artifacts.require("NFTToken");

module.exports = function (deployer) {
  deployer.deploy(NFTToken, 'ODemian', 'OD');
};