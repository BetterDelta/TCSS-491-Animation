class Animator{
    constructor(spriteSheet, xStart, yStart, width, height, frames, duration) {
        Object.assign(this, { spriteSheet, xStart, yStart, width, height, frames, duration});

        this.elapsedTime = 0;
        this.totalTime = duration * frames;
    }

    drawFrame(tick, ctx, x, y) {
        this.elapsedTime += tick;
        if (this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime;
        const frame = this.currentFrame();

        ctx.drawImage(this.spriteSheet, this.xStart + this.width * frame, this.yStart, this.width, this.height, x, y, this.width, this.height);
    }

    currentFrame() {
        return Math.floor(this.elapsedTime / this.duration);
    }

    isDone() {}
}


