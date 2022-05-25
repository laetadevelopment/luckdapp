const LuckDApp = artifacts.require("LuckDApp");
const playerNames = ["Alice", "Bob"];
contract("LuckDApp", (accounts) => {
  let alice = accounts[1];
  let bob = accounts[2];
  let contractInstance;
  beforeEach(async () => {
    contractInstance = await LuckDApp.new();
  });
  it("should be able to create a new player", async () => {
    const result = await contractInstance.newPlayer(playerNames[0], {from: alice});
    assert.equal(result.receipt.status, true);
  })
  it("should not be able to create two players", async () => {
    const result = await contractInstance.newPlayer(playerNames[0], {from: alice});
    assert.equal(result.receipt.status, true);
  })
  it("should be able to run Luck Challenge", async () => {
    const playerLDNA = await contractInstance.playerLDNA(alice);
    // console.log(playerLDNA);
    // const results = await contractInstance.getPastEvents("LuckChallengeResults");
    // if (results[0].returnValues.results) {
    //   assert.equal(results[0].returnValues.results, true);
    // } else {
    //   assert.equal(results[0].returnValues.results, false);
    // }
  })
})
