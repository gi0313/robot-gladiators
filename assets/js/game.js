var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Megan", "Amy Android" ,"Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);

var fight = function (enemyName) {

    //repeat and execute as long as the enemy robot is alive
while(playerHealth > 0 && enemyHealth > 0) {
           
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        //If player skipped
     if (promptFight === "skip" || promptFight ==="SKIP") {
        //confirm skip
        var confirmSkip = window.confirm("Are you sure you want to quit?");
        //if yes
        if(confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight!");
            //subrtact money
            playerMoney = playerMoney - 10;
            console.log("playerMoney", playerMoney)
            break;
        }
    }

        //Subract enemyHealth from playerAttack
        enemyHealth = enemyHealth-playerAttack;
        //log message
        console.log(
            playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");


    //check enemy health
    if(enemyHealth <=0) {
        window.alert(enemyName + " has died!");

        //award money
        playerMoney = playerMoney + 20;
        //leave since enemy is dead
        break;

    } else{
        window.alert(enemyName+ " still has "+enemyHealth+ " health left.");
    }

    //Subtract playerHealth from enemyAttack
    playerHealth = playerHealth-enemyAttack;
    //log message
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    
        //check player health
    if (playerHealth <=0) {
        window.alert(playerName + " has died");
        //leave since player is dead
        break;

    } else {
        window.alert(playerName+ " still has "+ playerHealth + " health left.");
    }
  }
}

//function to start a new game
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

for (var i = 0; i < enemyNames.length; i++) {
    //debugger;
    if (playerHealth > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
  
      // pick new enemy to fight based on the index of the enemyNames array
      var pickedEnemyName = enemyNames[i];
      //reset health
      enemyHealth = 50;
        //debugger;
      // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
      fight(pickedEnemyName);
      //if not at the last enemy in array and player is still alive
      if (playerHealth > 0 && i < enemyNames.length - 1) {
          //ask if player wants to enter shop
          var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
          //if yes
          if (storeConfirm) {
              shop();
          } 
      }
    }
    else {
        window.alert('You Have lost your robot in battle! Game Over!');
        break;
    }
    endGame();
    //play again
    startGame();
  }
}

//endgame function
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    //if player is alive. player wins
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }
    //ask if want to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    if(playAgainConfirm) {
        //restart game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back again soon!");
    }
}

var shop = function() {
    //ask what to do
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice.");
    //use switch
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney >=7) {
                window.alert("Refilling player's health by 20 for 7 dollars.");

            //increase health and decrease money
            playerHealth =playerHealth + 20;
            playerMoney = playerMoney-7;
            }
            else {
                window.alert("You don't have enough money!");
            }
            break;

        case "UPGRADE":
        case "upgrade":
            if (playerMoney >=7) {
            window.alert("Upgrading player's attack by 6 for 7 dollars.");

            //increase attacka and decrease money
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            }
            else {
                window.alert ("You don't have enough money!");
            }
            break;

        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            //do nothing
            break;
        
        default:
            window.alert("You did not pick a valid option. Try again.");
            //call shop again
            shop();
            break;
    }
}
//start game
startGame();
