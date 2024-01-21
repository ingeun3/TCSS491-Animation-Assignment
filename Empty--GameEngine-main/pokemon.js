class Pokemon {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./pokemon.png"),0 ,131 ,64, 68, 4, 0.2);
        this.x = 0;
        this.y = 0;
        this.speed = 200;  
    };
    update() {
        this.x += this.speed * this.game.clockTick;
        if(this.x > 1024) {
            this.x = 0;
        }
    };
    draw(ctx) {

        this.animator.drawFrame(this.game.clockTick, ctx,this.x,this.y,5);
    };
}