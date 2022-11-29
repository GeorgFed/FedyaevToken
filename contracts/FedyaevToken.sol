// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract FedyaevToken is ERC20, Ownable {
    constructor() ERC20("FedyaevToken", "SAT") {
        _mint(msg.sender, 10000000 * 10**decimals());
    }

    function testConnection() public view returns (bool) {
        return true;
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
