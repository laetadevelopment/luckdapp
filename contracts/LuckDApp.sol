// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract LuckDApp is Ownable {
  using SafeMath for uint256;

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

  function _createLdna(address _owner) internal {
    LDNA memory ldna = _generateRandomLdna(_owner);
    luckDNA.push(ldna);
    uint id = luckDNA.length - 1;
    ldnaToOwner[id] = _owner;
    ldnaCount[_owner] = ldnaCount[_owner].add(1);
    bytes32 hash = keccak256(abi.encodePacked(ldna.r, ldna.g, ldna.b, ldna.a));
    hashToLDNA[hash] = true;
  }

  function _generateRandomLdna(address _owner) internal returns (LDNA memory _ldna) {
    string memory r = Strings.toString(_random(256));
    string memory g = Strings.toString(_random(256));
    string memory b = Strings.toString(_random(256));
    string memory a = Strings.toString(_random(101));
    if (!ldnaExists(r, g, b, a)) {
      return LDNA(r, g, b, a);
    } else {
      _createLdna(_owner);
    }
  }

  function _random(uint _num) internal returns (uint) {
    uint random = uint(keccak256(abi.encodePacked(block.timestamp, msg.sender, nonce))) % _num;
    random = random - 1;
    nonce++;
    return random;
  }

  function newPlayer(string memory _name) public {
    require(bytes(playerToName[msg.sender]).length == 0);
    playerToName[msg.sender] = _name;
    _createLdna(msg.sender);
    _createLdna(address(this));
  }

  function luckChallenge(uint _ldna) public pure returns (uint) {
    uint ldna = _ldna;
    return ldna;
  }

  function ldnaExists(string memory _r, string memory _g, string memory _b, string memory _a) public view returns (bool) {
    if (hashToLDNA[keccak256(abi.encodePacked(_r, _g, _b, _a))]) {
      return true;
    } else {
      return false;
    }
  }

  function playerLDNA(address _owner) external view returns(uint[] memory) {
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
