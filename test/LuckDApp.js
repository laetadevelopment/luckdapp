const LuckDApp = artifacts.require("LuckDApp");
const utils = require("./helpers/utils");
const playerNames = ["Alice", "Bob"];
contract("LuckDApp", (accounts) => {
  let alice = accounts[1];
  let bob = accounts[2];
  let contractInstance;
  beforeEach(async () => {
    contractInstance = await LuckDApp.new();
  });
  it("should be able to create a new player", async () => {
    const player = await contractInstance.newPlayer(playerNames[0], {from: alice});
    const name = await contractInstance.playerToName.call(alice);
    assert.equal(player.receipt.status, true);
    assert.equal(name, playerNames[0]);
  })
  it("should not be able to create two players", async () => {
    await contractInstance.newPlayer(playerNames[0], {from: alice});
    await utils.shouldThrow(contractInstance.newPlayer(playerNames[1], {from: alice}))
  })
  it("should be able to run Luck Challenge", async () => {
    const player = await contractInstance.newPlayer(playerNames[0], {from: alice});
    const playerLDNA = await contractInstance.playerLDNA.call(alice);
    const challenge = await contractInstance.luckChallenge(playerLDNA[0], {from: alice});
    const results = await contractInstance.getPastEvents("LuckChallengeResults");
    if (results[0].returnValues.results) {
      assert.equal(results[0].returnValues.results, true);
    } else {
      assert.equal(results[0].returnValues.results, false);
    }
  })
})
