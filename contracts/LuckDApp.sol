// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract LuckDApp is Ownable {
  using SafeMath for uint256;

  event LuckChallengeResults(bool results, uint random, uint[] ldna);

  uint nonce = 0;

  struct LDNA {
    string r;
    string g;
    string b;
    string a;
  }

  LDNA[] public luckDNA;

  mapping (address => string) public playerToName;
  mapping (uint => address) public ldnaToOwner;
  mapping (address => uint) ldnaCount;
  mapping (bytes32 => bool) hashToLDNA;

  function _createLDNA(address _owner) internal {
    LDNA memory ldna = _generateRandomLDNA(_owner);
    luckDNA.push(ldna);
    uint id = luckDNA.length - 1;
    ldnaToOwner[id] = _owner;
    ldnaCount[_owner] = ldnaCount[_owner].add(1);
    bytes32 hash = keccak256(abi.encodePacked(ldna.r, ldna.g, ldna.b, ldna.a));
    hashToLDNA[hash] = true;
  }

  function _burnLDNA(uint _ldna) internal pure returns (uint) {
    return _ldna;
  }

  function _generateRandomLDNA(address _owner) internal returns (LDNA memory _ldna) {
    string memory r = Strings.toString(_random(256));
    string memory g = Strings.toString(_random(256));
    string memory b = Strings.toString(_random(256));
    string memory a = Strings.toString(_random(101));
    if (!ldnaExists(r, g, b, a)) {
      return LDNA(r, g, b, a);
    } else {
      _createLDNA(_owner);
    }
  }

  function _random(uint _num) internal returns (uint) {
    uint random = uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, nonce))) % _num;
    random = random - 1;
    nonce++;
    return random;
  }

  function _runLuckChallenge(uint _ldna) internal {
    bool results;
    uint random = _random(100);
    if (random > 49) {
      _createLDNA(msg.sender);
      results = true;
    } else {
      _burnLDNA(_ldna);
      results = false;
    }
    uint[] memory ldna = playerLDNA(msg.sender);
    emit LuckChallengeResults(results, random, ldna);
  }

  function newPlayer(string memory _name) public {
    require(bytes(playerToName[msg.sender]).length == 0);
    playerToName[msg.sender] = _name;
    _createLDNA(msg.sender);
    _createLDNA(address(this));
  }

  function luckChallenge(uint _ldna) public {
    _runLuckChallenge(_ldna);
  }

  function ldnaExists(string memory _r, string memory _g, string memory _b, string memory _a) public view returns (bool) {
    if (hashToLDNA[keccak256(abi.encodePacked(_r, _g, _b, _a))]) {
      return true;
    } else {
      return false;
    }
  }

  function playerLDNA(address _owner) public view returns(uint[] memory) {
    uint[] memory ldna = new uint[](ldnaCount[_owner]);
    uint counter = 0;
    for (uint i = 0; i < luckDNA.length; i++) {
      if (ldnaToOwner[i] == _owner) {
        ldna[counter] = i;
        counter++;
      }
    }
    return ldna;
  }
}
