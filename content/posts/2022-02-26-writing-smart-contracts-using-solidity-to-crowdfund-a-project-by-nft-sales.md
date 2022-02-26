---
title: Writing smart contracts using solidity to crowdfund a project by NFT sales
coverImage: ../post-images/2022-02-26-writing-smart-contracts-using-solidity-to-crowdfund-a-project-by-nft-sales.jpeg
---

The goal is to write a smart contract that will allow entrepreneurs to crowdfund a project by selling NFTs, so if the goal isn’t reached, the NFT holders can get their money back by burning their NFTs.

Without smart contracts, such an implementation would be complicated and limited as it would require dealing with credit cards, bank accounts, and complex refunds.
With smart contracts, anyone can write and deploy simple contracts and raise funds to create new projects.

I was starting with the openzeppelin wizard and created a smiple smart ERC721 contract:
https://wizard.openzeppelin.com/#erc721

## Constants

Token Price
```solidity
uint256 public constant MINT_PRICE = 0.4 ether;
```
Token price for the extra supply
```solidity
uint256 public constant MINT_EXTRA_PRICE = 0.5 ether;
```
The minimum amount of tokens that should be sold.
This is the goal, if not reached, token holders can ask for refund.
```solidity
uint256 public constant MIN_SUPPLY = 100;
```
Extra supply to be minted for the higer price
```solidity
uint256 public constant EXTRA_SUPPLY = 50;
```
Duration in seconds of the minting phase
```solidity
uint256 public constant MINTING_DURATION = 2 weeks;
```
Maximum to mint per transaction
```solidity
uint256 public constant MAX_MINT_PER_TRANSACTION = 10;
```

## Private variables

Indicator if sale is started and when started
```solidity
uint256 private _saleStartedAt = 0;
```
The amount of tokens that already minted
```solidity
uint256 private _supplyMinted = 0;
```
TokenId counter
```solidity
Counters.Counter private _tokenIdCounter;
```

## Private mint function

The `_mintMulti` is internal, so it can only be used internaly by other functions.
This functions will recive an address that will recive the tokens and amount of tokens to mint.

```solidity
function _mintMulti(address to, uint256 amount) internal {
  // run {amount} times
  for (uint256 i = 0; i < amount; i++) {
    // get the token-id to use
    uint256 tokenId = _tokenIdCounter.current();
    // increment for the next usage
    _tokenIdCounter.increment();
    // mint a new token
    _safeMint(to, tokenId);
    // increment the _supplyMinted
    _supplyMinted = _supplyMinted.add(1);
  }
}
```

## Public functions

### `startSale`

Allows the owner to start the sale, uses the `onlyOwner` modifier to require the caller to be the owner.

```solidity
function startSale() public onlyOwner {
  require(!isSaleStarted(), "Sale already started");

  _saleStartedAt = block.timestamp;
}
```

### `Mint`

Allows users to mint tokens.

```solidity
function mint(uint256 amount) public payable {
  require(isSaleActive(), "Sale is not active");
  require(amount <= MAX_MINT_PER_TRANSACTION, "You can only mint 10 tokens at a time");
  require(supplyMinted().add(amount) <= MIN_SUPPLY, "Can not mint more than the max supply");
  require(msg.value >= amount * MINT_PRICE, "You have not sent enough ETH");

  _mintMulti(msg.sender, amount);
}
```

### `mintExtra`

Allows users to mint the extra tokens.

```solidity
function mintExtra(uint256 amount) public payable {
  require(isSaleActive(), "Sale is not active");
  require(amount <= MAX_MINT_PER_TRANSACTION, "You can only mint 10 tokens at a time");
  require(supplyMinted().add(amount) <= MIN_SUPPLY + EXTRA_SUPPLY, "Can not mint more than the max supply");
  require(msg.value >= amount * MINT_EXTRA_PRICE, "You have not sent enough ETH");
  require(isMinSupplyMinted(), "The normal supply has not minted yet");

  _mintMulti(msg.sender, amount);
}
```

### `withdraw`

Allows the owner to withdraw the funds, uses the `onlyOwner` modifier to require the caller to be the owner.

It requires the goal to be reached, unless, the owner cannot withdraw the funds.

```solidity
function withdraw() public onlyOwner {
  require(isMinSupplyMinted(), "Goal has not been reached, cannot withdraw funds");

  uint256 balance = address(this).balance;
  payable(owner()).transfer(balance);
}
```

### `getRefund`

Allows token holders to get a refund if the goal has not reached.

```solidity
/**
 * Allows token holders to get a refund if the goal has not reached
 */
function getRefund() public {
  require(isSaleFinished(), "Sale is still active");
  require(!isMinSupplyMinted(), "Goal has been reached! Cannot refund token fee");

  // get user token balance
  uint256 tokensAmount = balanceOf(msg.sender);

  require(tokensAmount > 0, "Not a token holder");

  // a list of user token-ids
  uint256[] memory userTokens = new uint256[](tokensAmount);

  // get all token-ids own by the user
  for (uint256 index = 0; index < tokensAmount; index++) {
    uint256 tokenId = tokenOfOwnerByIndex(msg.sender, index);
    userTokens[index] = tokenId;
  }

  // pay the user back
  payable(msg.sender).transfer(tokensAmount * MINT_PRICE);

  // burn the user tokens
  for (uint256 index = 0; index < tokensAmount; index++) {
    _burn(userTokens[index]);
  }
}
```

## Full Source Code

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/utils/Address.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";

