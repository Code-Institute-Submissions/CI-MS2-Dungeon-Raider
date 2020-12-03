let GameManager = {
    setGameStart: function(classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function(classType) {
        switch (classType) {
            case "Arthur":
                player = new Player(classType, 500, 100, 200, 150, 150);
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="assets/images/' + classType.toLowerCase() + '.png" class="img-avatar"><div><h3>' + classType + '</h3><p>Health: ' + player.health + '</p><p>Stamina: ' + player.stamina + '</p><p>Strength: ' + player.strength + '</p><p>Agility: ' + player.agility + '</p><p>Speed: ' + player.speed + '</p></div>';
    },
    setPreFight: function() {
        let getHeader = document.querySelector(".header");
        let getActions = document.querySelector(".actions");
        let getArena = document.querySelector(".arena");

        getHeader.innerHTML = '<p>Task: Find an enemy!</p>';
        getActions.innerHTML = '<a href="#" class="btn-prefight" onclick="GameManager.setFight()">Search for enemy!</a>';
        getArena.style.visibility = "visible";
    }
}