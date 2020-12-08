let GameManager = {
    setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function(classType) {
        switch (classType) {
            case "Arthur":
                player = new Player(classType, 500, 200, 150, 150);
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="assets/images/' + classType.toLowerCase() + '.png" class="img-avatar"><div><h3>' + classType + '</h3><p class="health-player">Health: ' + player.health + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';
    },
    setPreFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");

        getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemy!</a>';
        getArena.style.visibility = "visible";
    },
    setFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getEnemy = document.querySelector(".enemy");
        // Create enemy
        let enemy00 = new Enemy("Goblin", 200, 100, 225, 150);
        let enemy01 = new Enemy("Troll", 300, 175, 175, 125);
        let enemy02 = new Enemy("Golem", 500, 350, 75, 75);
        let enemy03 = new Enemy("Giant", 500, 400, 50, 75);
        let enemy04 = new Enemy("Orc", 400, 200, 125, 125);
        let enemy05 = new Enemy("Dragon", 550, 400, 200, 100);
        
        let chooseRandomEnemy = Math.floor(Math.random() * Math.floor(6));
        switch (chooseRandomEnemy) {
            case 0:
                enemy = enemy00;
                break;
            case 1:
                enemy = enemy01;
                break;                
            case 2:
                enemy = enemy02;
                break;
            case 3:
                enemy = enemy03;
                break;
            case 4:
                enemy = enemy04;
                break;
            case 5:
                enemy = enemy05;
                break;                                                
        }
        getHeader.innerHTML = '<p>Task: Choose your move</p>';
        getActions.innerHTML = ' <a href="#" class="btn-prefight" onclick="PlayerMoves.calcAttack()">Attack!</a> ' + ' <a href="#" class="btn-prefight" onclick="PlayerMoves.calcCounter()">Defend!</a> ' + ' <a href="#" class="btn-prefight" onclick="PlayerMoves.calcHeal()">Heal!</a> ';
        getEnemy.innerHTML = '<img src="assets/images/' + enemy.enemyType.toLowerCase() + '.png" alt="' + enemy.enemyType + '"class="img-avatar"><div><h3>' + enemy.enemyType + '</h3><p class="health-enemy">Health: ' + enemy.health + '</p><p>Strength: ' + enemy.strength + '</p><p>Agility: ' + enemy.agility + '</p><p>Speed: ' + enemy.speed + '</p></div>';
    }
}