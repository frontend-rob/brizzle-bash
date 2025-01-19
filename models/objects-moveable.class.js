/**
 * represents a movable object that extends the functionality of a drawable object.
 */
class MovableObject extends DrawableObject {
    X = 96;
    Y = 288;
    width = 64;
    height = 128;
    flipImage = false;
    speedX = 0.5;
    speedY = 0;
    acceleration = 1.5;
    lastHitTime = 0;
    hitCooldown = 1000;
    amplitude = 0;
    frequency = 0;
    time = 0;
    oscillateY = 0;
    static debugMode = false;


    /**
     * sets the debug mode for all movable objects.
     * @param {boolean} isEnabled - whether debug mode should be enabled or not.
     */
    static setDebugMode(isEnabled) {
        MovableObject.debugMode = isEnabled;
        console.log("Debug Mode: ", MovableObject.debugMode ? "enabled" : "disabled");
    }


    /**
     * applies gravity to the object, making it fall until it reaches the ground.
     */
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


    /**
     * checks if the object is above the ground.
     * @returns {boolean} true if the object is above the ground, otherwise false.
     */
    isAboveGround() {
        return this instanceof ThrowableObject || this.Y < 288;
    }


    /**
     * applies damage to the object, reducing its life and triggering cooldowns.
     */
    getHit() {
        if (this.world.isPaused) return;

        const currentTime = new Date().getTime();
        if (this.lastHitTime && (currentTime - this.lastHitTime) < this.hitCooldown) {
            return;
        }

        this.characterLife -= 20;
        if (this.characterLife < 0) {
            this.characterLife = 0;
        }

        this.updateCharacterHealthBar();
        this.lastHitTime = currentTime;

        hasPlayedHurtSound = false;
    }


    /**
     * heals the object by restoring life points.
     */
    heal() {
        if (this.world.isPaused) return;

        this.characterLife += 20;
        if (this.characterLife > 100) {
            this.characterLife = 100;
        }

        this.updateCharacterHealthBar();
    }


    /**
     * updates the character's health bar on the screen.
     */
    updateCharacterHealthBar() {
        const progressBar = document.getElementById('progress-bar-health');
        progressBar.style.width = `${this.characterLife}%`;
    }


    /**
     * checks if the object is currently hurt (in hit cooldown).
     * @returns {boolean} true if the object is hurt, otherwise false.
     */
    isHurt() {
        return new Date().getTime() - this.lastHitTime < this.hitCooldown;
    }


    /**
     * checks if the object is dead.
     * @returns {boolean} true if the object's life is 0, otherwise false.
     */
    isDead() {
        return this.characterLife === 0;
    }


    /**
     * moves the object to the right.
     */
    moveRight() {
        if (!this.world || !this.world.isPaused) {
            this.X += this.speedX;
            this.direction = 1;
        }
    }


    /**
     * moves the object to the left.
     */
    moveLeft() {
        if (!this.world || !this.world.isPaused) {
            this.X -= this.speedX;
            this.direction = -1;
        }
    }


    /**
     * makes the object jump, setting an upward speed.
     */
    jump() {
        if (!this.world.isPaused && !this.isAboveGround()) {
            this.speedY = 25;
        }
    }


    /**
     * checks if the punch action is triggered.
     * @returns {boolean} true if the punch action is triggered, otherwise false.
     */
    punch() {
        return !this.world.isPaused && this.world.keyboard.PUNCH;
    }


    /**
     * checks if the throw ball action is triggered.
     * @returns {boolean} true if the throw ball action is triggered, otherwise false.
     */
    throwBall() {
        return !this.world.isPaused && this.world.keyboard.THROW_BALL;
    }


    /**
     * moves the object in a sinusoidal path.
     */
    moveSinus() {
        if (!this.world || !this.world.isPaused) {
            this.Y += Math.sin(this.frequency * Date.now()) * this.amplitude;
            this.X += this.speedX * this.direction;

            if (this.X > this.startX + this.rangeX || this.X < this.startX) {
                this.direction *= -1;
            }
        }
    }


    /**
     * moves the object to the left while oscillating vertically.
     */
    moveLeftOscillate() {
        if (!this.world || !this.world.isPaused) {
            this.moveLeft();
            this.Y = this.oscillateY + Math.sin(this.time * this.frequency) * this.amplitude;
            this.time += 1;
        }
    }


    /**
     * plays an animation using a set of images.
     * @param {Array<string>} images - the array of image paths for the animation.
     */
    playAnimation(images) {
        if (this.animationPaused) return;
        let imgIndex = this.currentImage % images.length;
        let path = images[imgIndex];
        this.img = this.imageCache[path];
        this.currentImage++;
    }


    /**
     * pauses the animation for the object.
     */
    pauseAnimation() {
        this.animationPaused = true;
    }


    /**
     * resumes the animation for the object.
     */
    resumeAnimation() {
        this.animationPaused = false;
    }
}