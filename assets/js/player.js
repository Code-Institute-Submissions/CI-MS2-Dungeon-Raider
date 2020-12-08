let player;

function Player(classType, health, strength, agility, speed) {
    this.classType = classType;
    this.health = health;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}

let PlayerMoves = {
    calcAttack: function () {
        // Who attacks first
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;

        // Player attacks
        let playerAttack = function() {
            let calcBaseDamage;
            calcBaseDamage = player.strength * player.agility / 1000;
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            // Number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) /2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }
        // Enemy attacks
        let enemyAttack = function() {
            let calcBaseDamage;
            calcBaseDamage = enemy.strength * enemy.agility / 1000;
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            // Number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) /2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;            
        }
        // Get Player/Enemy health to change later
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");
        // Initiate attacks
        if (getPlayerSpeed >= getEnemySpeed) {
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
            if (enemy.health <= 0) {
                nextEnemy();
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                getEnemyHealth.innerHTML = 'Health: 0';
            } else {
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                // Enemy attacks
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalDamage;
                alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
                if (player.health <= 0) {
                    alert("You lose! Refresh browser to play again");
                    getPlayerHealth.innerHTML = 'Health: 0';
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                } else {
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                }
            }
        }
        else if (getPlayerSpeed >= getEnemySpeed) {
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
            if (player.health <= 0) {
                alert("You lose! Refresh browser to play again.");
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                getPlayerHealth.innerHTML = 'Health: 0';
            } else {
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                // Player attacks
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                enemy.health = enemy.health - totalDamage;
                alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
                if (enemy.health <= 0) {
                    nextEnemy();
                    getEnemyHealth.innerHTML = 'Health: 0';
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                } else {
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                }
            }
        }        
    },
    calcCounter: function () {
        // Who attacks first
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;

        // Player attacks
        let playerAttack = function() {
            let calcBaseDamage;
            calcBaseDamage = player.strength * player.agility / 1000;
            let offsetDamage = Math.floor(Math.random() * Math.floor(10 - 0.25));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            // Number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(player.agility / 10) /2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;
        }
        // Enemy attacks
        let enemyAttack = function() {
            let calcBaseDamage;
            calcBaseDamage = enemy.strength * enemy.agility / 1000;
            let offsetDamage = Math.floor(Math.random() * Math.floor(10) / 2);
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            // Number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) /2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;           
        }
        // Get Player/Enemy health to change later
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");
        // Initiate attacks
        if (getPlayerSpeed >= getEnemySpeed) {
            let playerAttackValues = playerAttack();
            let totalDamage = playerAttackValues[0] * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
            if (enemy.health <= 0) {
                nextEnemy();
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                getEnemyHealth.innerHTML = 'Health: 0';
            } else {
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                // Enemy attacks
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalDamage;
                alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
                if (player.health <= 0) {
                    alert("You lose! Refresh browser to play again");
                    getPlayerHealth.innerHTML = 'Health: 0';
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                } else {
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                }
            }
        }
        else if (getPlayerSpeed >= getEnemySpeed) {
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
            if (player.health <= 0) {
                alert("You lose! Refresh browser to play again.");
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                getPlayerHealth.innerHTML = 'Health: 0';
            } else {
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                // Player attacks
                let playerAttackValues = playerAttack();
                let totalDamage = playerAttackValues[0] * playerAttackValues[1];
                enemy.health = enemy.health - totalDamage;
                alert("You hit " + playerAttackValues[0] + " damage " + playerAttackValues[1] + " times.");
                if (enemy.health <= 0) {
                    nextEnemy();
                    getEnemyHealth.innerHTML = 'Health: 0';
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                } else {
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                }
            }
        }
    },
    calcHeal: function () {
        // Who attacks first
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;

        // Player Heals
        let playerHeal = function() {
            let healthIncrease;
            healthIncrease = player.health + 250;
        }

        // Enemy attacks
        let enemyAttack = function() {
            let calcBaseDamage;
            calcBaseDamage = enemy.strength * enemy.agility / 1000;
            let offsetDamage = Math.floor(Math.random() * Math.floor(10));
            let calcOutputDamage = calcBaseDamage + offsetDamage;
            // Number of hits
            let numberOfHits = Math.floor(Math.random() * Math.floor(enemy.agility / 10) /2) + 1;
            let attackValues = [calcOutputDamage, numberOfHits];
            return attackValues;            
        }
        // Get Player/Enemy health to change later
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");

        // Initiate attacks
        if (getPlayerSpeed >= getEnemySpeed) {
            playerHeal();
            alert("You healed for " + 250 + ".");
            if (enemy.health <= 0) {
                nextEnemy();
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                getEnemyHealth.innerHTML = 'Health: 0';
            } else {
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                // Enemy attacks
                let enemyAttackValues = enemyAttack();
                let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
                player.health = player.health - totalDamage;
                alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
                if (player.health <= 0) {
                    alert("You lose! Refresh browser to play again");
                    getPlayerHealth.innerHTML = 'Health: 0';
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                } else {
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                }
            }
        }
        else if (getPlayerSpeed >= getEnemySpeed) {
            let enemyAttackValues = enemyAttack();
            let totalDamage = enemyAttackValues[0] * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            alert("Enemy hit " + enemyAttackValues[0] + " damage " + enemyAttackValues[1] + " times.");
            if (player.health <= 0) {
                alert("You lose! Refresh browser to play again.");
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                getPlayerHealth.innerHTML = 'Health: 0';
            } else {
                getPlayerHealth.innerHTML = 'Health: ' + player.health;
                // Player attacks
                playerHeal();
                alert("You healed for " + 250 + ".");
                if (enemy.health <= 0) {
                    nextEnemy();
                    getEnemyHealth.innerHTML = 'Health: 0';
                    getPlayerHealth.innerHTML = 'Health: ' + player.health;
                } else {
                    getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                }
            }
        }         
    }
}