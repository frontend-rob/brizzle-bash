/**
 * represents the main character object.
 * @extends MovableObject
 */
class Character extends MovableObject {
    
    world;
    X = 160;
    width = 80;
    height = 160;
    speedX = 8;
    characterLife = 100;
    referenceWidth = 80;
    referenceHeight = 160;
    animationScales = {
        idle: { widthFactor: 1.0, heightFactor: 1.0 },
        walking: { widthFactor: 1.15, heightFactor: 1.03 },
        jumping: { widthFactor: 1.0, heightFactor: 1.0 },
        punch: { widthFactor: 1.8, heightFactor: 1.0 },
        throw: { widthFactor: 2.2, heightFactor: 1.05 },
        hit: { widthFactor: 1.5, heightFactor: 1.1 },
        dead: { widthFactor: 2.2, heightFactor: 1.1 },
        surprise: { widthFactor: 1.25, heightFactor: 1.0 }
    }


    /**
     * creates an instance of the Character object.
     * initializes the character with various animations and properties.
     */
    constructor() {
        super().loadImage(BRIZZLY_IMAGES.IDLE[0]);
        this.IMAGES_IDLE = BRIZZLY_IMAGES.IDLE;
        this.IMAGES_WALK = BRIZZLY_IMAGES.WALK;
        this.IMAGES_JUMP = BRIZZLY_IMAGES.JUMP;
        this.IMAGES_PUNCH = BRIZZLY_IMAGES.PUNCH;
        this.IMAGES_THROW = BRIZZLY_IMAGES.THROW;
        this.IMAGES_HIT = BRIZZLY_IMAGES.HIT;
        this.IMAGES_DEAD = BRIZZLY_IMAGES.DEAD;
        this.IMAGES_SURPRISE = BRIZZLY_IMAGES.SURPRISE;

        this.loadImages(this.IMAGES_IDLE);
        this.loadImages(this.IMAGES_WALK);
        this.loadImages(this.IMAGES_JUMP);
        this.loadImages(this.IMAGES_PUNCH);
        this.loadImages(this.IMAGES_HIT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_THROW);
        this.loadImages(this.IMAGES_SURPRISE);

        this.surpriseStartTime = null;
        this.direction = 1;
        this.applyGravity();
        this.animate();
    }


    /**
     * handles the character's animation and movement.
     * it updates the character's state and plays relevant sounds.
     */
    animate() {
        setInterval(() => {
            if (this.world.isPaused) {
                soundManager.pauseSound('characterJump');
                soundManager.pauseSound('characterPunch');
                soundManager.pauseSound('characterHurt');
                soundManager.pauseSound('collectHealth');
                soundManager.pauseSound('collectItem');
                soundManager.pauseSound('characterThrowError');
                soundManager.pauseSound('characterThrowItem');
                soundManager.pauseSound('deadEnemy');
                soundManager.pauseSound('deadEndboss');
                soundManager.pauseSound('gameover');
                return;
            }

            if (this.world.keyboard.RIGHT && this.X < this.world.level.levelEndX) {
                this.moveRight();
                this.flipImage = false;
            }

            if (this.world.keyboard.LEFT && this.X > -480) {
                this.moveLeft();
                this.flipImage = true;
            }

            if ((this.world.keyboard.UP) && !this.isHurt()) {
                this.jump();
                soundManager.playSound('characterJump');
            }

            if (this.world.keyboard.PUNCH && !this.isHurt()) {
                this.punch();
                soundManager.playSound('characterPunch');
            }

            this.world.camFrameX = -this.X + 160;
        }, 1000 / 60);

        setInterval(() => {
            const state = this.getCharacterState();
            this.updateCharacterAnimation(state);
        }, 1000 / 60);
    }


