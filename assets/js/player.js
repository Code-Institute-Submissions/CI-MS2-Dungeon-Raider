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
    }
}