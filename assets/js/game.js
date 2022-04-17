var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var enemyName = "Megan";
var enemyHealth = "50";
var enemyAttack = "12";
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth);

var fight = function () {
    window.alert("Welcome to Robot Gladiators!")
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

    if(promptFight === "fight" || promptFight === "FIGHT") {

    //Subract enemyHealth from playerAttack
    enemyHealth = enemyHealth-playerAttack;
    //log message
    console.log(
        playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
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
        enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
    //check player health
    if (playerHealth <=0) {
        window.alert(playerName+ " has died");
    }
    else {
        window.alert(playerName+ " still has "+ playerHealth + " health left.");
    }
    //If player skipped
    } else if (promptFight === "skip" || promptFight ==="SKIP") {
        //confirm skip
        var confirmSkip = window.confirm("Are you sure you want to quit?");
        //if yes
        if(confirmSkip) {
            window.alert(playerName+ " has chosen to skip the fight!");
            //subrtact money
            playerMoney = -2;
        }
        //if no
        else {
            fight();
        }
    } else {
        window.alert("You need to cheoose a valid otion. Try again!");
    }
}

fight();