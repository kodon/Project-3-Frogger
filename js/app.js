// Enemy Class
var Enemy = function(loc) {
    this.sprite = 'images/enemy-bug.png';
    this.x = 101; // http://discussions.udacity.com/t/a-direction-please/13803/2
    this.y = 60; 
};

Enemy.prototype.move = function() {
    this.speed = 100; // http://discussions.udacity.com/t/spawning-random-enemies-images-to-the-canvas/15860
};

Enemy.prototype.update = function(dt) {

};

Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Player Class
var Player = function(loc) {
    this.sprite = 'images/char-princess-girl.png';
    this.x = 305;
    this.y = 400;
};

Player.prototype.update = function(dt) {

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) { // http://discussions.udacity.com/t/player-disappears-on-key-press/13740/2

    if ('left' === key) {
        this.x - 101;
    };

    if ('up' === key) {
        this.y - 101;
    };

    if ('right' === key) {
        this.x + 101;
    };

    if ('down' === key) {
        this.y + 101;
    };

};

// Instantiate Enemies and Player
var allEnemies = [new Enemy(), new Enemy(), new Enemy()];
allEnemies.forEach(function(Enemy) {
    Enemy.move();
});

var player = new Player();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});