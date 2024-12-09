class World {

    character = new Character();
    level = level01;
    canvas;
    ctx;
    keyboard;
    camFrameX = 0;
    collisionOffsetX = 10;
    collisionOffsetY = 10;
    isPaused = false; // Flag für Pausenstatus
    animationFrameId = null; // Speichert die AnimationFrame-ID

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
    }

    // Call this method to initialize the progress bar when the game starts
    initializeProgressBar() {
        const progressBar = document.getElementById('progress-bar-health');
        progressBar.style.width = `${this.characterLife}%`;  // Set initial life
    }

    // Pause/Unpause das Spiel
    pauseGame() {
        this.isPaused = !this.isPaused;
        if (this.isPaused) {
            console.log("Game Paused");
            cancelAnimationFrame(this.animationFrameId); // Stoppe die Animation
        } else {
            console.log("Game Resumed");
            this.animationFrameId = requestAnimationFrame(() => this.drawWorld()); // Fortsetzen der Animation
        }
    }

    checkCollisions() {
        setInterval(() => {
            if (!this.isPaused) {  // Nur Kollisionsabfrage, wenn das Spiel nicht pausiert ist
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
        if (this.isPaused) return;  // Stoppe das Zeichnen, wenn das Spiel pausiert

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camFrameX, 0);

        this.placeObjectsOnCanvas(this.level.backgroundObjects);
        this.placeObjectsOnCanvas(this.level.enemies);
        this.drawObject(this.character);

        this.ctx.translate(-this.camFrameX, 0);

        // Fortsetzung der Animation nur, wenn das Spiel nicht pausiert ist
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
