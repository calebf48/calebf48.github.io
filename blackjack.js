// Function to generate a random card (1 to 11)
function getRandomCard() {
    return Math.floor(Math.random() * 11) + 1;
  }
  
  // Function to calculate the sum of the player's cards
  function getCardSum(cards) {
    return cards.reduce((sum, card) => sum + card, 0);
  }
  
  // Function to check if the player has bust (sum > 21)
  function isBust(sum) {
    return sum > 21;
  }
  
  // Function to prompt the user for a decision (hit or stand)
  function getPlayerDecision() {
    return prompt("Do you want to Hit or Stand? (Type 'hit' or 'stand')");
  }
  
  // Function to simulate the dealer's turn
  function playDealerTurn() {
    let dealerCards = [];
  
    // Dealer must always draw at least one card
    dealerCards.push(getRandomCard());
  
    while (getCardSum(dealerCards) < 17) {
      dealerCards.push(getRandomCard());
    }
  
    return dealerCards;
  }
  
  // Function to determine the winner of the game
  function getWinner(playerSum, dealerSum) {
    if (playerSum > dealerSum || isBust(dealerSum)) {
      return "Player";
    } else if (playerSum < dealerSum || isBust(playerSum)) {
      return "Dealer";
    } else {
      return "Draw";
    }
  }
  
  // Function to start the Blackjack game
  function playBlackjack() {
    let playerCards = [getRandomCard(), getRandomCard()];
    let dealerCards = [getRandomCard()];
  
    while (true) {
      const playerSum = getCardSum(playerCards);
      const dealerSum = getCardSum(dealerCards);
  
      // Display current status
      console.log(`Your cards: ${playerCards.join(", ")}`);
      console.log(`Your current sum: ${playerSum}`);
      console.log(`Dealer's face-up card: ${dealerCards[0]}\n`);
  
      // Check if player has bust or reached 21
      if (isBust(playerSum)) {
        console.log("Bust! You lose.");
        break;
      } else if (playerSum === 21) {
        console.log("Blackjack! You win.");
        break;
      }
  
      // Ask the player to Hit or Stand
      const decision = getPlayerDecision().toLowerCase();
      if (decision === "hit") {
        playerCards.push(getRandomCard());
      } else if (decision === "stand") {
        // Dealer's turn
        while (getCardSum(dealerCards) < 17) {
          dealerCards.push(getRandomCard());
        }
  
        // Determine the winner
        const winner = getWinner(playerSum, getCardSum(dealerCards));
  
        // Display the final result
        console.log(`\nDealer's cards: ${dealerCards.join(", ")}`);
        console.log(`Dealer's sum: ${getCardSum(dealerCards)}`);
        console.log(`\n${winner === "Draw" ? "It's a draw!" : `${winner} wins!`}`);
        break;
      } else {
        console.log("Invalid input. Please type 'hit' or 'stand'.");
      }
    }
  }
  
  // Start the game
  playBlackjack();
  