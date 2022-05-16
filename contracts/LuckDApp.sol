// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract LuckDApp is Ownable {
  uint nonce = 0;

  struct LDNA {
    string r;
    string g;
    string b;
    string a;
  }

  LDNA ldna;
  LDNA[] public luckDNA;

  mapping (uint => address) public ldnaToOwner;
  mapping (bytes32 => uint) hashToLDNA;

  function _createLdna(address owner) internal {
    ldna = _generateRandomLdna(owner);
    luckDNA.push(ldna);
    uint id = luckDNA.length - 1;
    ldnaToOwner[id] = owner;
    bytes32 hash = keccak256(abi.encodePacked(ldna.r, ldna.g, ldna.b, ldna.a));
    hashToLDNA[hash] = id;
  }

  function _generateRandomLdna(address owner) internal returns (LDNA memory l) {
    string memory r = Strings.toString(_random(256));
    string memory g = Strings.toString(_random(256));
    string memory b = Strings.toString(_random(256));
    string memory a = Strings.toString(_random(101));
    if (!ldnaExists(r, g, b, a)) {
      return LDNA(r, g, b, a);
    } else {
      _createLdna(owner);
    }
  }

  function _random(uint num) internal returns (uint) {
    uint random = uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, nonce))) % num;
    random = random - 1;
    nonce++;
    return random;
  }

  function ldnaExists(string memory r, string memory g, string memory b, string memory a) public view returns (bool) {
    if (hashToLDNA[keccak256(abi.encodePacked(r, g, b, a))] > 0) {
      return true;
    } else {
      return false;
    }
  }

  function newPlayer() public {
    _createLdna(msg.sender);
    _createLdna(address(this));
  }
}
