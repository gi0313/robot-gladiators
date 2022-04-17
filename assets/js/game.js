var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var enemyName = "Megan";
var enemyHealth = "50";
var enemyAttack = "12";

console.log(playerName, playerAttack, playerHealth);

var fight = function () {
    window.alert("Welcome to Robot Gladiators!")

    //Subract enemyHealth from playerAttack
    enemyHealth = enemyHealth-playerAttack;
    //log message
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
        );
    //check enemy health
    if(enemyHealth <=0) {
        window.alert(enemyName+ " has died!");
    }
    else{
        window.alert(enemyName+ " still has "+enemyHealth+ " health left.");
    }
    //Subtract playerHealth from enemyAttack
    playerHealth = playerHealth-enemyAttack;
    //log message
    console.log(
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );
    //check player health
    if (playerHealth <=0) {
        window.alert(playerName+ " has died");
    }
    else {
        window.alert(playerName+ " still has "+ playerHealth + " health left.");
    }

};

fight();