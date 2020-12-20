// Base code written by following a YouTube tutorial by Dani Krossing and adapted to own project
let enemy;
// Used for Enemies Defeated counter
let enemyDefeated = 1;
// Enemy audio sounds when they are generated
let goblinAudio = new Audio('assets/audio/goblin-audio.mp3');
let trollAudio = new Audio('assets/audio/troll-audio.mp3');
let golemAudio = new Audio('assets/audio/golem-audio.mp3');
let giantAudio = new Audio('assets/audio/giant-audio.mp3');
let orcAudio = new Audio('assets/audio/orc-audio.mp3');
let dragonAudio = new Audio('assets/audio/dragon-audio.mp3');

// Enemy constructor
function Enemy(enemyType, health, strength, agility, speed) {
    this.enemyType = enemyType;
    this.health = health;
    this.strength = strength;
    this.agility = agility;
    this.speed = speed;
}
// Generate new random enemy
function nextEnemy() {
    let getActions = document.querySelector(".actions");
    let getCounter = document.querySelector(".counter");
    let getEnemy = document.querySelector(".enemy");

    let enemy00 = new Enemy("Goblin", 250, 75, 175, 150);
    let enemy01 = new Enemy("Troll", 300, 150, 125, 125);
    let enemy02 = new Enemy("Golem", 500, 300, 100, 75);
    let enemy03 = new Enemy("Giant", 500, 300, 100, 75);
    let enemy04 = new Enemy("Orc", 400, 175, 125, 125);
    let enemy05 = new Enemy("Dragon", 550, 350, 100, 100);

    let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(6));
    switch (chooseRandomEnemy) {
        case 0:
            enemy = enemy00;
            goblinAudio.play();
            break;
        case 1:
            enemy = enemy01;
            trollAudio.play();
            break;                
        case 2:
            enemy = enemy02;
            golemAudio.play();
            break;
        case 3:
            enemy = enemy03;
            giantAudio.play();
            break;
        case 4:
            enemy = enemy04;
            orcAudio.play();
            break;
        case 5:
            enemy = enemy05;
            dragonAudio.play();
            break;                                                
        }
    getCounter.style.visibility = "visible";
    getActions.innerHTML = ' <a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()"><img src="assets/images/attack.png" class="player-move-images"></img>Attack</a> ' + ' <a href="#" class="btn-prefight" onclick="PlayerMoves.calcCounter()"><img src="assets/images/counter.png" class="player-move-images"></img>Counter</a> ' + ' <a href="#" class="btn-prefight" onclick="PlayerMoves.calcHeal()"><img src="assets/images/heal.png" class="player-move-images"></img>Heal</a>';
    getEnemy.innerHTML = '<img src="assets/images/' + enemy.enemyType.toLowerCase() + '.png" alt="' + enemy.enemyType + '"class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';
}

