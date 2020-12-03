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
}