contract MyCoolProject is ERC721, ERC721Enumerable, Ownable {
  using Address for address payable;
  using SafeMath for uint256;
  using Counters for Counters.Counter;
    
  /**
   * Token Price
   */
  uint256 public constant MINT_PRICE = 0.4 ether;
  /**
   * Token price for the extra supply
   */
  uint256 public constant MINT_EXTRA_PRICE = 0.5 ether;
  /**
   * The minimum amount of tokens that should be sold.
   * This is the goal of the current phase,
   * if not reached, token holders can ask for refund.
   */
  uint256 public constant MIN_SUPPLY = 100;
  /**
   * Extra supply to be minted for the higer price
   */
  uint256 public constant EXTRA_SUPPLY = 50;
  /**
   * Duration in seconds of the minting phase
   */
  uint256 public constant MINTING_DURATION = 2 weeks;
  /**
   * Maximum to mint per transaction
   */
  uint256 public constant MAX_MINT_PER_TRANSACTION = 10;

  // Indicator if sale is started and when started
  uint256 private _saleStartedAt = 0;
  // The amount of tokens that already minted
  uint256 private _supplyMinted = 0;
  // tokenId counter
  Counters.Counter private _tokenIdCounter;

  constructor() ERC721("MyCoolProject", "MCP") {}
  
  /**
   * Amount of the supply that already been minted by users
   */
  function supplyMinted() public view returns (uint256) {
    return _supplyMinted;
  }
  /**
   * Timestamp of the time the sale has started
   */
  function saleStartedAt() public view returns (uint256) {
    return _saleStartedAt;
  }
  /**
   * Boolean indicator, does the sale started?
   */
  function isSaleStarted() public view returns (bool) {
    return saleStartedAt() != 0;
  }
  /**
   * Boolean indicator, does the sale finished?
   */
  function isSaleFinished() public view returns (bool) {
    return isSaleStarted() && block.timestamp > saleStartedAt() + MINTING_DURATION;
  }
  /**
   * Boolean indicator, does the sale active?
   */
  function isSaleActive() public view returns (bool) {
    return isSaleStarted() && block.timestamp <= saleStartedAt() + MINTING_DURATION;
  }
  /**
   * Boolean indicator, does the minimum supply minted?
   */
  function isMinSupplyMinted() public view returns (bool) {
    return supplyMinted() >= MIN_SUPPLY;
  }
  /**
   * Boolean indicator, does the extra supply minted?
   */
  function isExtraSupplyMinted() public view returns (bool) {
    return supplyMinted() >= MIN_SUPPLY + EXTRA_SUPPLY;
  }
  /**
   * Allows the owner to start the sale
   */
  function startSale() public onlyOwner {
    require(!isSaleStarted(), "Sale already started");

    _saleStartedAt = block.timestamp;
  }
  /**
   * Allows everyone to mint tokens
   *
   * uint256 [amount] amount of tokens to mint
   */
  function mint(uint256 amount) public payable {
    require(isSaleActive(), "Sale is not active");
    require(amount <= MAX_MINT_PER_TRANSACTION, "You can only mint 10 tokens at a time");
    require(supplyMinted().add(amount) <= MIN_SUPPLY, "Can not mint more than the max supply");
    require(msg.value >= amount * MINT_PRICE, "You have not sent enough ETH");

    _mintMulti(msg.sender, amount);
  }
  /**
   * Allows everyone to mint the extra tokens
   *
   * uint256 [amount] amount of extra tokens to mint
   */
  function mintExtra(uint256 amount) public payable {
    require(isSaleActive(), "Sale is not active");
    require(amount <= MAX_MINT_PER_TRANSACTION, "You can only mint 10 tokens at a time");
    require(supplyMinted().add(amount) <= MIN_SUPPLY + EXTRA_SUPPLY, "Can not mint more than the max supply");
    require(msg.value >= amount * MINT_EXTRA_PRICE, "You have not sent enough ETH");
    require(isMinSupplyMinted(), "The normal supply has not minted yet");

    _mintMulti(msg.sender, amount);
  }
  /**
   * Allows the owner to withdraw the funds
   */
  function withdraw() public onlyOwner {
    require(isMinSupplyMinted(), "Goal has not been reached, cannot withdraw funds");

    uint256 balance = address(this).balance;
    payable(owner()).transfer(balance);
  }
  /**
   * Allows token holders to get a refund if the goal has not reached
   */
  function getRefund() public {
    require(isSaleFinished(), "Sale is still active");
    require(!isMinSupplyMinted(), "Goal has been reached! Cannot refund token fee");

    // get user token balance
    uint256 tokensAmount = balanceOf(msg.sender);

    require(tokensAmount > 0, "Not a token holder");

    // a list of user token-ids
    uint256[] memory userTokens = new uint256[](tokensAmount);

    // get all token-ids own by the user
    for (uint256 index = 0; index < tokensAmount; index++) {
      uint256 tokenId = tokenOfOwnerByIndex(msg.sender, index);
      userTokens[index] = tokenId;
    }

    // pay the user back
    payable(msg.sender).transfer(tokensAmount * MINT_PRICE);

    // burn the user tokens
    for (uint256 index = 0; index < tokensAmount; index++) {
      _burn(userTokens[index]);
    }
  }
  
  function _mintMulti(address to, uint256 amount) internal {
    for (uint256 i = 0; i < amount; i++) {
      uint256 tokenId = _tokenIdCounter.current();
      _tokenIdCounter.increment();
      
      _safeMint(to, tokenId);
      _supplyMinted = _supplyMinted.add(1);
    }
  }

  // The following functions are overrides required by Solidity.

  function _beforeTokenTransfer(address from, address to, uint256 tokenId)
    internal
    override(ERC721, ERC721Enumerable)
  {
    super._beforeTokenTransfer(from, to, tokenId);
  }

  function supportsInterface(bytes4 interfaceId)
    public
    view
    override(ERC721, ERC721Enumerable)
    returns (bool)
  {
    return super.supportsInterface(interfaceId);
  }
}
```