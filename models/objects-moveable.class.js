class MovableObject extends DrawableObject{
    X = 96;
    Y = 288;
    width = 64;
    height = 128;
    flipImage = false;
    speedX = 0.5;
    speedY = 0;
    acceleration = 1.5;
    characterLife = 100;
    enemyLife = 100
    lastHitTime = 0;
    hitCooldown = 1000;
    amplitude = 0;
    frequency = 0;
    time = 0;
    oscillateY = 0;

    static debugMode = false;
    static setDebugMode(isEnabled) {
        MovableObject.debugMode = isEnabled;
        console.log("Debug Mode: ", MovableObject.debugMode ? "enabled" : "disabled");
    }


    applyGravity() {
        setInterval(() => {
            if (this.world && this.world.isPaused) return;

            if (this.isAboveGround() || this.speedY > 0) {
                this.Y -= this.speedY;
                this.speedY -= this.acceleration;
            }
            if (!this.isAboveGround()) {
                this.Y = 288;
                this.speedY = 0;
            }
        }, 1000 / 60);
    }


    isAboveGround() {
        return this instanceof ThrowableObject || this.Y < 288;
    }


    getHit() {
        if (this.world.isPaused) return;

        const currentTime = new Date().getTime();
        if (this.lastHitTime && (currentTime - this.lastHitTime) < this.hitCooldown) {
            return;
        }

        this.characterLife -= 10;
        if (this.characterLife < 0) {
            this.characterLife = 0;
        }

        this.updateCharacterHealthBar();
        this.lastHitTime = currentTime;

        hasPlayedHurtSound = false;
    }


    heal() {
        if (this.world.isPaused) return;

        this.characterLife += 20;
        if (this.characterLife > 100) {
            this.characterLife = 100;
        }

        this.updateCharacterHealthBar();
    }

    updateCharacterHealthBar() {
        const progressBar = document.getElementById('progress-bar-health');
        progressBar.style.width = `${this.characterLife}%`;
    }


    isHurt() {
        return new Date().getTime() - this.lastHitTime < this.hitCooldown;
    }


    isDead() {
        return this.characterLife == 0;
    }


    moveRight() {
        if (!this.world || !this.world.isPaused) {
            this.X += this.speedX;
            this.direction = 1;
        }
    }


    moveLeft() {
        if (!this.world || !this.world.isPaused) {
            this.X -= this.speedX;
            this.direction = -1;
        }
    }


    isRunning() {
        if ((this.world.keyboard.RIGHT || this.world.keyboard.LEFT) && this.world.keyboard.SHIFT) {
            this.speedX = this.speedRun;
            return true;
        } else {
            this.speedX = 3;
            return false;
        }
    }


    jump() {
        if (!this.world.isPaused && !this.isAboveGround()) {
            this.speedY = 25;
        }
    }


    down() {
        return !this.world.isPaused && this.world.keyboard.DOWN;
    }


    punch() {
        return !this.world.isPaused && this.world.keyboard.PUNCH;
    }


    throwBall() {
        return !this.world.isPaused && this.world.keyboard.THROW_BALL;
    }


    moveLeftOscillate() {
        if (!this.world || !this.world.isPaused) {
            this.moveLeft();
            this.Y = this.oscillateY + Math.sin(this.time * this.frequency) * this.amplitude;
            this.time += 1;
        }
    }


    playAnimation(images) {
        if (this.animationPaused) return;
        let imgIndex = this.currentImage % images.length;
        let path = images[imgIndex];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    pauseAnimation() {
        this.animationPaused = true;
    }


    resumeAnimation() {
        this.animationPaused = false;
    }

}