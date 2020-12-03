let player;

function Player(classType, health, stamina, strength, agility, speed) {
    this.classType = classType;
    this.health = health;
    this.stamina = stamina;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}

let PlayerMoves = {
    calcAttack: function () {
        // Who attacks first
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;
    }
    // Player attacks
    let playerAttack = function() {
        let calcBaseDamage;
        if (player.stamina > 0){
            calcBaseDamage = player.strength * player.stamina / 1000;
        } else {
            calcBaseDamage = player.strength * player.agility / 1000;
        }
        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        let calcOutputDamage = calcBaseDamage + offsetDamage;
        // Number of hits
        let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) / 2) + 1;
        let attackValues = [calcOutputDamage, numberOfHits];
        return attackValues;
    }
    // Enemy attacks
    let enemyAttack = function() {
        let calcBaseDamage;
        if (enemy.stamina > 0){
            calcBaseDamage = enemy.strength * enemy.stamina / 1000;
        } else {
            calcBaseDamage = enemy.strength * enemy.agility / 1000;
        }
        let offsetDamage = Math.floor(Math.random() * Math.floor(10));
        let calcOutputDamage = calcBaseDamage + offsetDamage;
        // Number of hits
        let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) / 2) + 1;
        let attackValues = [calcOutputDamage, numberOfHits];
        return attackValues;
    }
    // Get player/enemy health
    let getPlayerHealth = document.querySelector(".health-player");
    let getEnemyHealth = document.querySelector(".health-enemy");
    // Initiate attacks
    if (getEnemySpeed >= getEnemySpeed) {
        let playerAttackValues = playerAttack();
        let totalDamage = playerAttackValues[0] * playerAttackValues[1];
        enemy.health = enemy.health - totalDamage;
        alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
        if (enemy.health <= 0) {
            alert("You win! Refresh the browser to play again.");
            getPlayerHealth.innerHTML = 'Health: ' + player.health;
            getEnemyHealth.innerHTML = 'Health: 0';
        } else {
            getEnemyHealth.innerHTML = 'Health: ' + enemy.health;            
        }
    }
}