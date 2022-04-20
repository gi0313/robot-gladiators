//function to generate a random muneric value
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random()*(max-min+1)) + min;
    return value;
}

var fight = function (enemy) {
 //repeat and execute as long as the enemy robot is alive
while(playerInfo.health > 0 && enemy.health > 0) {          
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        //If player skipped
     if (promptFight === "skip" || promptFight === "SKIP") {
        //confirm skip
        var confirmSkip = window.confirm("Are you sure you want to quit?");
        //if yes
        if(confirmSkip) {
            window.alert(playerInfo.name + " has chosen to skip the fight!");
            //subrtact money
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerMoney", playerInfo.money);
            break;
        }
    }

        //Subract enemy.health from playerAttack
        var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
        enemy.health = Math.max(0, enemy.health - damage);
        //log message
        console.log(
            playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.healthwad + " health remaining.");


    //check enemy health
    if(enemy.health <=0) {
        window.alert(enemy.name + " has died!");

        //award money
        playerInfo.money = playerInfo.money + 20;
        //leave since enemy is dead
        break;

    } else{
        window.alert(enemy.name+ " still has "+enemy.health+ " health left.");
    }

    //Subtract playerHealth from enemy.attack
    var damage = randomNumber(enemy.attack - 3, enemy.attack);
    playerInfo.health = Math.max(0, playerInfo.health - damage);
    //log message
    console.log(
        enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.ealth + " health remaining.");
    
        //check player health
    if (playerInfo.health <=0) {
        window.alert(playerInfo.name + " has died");
        //leave since player is dead
        break;

    } else {
        window.alert(playerInfo.name+ " still has "+ playerInfo.health + " health left.");
    }
  }
}

//function to start a new game
var startGame = function() {
    //reset player stats
    playerInfo.reset();

for (var i = 0; i < enemyInfo.length; i++) {
    //debugger;
    if (playerInfo.health > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert('Welcome to Robot Gladiators! Round ' + (i + 1));
      debugger;
  
      // pick new enemy to fight based on the index of the enemy.names array
      var pickedEnemyObj = enemyInfo[i];
      //reset health
      pickedEnemyObj = randomNumber(40, 60);
        //debugger;
      // pass the pickedenemy.name variable's value into the fight function, where it will assume the value of the enemy.name parameter
      fight(pickedEnemyObj);
      //if not at the last enemy in array and player is still alive
      if (playerInfo.health > 0 && i < enemyInfo.length - 1) {
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
  }
  endGame();
}

//endgame function
var endGame = function() {
    window.alert("The game has now ended. Let's see how you did!");
    //if player is alive. player wins
    if (playerInfo.health > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerInfo.money + ".");
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
            playerInfo.refillHealth();
            break;

        case "UPGRADE":
        case "upgrade":
            playerInfo.upgradeAttack();
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

var getPlayerName = function() {
    var name = "";
    while(name === "" || name === null) {
        name = prompt("What is your robot's name?")
    }
}

var playerInfo = {
    name: getPlayerName(),
    health: 100,
    attack: 10,
    money: 10,
    reset: function() {
        this.health = 100;
        this.money = 10;
        this.attack= 10;
    },
    refillHealth: function() {
        if (this.money >= 7){
        this.attack += 6;
        this.money -= 7;
        } else {
            window.alert("You don't have enough monmey!");
        }
    },
    upgradeAttack: function() {
        if (this.money >= 7) {
        this.attack += 6;
        this.money -= 7;
        } else {
            window.alert("You don't have enough monmey!");
        }
    }
}

var enemyInfo = [
    {
        name: "Roborto",
        attack: randomNumber(10,14)
    },
    {
        name: "Amy Android",
        attack: randomNumber(10, 14)
    },
    {
        name: "Robo Trumble",
        attack: randomNumber(10,14)
    }
];

//start game
startGame();