    /**
     * determines the current state of the character based on its actions and status.
     * @returns {string} the current state of the character ('idle', 'walking', 'jumping', 'punch', 'throw', 'hit', 'dead', 'surprise').
     */
    getCharacterState() {
        if (this.isDead()) {
            return 'dead';
        }
        if (this.isHurt()) {
            return 'hit';
        }
        if (this.isSurprised()) {
            return 'surprise';
        }
        if (this.punch()) {
            return 'punch';
        }
        if (this.throwBall() && this.world.bombAmount > 0) {
            return 'throw';
        }

        if (this.isAboveGround()) {
            return 'jumping';
        }

        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
            return 'walking';
        }
        return 'idle';
    }


    /**
     * triggers the surprise animation for the character and plays the surprise sound.
     */
    triggerSurprise() {
        soundManager.playSound('characterSurprised');
        this.surpriseStartTime = Date.now();
    }


    /**
     * checks if the character is currently surprised based on the time elapsed since the surprise was triggered.
     * @returns {boolean} true if the character is surprised, otherwise false.
     */
    isSurprised() {
        if (this.surpriseStartTime) {
            return Date.now() - this.surpriseStartTime <= 2000;
        }
        return false;
    }


    /**
     * updates the character's animation based on its current state.
     * @param {string} state the current state of the character (e.g., 'idle', 'walking', 'jumping', etc.).
     */
    updateCharacterAnimation(state) {
        const animations = {
            idle: this.IMAGES_IDLE,
            walking: this.IMAGES_WALK,
            jumping: this.IMAGES_JUMP,
            punch: this.IMAGES_PUNCH,
            throw: this.IMAGES_THROW,
            hit: this.IMAGES_HIT,
            dead: this.IMAGES_DEAD,
            surprise: this.IMAGES_SURPRISE,
        };

        if (state === 'dead') {
            this.Y = 280;
        }

        if (state === 'hit') {
            this.Y = 272;
        }

        if (state === 'throw') {
            this.Y = 280;
        }

        const scale = this.animationScales[state];
        const newWidth = this.referenceWidth * scale.widthFactor;
        const newHeight = this.referenceHeight * scale.heightFactor;
        const heightDifference = newHeight - this.height;
        this.y -= heightDifference;

        this.width = newWidth;
        this.height = newHeight;

        if (state === 'dead') {
            this.playDeadAnimation(animations[state]);
            if (this.animationPaused) {
                showGameOverScreen();
            }
        } else {
            this.playAnimation(animations[state]);
        }
    }


    /**
     * plays the dead animation for the character.
     * @param {Array} images array of images to display during the dead animation.
     */
    playDeadAnimation(images) {
        if (this.animationPaused) return;
        if (this.currentImage >= images.length) {
            this.currentImage = 0;
        }
        let imgIndex = this.currentImage;
        let path = images[imgIndex];
        this.img = this.imageCache[path];
        this.currentImage++;
        if (this.currentImage >= images.length) {
            this.animationPaused = true;
        }
    }


    /**
     * plays the hit animation followed by the dead animation when the character dies.
     * @returns {Promise} resolves after the hit animation is played, followed by the dead animation.
     */
    async playHitBeforeDead() {
        this.updateCharacterAnimation('hit');
        await new Promise(resolve => setTimeout(resolve, 250));
        this.currentImage = 0;
        this.updateCharacterAnimation('dead');
        soundManager.playSound('gameover');
    }


    /**
     * executes the punch action when the punch button is pressed.
     * @returns {boolean} true if the punch action is performed, otherwise false.
     */
    punch() {
        if (this.world.isPaused) return false;

        if (this.world.keyboard.PUNCH) {
            this.checkPunchCollision();
            return true;
        }
        return false;
    }


    /**
     * checks for collisions between the punch and the enemies.
     */
    checkPunchCollision() {
        const punchRange = {
            x: this.X + (this.flipImage ? +10 : this.width),
            y: this.Y,
            width: 5,
            height: this.height
        };

        this.world.level.enemies.forEach((enemy) => {
            if (this.isColliding(enemy, punchRange.x, punchRange.y, punchRange.width, punchRange.height)) {
                enemy.getHit(10);
                console.log(`Enemy ${enemy.name} was hit! Current Life: ${enemy.enemyLife}`);
            }
        });
    }


    /**
     * executes the throw action when the throw button is pressed.
     * @returns {boolean} true if the throw action is performed, otherwise false.
     */
    throw() {
        if (this.world.isPaused) return false;

        if (this.world.keyboard.THROW_BALL && this.world.bombAmount > 0) {
            this.checkThrowCollision();
            return true;
        }
        return false;
    }


    /**
     * checks for collisions between the throw and the enemies.
     */
    checkThrowCollision() {
        const throwRange = {
            x: this.X + (this.flipImage ? +10 : this.width + 10),
            y: this.Y,
            width: 5,
            height: this.height
        };

        this.world.level.enemies.forEach((enemy) => {
            if (this.isColliding(enemy, throwRange.x, throwRange.y, throwRange.width, throwRange.height)) {
                enemy.getHit(20);
                console.log(`Enemy ${enemy.name} was hit by a throw! Current Life: ${enemy.enemyLife}`);
            }
        });
    }
}