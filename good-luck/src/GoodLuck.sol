// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract GoodLuck {
    struct Bet {
        uint id;
        address user;
        uint amount;
        string team;
        bool isActive;
    }

    mapping(uint => Bet) public bets;
    uint public betCount;

    function createBet(string memory _team) public payable {
        betCount++;
        bets[betCount] = Bet(betCount, msg.sender, msg.value, _team, true);
    }

    function checkBet(uint _betId) public view returns (Bet memory) {
        return bets[_betId];
    }

    function deleteBet(uint _betId) public {
        require(bets[_betId].user == msg.sender, "Only the owner can delete the bet");
        bets[_betId].isActive = false;
        payable(msg.sender).transfer(bets[_betId].amount);
    }
}
