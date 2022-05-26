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
    await contractInstance.newPlayer(playerNames[0], {from: alice});
    const playerLDNA = await contractInstance.playerLDNA.call(alice);
    const challenge = await contractInstance.luckChallenge(playerLDNA[0], {from: alice});
    const results = await contractInstance.getPastEvents("LuckChallengeResults");
    assert.equal(challenge.receipt.status, true);
    if (results[0].returnValues.results) {
      assert.equal(results[0].returnValues.results, true);
    } else {
      assert.equal(results[0].returnValues.results, false);
    }
  })
  it("should not be able to purchase LDNA if player has LDNA", async () => {
    await contractInstance.newPlayer(playerNames[0], {from: alice});
    await utils.shouldThrow(contractInstance.getLDNA({from: alice, value: 5000000000000000}));
  })
  it("should be able to purchase one more LDNA if player has zero LDNA", async () => {
    await contractInstance.newPlayer(playerNames[0], {from: alice});
    const playerLDNA = await contractInstance.playerLDNA.call(alice);
    await contractInstance.luckChallenge(playerLDNA[0], {from: alice});
    const results = await contractInstance.getPastEvents("LuckChallengeResults");
    if (results[0].returnValues.results) {
      // TODO: need to make an efficient way to ensure player gets to zero LDNA to fully verify
      await utils.shouldThrow(contractInstance.getLDNA({from: alice, value: 5000000000000000}));
    } else {
      const ldna = await contractInstance.getLDNA({from: alice, value: 5000000000000000});
      assert.equal(ldna.receipt.status, true);
    }
  })
})
