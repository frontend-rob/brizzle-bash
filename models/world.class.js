class World {

    character = new Character();
    level = level01;
    canvas;
    ctx;
    keyboard;
    camFrameX = 0;
    collisionOffsetX = 10;
    collisionOffsetY = 10;
    isPaused = false;
    animationFrameId = null;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.checkCollisions();
        this.initializeProgressBar();
        this.animationFrameId = requestAnimationFrame(() => this.drawWorld());
    }

    setWorld() {
        this.character.world = this;
        this.level.enemies.forEach(enemy => {
            enemy.world = this;
        });
    }
    

    
    initializeProgressBar() {
        const progressBar = document.getElementById('progress-bar-health');
        progressBar.style.width = `${this.characterLife}%`;
    }


    pauseGame() {
        this.isPaused = true;
        console.log("Game Paused");

        cancelAnimationFrame(this.animationFrameId);

        this.character.pauseAnimation();
        this.level.enemies.forEach(enemy => enemy.pauseAnimation());
    }

    resumeGame() {
        this.isPaused = false;
        console.log("Game Resumed");
        
        this.character.resumeAnimation();

        this.level.enemies.forEach(enemy => enemy.resumeAnimation());
        this.animationFrameId = requestAnimationFrame(() => this.drawWorld());
    }


    checkCollisions() {
        setInterval(() => {
            if (!this.isPaused) {
                this.level.enemies.forEach((enemy) => {
                    if (this.character.isColliding(enemy, this.collisionOffsetX, this.collisionOffsetY)) {
                        this.character.getHit();
                        console.log('Collision!', this.character.characterLife);
                    }
                });
            }
        }, 250);
    }

    drawWorld() {
        if (this.isPaused) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camFrameX, 0);
        this.placeObjectsOnCanvas(this.level.backgroundObjects);
        this.placeObjectsOnCanvas(this.level.enemies);
        this.drawObject(this.character);
        this.ctx.translate(-this.camFrameX, 0);

        if (!this.isPaused) {
            this.animationFrameId = requestAnimationFrame(() => this.drawWorld());
        }
    }

    placeObjectsOnCanvas(objects) {
        objects.forEach(object => {
            this.drawObject(object);
        });
    }

    drawObject(moveObj) {
        if (moveObj.flipImage) {
            this.flipImage(moveObj);
        }

        moveObj.draw(this.ctx);
        moveObj.drawCollisionFrame(this.ctx);

        if (moveObj.flipImage) {
            this.flipImageReverse(moveObj);
        }
    }

    flipImage(moveObj) {
        this.ctx.save();
        this.ctx.translate(moveObj.width, 0);
        this.ctx.scale(-1, 1);
        moveObj.X = moveObj.X * -1;
    }

    flipImageReverse(moveObj) {
        moveObj.X = moveObj.X * -1;
        this.ctx.restore();
    }

}
