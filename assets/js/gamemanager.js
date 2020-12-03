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
    },
    setPreFight: function() {

    }
}