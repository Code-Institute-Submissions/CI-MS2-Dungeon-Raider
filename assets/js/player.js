// Base code written by following a YouTube tutorial by Dani Krossing and adapted to own project
let player;
// Player constructor
function Player(classType, health, strength, agility, speed) {
    this.classType = classType;
    this.health = health;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}

let PlayerMoves = {
    // Attack - Player move
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
        // Get Player/Enemy health and damage to change later
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");
        let getPlayerDamage = document.querySelector(".player-damage");
        let getEnemyDamage = document.querySelector(".enemy-damage");
        let getCounter = document.querySelector(".enemy-counter");
        // Initiate attacks
        if (getPlayerSpeed >= getEnemySpeed) {
            let playerAttackValues = playerAttack();
            let totalDamage = Math.round(playerAttackValues[0]) * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            getPlayerDamage.innerHTML = 'You hit ' + Math.round(playerAttackValues[0]) + ' damage ' + playerAttackValues[1] + ' times, totalling ' + Math.round(playerAttackValues[0] * playerAttackValues[1]);
            if (enemy.health <= 0) {
                if (enemyDefeated === 3) {
                    $('#winModal').modal('show');
                    winAudio.play();
                    getCounter.innerHTML = '<p>Enemies Defeated: ' + enemyDefeated++ + '</p>';
                } else {
                    nextEnemy();
                    getPlayerHealth.innerHTML = 'Health: ' + Math.round(player.health);
                    getEnemyHealth.innerHTML = 'Health: 0';
                    getCounter.innerHTML = '<p>Enemies Defeated: ' + enemyDefeated++ + '</p>';                  
                }
            } else {
                getEnemyHealth.innerHTML = 'Health: ' + Math.round(enemy.health);
                // Enemy attacks
                let enemyAttackValues = enemyAttack();
                let totalDamage = Math.round(enemyAttackValues[0]) * enemyAttackValues[1];
                player.health = player.health - totalDamage;
                getEnemyDamage.innerHTML = 'Enemy hit ' + Math.round(enemyAttackValues[0]) + ' damage ' + enemyAttackValues[1] + ' times, totalling ' + Math.round(enemyAttackValues[0] * enemyAttackValues[1]);
                if (player.health <= 0) {
                    $('#loseModal').modal('show');
                    loseAudio.play();
                    getPlayerHealth.innerHTML = 'Health: 0';
                    getEnemyHealth.innerHTML = 'Health: ' + Math.round(enemy.health);
                } else {
                    getPlayerHealth.innerHTML = 'Health: ' + Math.round(player.health);
                }
            }
        }
        else if (getPlayerSpeed >= getEnemySpeed) {
            let enemyAttackValues = enemyAttack();
            let totalDamage = Math.round(enemyAttackValues[0]) * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            getEnemyDamage.innerHTML = 'Enemy hit ' + Math.round(enemyAttackValues[0]) + ' damage ' + enemyAttackValues[1] + ' times, totalling ' + Math.round(enemyAttackValues[0] * enemyAttackValues[1]);
            if (player.health <= 0) {
                $('#loseModal').modal('show');
                loseAudio.play();
                getEnemyHealth.innerHTML = 'Health: ' + Math.round(enemy.health);
                getPlayerHealth.innerHTML = 'Health: 0';
            } else {
                getPlayerHealth.innerHTML = 'Health: ' + Math.round(player.health);
                // Player attacks
                let playerAttackValues = playerAttack();
                let totalDamage = Math.round(playerAttackValues[0]) * playerAttackValues[1];
                enemy.health = enemy.health - totalDamage;
                getPlayerDamage.innerHTML = 'You hit ' + Math.round(playerAttackValues[0]) + ' damage ' + playerAttackValues[1] + ' times, totalling ' + Math.round(playerAttackValues[0] * playerAttackValues[1]);
                if (enemy.health <= 0) {
                    if (enemyDefeated === 3) {
                        $('#winModal').modal('show');
                        winAudio.play();
                        getCounter.innerHTML = '<p>Enemies Defeated: ' + enemyDefeated++ + '</p>';
                    } else {
                        nextEnemy();
                        getEnemyHealth.innerHTML = 'Health: 0';
                        getPlayerHealth.innerHTML = 'Health: ' + Math.round(player.health);                        
                    }
                } else {
                    getEnemyHealth.innerHTML = 'Health: ' + Math.round(enemy.health);
                }
            }
        }        
    },
    // Counter - Player move
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
        // Get Player/Enemy health and damage to change later
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");
        let getPlayerDamage = document.querySelector(".player-damage");
        let getEnemyDamage = document.querySelector(".enemy-damage");
        let getCounter = document.querySelector(".enemy-counter");
        // Initiate attacks
        if (getPlayerSpeed >= getEnemySpeed) {
            let playerAttackValues = playerAttack();
            let totalDamage = Math.round(playerAttackValues[0]) * playerAttackValues[1];
            enemy.health = enemy.health - totalDamage;
            getPlayerDamage.innerHTML = 'You hit ' + Math.round(playerAttackValues[0]) + ' damage ' + playerAttackValues[1] + ' times, totalling ' + Math.round(playerAttackValues[0] * playerAttackValues[1]);
            if (enemy.health <= 0) {
                if (enemyDefeated === 3) {
                    $('#winModal').modal('show');
                    winAudio.play();
                    getCounter.innerHTML = '<p>Enemies Defeated: ' + enemyDefeated++ + '</p>';
                } else {
                    nextEnemy();
                    getPlayerHealth.innerHTML = 'Health: ' + Math.round(player.health);
                    getEnemyHealth.innerHTML = 'Health: 0';
                    getCounter.innerHTML = '<p>Enemies Defeated: ' + enemyDefeated++ + '</p>';                     
                }
            } else {
                getEnemyHealth.innerHTML = 'Health: ' + Math.round(enemy.health);
                // Enemy attacks
                let enemyAttackValues = enemyAttack();
                let totalDamage = Math.round(enemyAttackValues[0]) * enemyAttackValues[1];
                player.health = player.health - totalDamage;
                getEnemyDamage.innerHTML = 'Enemy hit ' + Math.round(enemyAttackValues[0]) + ' damage ' + enemyAttackValues[1] + ' times, totalling ' + Math.round(enemyAttackValues[0] * enemyAttackValues[1]);
                if (player.health <= 0) {
                    $('#loseModal').modal('show');
                    loseAudio.play();
                    getPlayerHealth.innerHTML = 'Health: 0';
                    getEnemyHealth.innerHTML = 'Health: ' + Math.round(enemy.health);
                } else {
                    getPlayerHealth.innerHTML = 'Health: ' + Math.round(player.health);
                }
            }
        }
        else if (getPlayerSpeed >= getEnemySpeed) {
            let enemyAttackValues = enemyAttack();
            let totalDamage = Math.round(enemyAttackValues[0]) * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            getEnemyDamage.innerHTML = 'Enemy hit ' + Math.round(enemyAttackValues[0]) + ' damage ' + enemyAttackValues[1] + ' times, totalling ' + Math.round(enemyAttackValues[0] * enemyAttackValues[1]);
            if (player.health <= 0) {
                $('#loseModal').modal('show');
                loseAudio.play();
                getEnemyHealth.innerHTML = 'Health: ' + Math.round(enemy.health);
                getPlayerHealth.innerHTML = 'Health: 0';
            } else {
                getPlayerHealth.innerHTML = 'Health: ' + Math.round(player.health);
                // Player attacks
                let playerAttackValues = playerAttack();
                let totalDamage = Math.round(playerAttackValues[0]) * playerAttackValues[1];
                enemy.health = enemy.health - totalDamage;
                getPlayerDamage.innerHTML = 'You hit ' + Math.round(playerAttackValues[0]) + ' damage ' + playerAttackValues[1] + ' times, totalling ' + Math.round(playerAttackValues[0] * playerAttackValues[1]);
                if (enemy.health <= 0) {
                    if (enemyDefeated === 3) {
                        $('#winModal').modal('show');
                        winAudio.play();
                        getCounter.innerHTML = '<p>Enemies Defeated: ' + enemyDefeated++ + '</p>';
                    } else {
                        nextEnemy();
                        getEnemyHealth.innerHTML = 'Health: 0';
                        getPlayerHealth.innerHTML = 'Health: ' + Math.round(player.health);
                        getCounter.innerHTML = '<p>Enemies Defeated: ' + enemyDefeated++ + '</p>';                         
                    }
                } else {
                    getEnemyHealth.innerHTML = 'Health: ' + Math.round(enemy.health);
                }
            }
        }
    },
    // Heal - Player move
    calcHeal: function () {
        // Who attacks first
        let getPlayerSpeed = player.speed;
        let getEnemySpeed = enemy.speed;

        // Player Heals
        let playerHeal = function() {
            if (player.health < 250) {
                player.health += 250;
            } else {
                player.health = 500;
            }
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
        // Get Player/Enemy health and damage to change later
        let getPlayerHealth = document.querySelector(".health-player");
        let getEnemyHealth = document.querySelector(".health-enemy");
        let getPlayerDamage = document.querySelector(".player-damage");
        let getEnemyDamage = document.querySelector(".enemy-damage");
        let getCounter = document.querySelector(".enemy-counter");

        // Initiate attacks
        if (getPlayerSpeed >= getEnemySpeed) {
            playerHeal();
            getPlayerDamage.innerHTML = 'You healed for 250';
            if (enemy.health <= 0) {
                if (enemyDefeated === 3) {
                    $('#winModal').modal('show');
                    winAudio.play();
                    getCounter.innerHTML = '<p>Enemies Defeated: ' + enemyDefeated++ + '</p>';
                } else {
                    nextEnemy();
                    getPlayerHealth.innerHTML = 'Health: ' + Math.round(player.health);
                    getEnemyHealth.innerHTML = 'Health: 0';
                    getCounter.innerHTML = '<p>Enemies Defeated: ' + enemyDefeated++ + '</p>';                     
                }
            } else {
                getEnemyHealth.innerHTML = 'Health: ' + enemy.health;
                // Enemy attacks
                let enemyAttackValues = enemyAttack();
                let totalDamage = Math.round(enemyAttackValues[0]) * enemyAttackValues[1];
                player.health = player.health - totalDamage;
                getEnemyDamage.innerHTML = 'Enemy hit ' + Math.round(enemyAttackValues[0]) + ' damage ' + enemyAttackValues[1] + ' times, totalling ' + Math.round(enemyAttackValues[0] * enemyAttackValues[1]);
                if (player.health <= 0) {
                    $('#loseModal').modal('show');
                    loseAudio.play();
                    getPlayerHealth.innerHTML = 'Health: 0';
                    getEnemyHealth.innerHTML = 'Health: ' + Math.round(enemy.health);
                } else {
                    getPlayerHealth.innerHTML = 'Health: ' + Math.round(player.health);
                }
            }
        }
        else if (getPlayerSpeed >= getEnemySpeed) {
            let enemyAttackValues = enemyAttack();
            let totalDamage = Math.round(enemyAttackValues[0]) * enemyAttackValues[1];
            player.health = player.health - totalDamage;
            getEnemyDamage.innerHTML = 'Enemy hit ' + Math.round(enemyAttackValues[0]) + ' damage ' + enemyAttackValues[1] + ' times, totalling ' + Math.round(enemyAttackValues[0] * enemyAttackValues[1]);
            if (player.health <= 0) {
                $('#loseModal').modal('show');
                loseAudio.play();
                getEnemyHealth.innerHTML = 'Health: ' + Math.round(enemy.health);
                getPlayerHealth.innerHTML = 'Health: 0';
            } else {
                getPlayerHealth.innerHTML = 'Health: ' + Math.round(player.health);
                // Player attacks
                playerHeal();
                getPlayerDamage.innerHTML = 'You healed for 250';
                if (enemy.health <= 0) {
                    if (enemyDefeated === 3) {
                        $('#winModal').modal('show');
                        winAudio.play();
                        getCounter.innerHTML = '<p>Enemies Defeated: ' + enemyDefeated++ + '</p>';
                    } else {
                        nextEnemy();
                        getEnemyHealth.innerHTML = 'Health: 0';
                        getPlayerHealth.innerHTML = 'Health: ' + Math.round(player.health);
                        getCounter.innerHTML = '<p>Enemies Defeated: ' + enemyDefeated++ + '</p>';                         
                    }
                } else {
                    getPlayerHealth.innerHTML = 'Health: ' + Math.round(player.health);
                    getEnemyHealth.innerHTML = 'Health: ' + Math.round(enemy.health);
                }
            }
        }         
    }
}