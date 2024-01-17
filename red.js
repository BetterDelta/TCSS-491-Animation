class Red {
 constructor(game) {
        this.game = game;
        this.spritesheet = ASSET_MANAGER.getAsset("./red.png");
        this.animator = new Animator(this.spritesheet, 0, 0, 200, 200, 4, 0.3);
        this.speed = 120;
        this.x = 0;
        this.y = 0;
    };

    update() {
        this.x += this.speed * this.game.clockTick;
        if(this.x > 1024) this.x =0;
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}
