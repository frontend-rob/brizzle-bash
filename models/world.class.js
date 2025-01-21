/**
 * represents the game world, including the character, level, and game mechanics.
 */
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
    throwableObjects = [];
    healthObjects = [];
    bombObjects = [];
    bombAmount = 0;
    hasSeenEndboss = false;


    /**
     * creates an instance of the World class.
     * @param {HTMLCanvasElement} canvas - the canvas element for rendering the game.
     * @param {Object} keyboard - the keyboard input manager.
     */
    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.setWorld();
        this.runGame();
        this.initializeHealthBar();
        this.initializeBombBar();
        this.animationFrameId = requestAnimationFrame(() => this.drawWorld());
    }


    /**
     * sets the world reference for all objects in the game.
     */
    setWorld() {
        this.character.world = this;
        this.level.enemies.forEach(enemy => {
            enemy.world = this;
        });
        this.throwableObjects.forEach(object => {
            object.world = this;
        });
        this.healthObjects.forEach(object => {
            object.world = this;
        });
        this.bombObjects.forEach(object => {
            object.world = this;
        });
    }


    /**
     * initializes the health bar UI.
     */
    initializeHealthBar() {
        const progressBar = document.getElementById('progress-bar-health');
        progressBar.style.width = `${this.characterLife}%`;
    }


    /**
     * initializes the bomb bar UI.
     */
    initializeBombBar() {
        const progressBar = document.getElementById('progress-bar-bomb');
        progressBar.style.width = `${this.bombAmount}%`;
    }


    /**
     * pauses the game and stops animations.
     */
    pauseGame() {
        this.isPaused = true;
        console.log("Game Paused");

        soundManager.pauseSound('gameMusic');

        cancelAnimationFrame(this.animationFrameId);
        this.character.pauseAnimation();
        this.level.enemies.forEach(enemy => enemy.pauseAnimation());
        this.throwableObjects.forEach(obj => obj.pauseAnimation());
    }


    /**
     * resumes the game and restarts animations.
     */
    resumeGame() {
        this.isPaused = false;
        console.log("Game Resumed");
        soundManager.playSound('gameMusic');

        this.character.resumeAnimation();
        this.level.enemies.forEach(enemy => enemy.resumeAnimation());
        this.throwableObjects.forEach(obj => obj.resumeAnimation());
        this.animationFrameId = requestAnimationFrame(() => this.drawWorld());
    }


    /**
     * 
    /**
     * starts the background music if sound is on.
     */
    startBackgroundMusic() {
        if (isSoundOn) {
            soundManager.playSound('gameMusic');
        }
    }


    /**
     * runs the game logic in intervals, including collision detection.
     */
    runGame() {
        this.startBackgroundMusic();

        setInterval(() => {
            if (!this.isPaused && (!this.character.isDead() || !this.character.deadAnimationPlayed)) {
                soundManager.initializeSoundVolumes();
                this.checkCollisions();
                this.checkThrowObjects();
                this.checkThrowableObjectCollision();
            }
        }, 250);
    }


    /**
     * checks whether the player is throwing objects.
     */
    checkThrowObjects() {
        if (this.keyboard.THROW_BALL && this.bombAmount > 0) {
            this.throwSpikyBall();
        } else if (this.keyboard.THROW_BALL && this.bombAmount <= 0) {
            this.showThrowError();
        }
    }


    /**
     * checks collisions between the character and enemies or other objects.
     */
    checkCollisions() {
        if (this.character.isDead()) {
            return;
        }
        this.handleEnemyCollision();
        this.handleHealing();
        this.handleBombCollection();
        this.checkEndbossProximity();
    }


    /**
     * checks the proximity of the character to the end boss and triggers an event when close.
     */
    checkEndbossProximity() {
        const endBoss = this.level.enemies.find(enemy => enemy instanceof Endboss);
        if (endBoss) {
            const distance = Math.abs(this.character.X - endBoss.X);
            if (distance <= 480 && !this.hasSeenEndboss) {
                this.character.triggerSurprise();
                this.hasSeenEndboss = true;
            }
        }
    }


    /**
     * checks for collisions between the character and enemies in the level.
     */
    handleEnemyCollision() {
        this.level.enemies.forEach((enemy) => {
            const offsetX = enemy.collisionOffsetX || 0;
            const offsetY = enemy.collisionOffsetY || 0;

            if (this.character.isColliding(enemy, offsetX, offsetY)) {
                this.handleCollisionWithEnemy(enemy);
            }
        });
    }


    /**
     * handles the collision logic between the character and a specific enemy.
     * @param {Object} enemy - the enemy object the character collides with.
     */
    handleCollisionWithEnemy(enemy) {
        if (this.character.isHurt()) {
            console.log("Character is hurt and cannot punch.");
            return;
        }

        if (this.character.punch()) {
            this.processPunch(enemy);
        } else {
            this.processCollision(enemy);
        }

        if (this.character.isDead()) {
            this.character.playHitBeforeDead();
        }
    }


    /**
     * processes the logic when the character punches an enemy.
     * @param {Object} enemy - the enemy object being punched.
     */
    processPunch(enemy) {
        enemy.getHit(10);
    }


    /**
     * processes the logic when the character collides with an enemy.
     * @param {Object} enemy - the enemy object the character collides with.
     */
    processCollision(enemy) {
        this.character.getHit();
        if (!hasPlayedHurtSound) {
            soundManager.playSound('characterHurt');
            hasPlayedHurtSound = true;
        }
        console.log(`Character collided with enemy: ${enemy.name}, Current Life: ${this.character.characterLife}`);
    }


    /**
     * handles the healing logic when the character collects health objects.
     */
    handleHealing() {
        this.level.healthObjects.forEach((healthObject, index) => {
            if (this.character.characterLife === 100) {
                return;
            }
            if (this.character.isColliding(healthObject)) {
                soundManager.playSound('collectHealth');
                this.character.heal();
                this.level.healthObjects.splice(index, 1);
                console.log('Healed! Current Life:', this.character.characterLife);
            }
        });
    }


    /**
     * handles the collection of bombs when the character collides with bomb objects.
     */
    handleBombCollection() {
        if (this.bombAmount === 100) {
            return;
        }

        this.level.bombObjects.forEach((bombObject, index) => {
            if (this.character.isColliding(bombObject)) {
                this.collectBomb();
                this.level.bombObjects.splice(index, 1);
                console.log('Bomb collected! Current Bomb progress:', this.bombAmount);
            }
        });
    }


    /**
     * collects a bomb and updates the bomb amount and progress bar.
     */
    collectBomb() {
        if (this.bombAmount < 100) {
            this.bombAmount += 20;
            if (this.bombAmount > 100) {
                this.bombAmount = 100;
            }
            soundManager.playSound('collectItem');
            this.updateBombBar();
        }
    }


    /**
     * updates the bomb progress bar to reflect the current bomb amount.
     */
    updateBombBar() {
        const progressBar = document.getElementById('progress-bar-bomb');
        progressBar.style.width = `${this.bombAmount}%`;
    }


    /**
     * checks if the character throws an object and processes the throwing logic.
     */
    checkThrowObjects() {
        if (this.keyboard.THROW_BALL && this.bombAmount > 0) {
            this.throwSpikyBall();
        } else if (this.keyboard.THROW_BALL && this.bombAmount <= 0) {
            this.showThrowError();
        }
    }


    /**
     * throws a spiky ball from the character's position.
     */
    throwSpikyBall() {
        soundManager.playSound('characterThrowItem');

        let spikyBall = new ThrowableObject(this.character.X + 20, this.character.Y + 50, this, this.character);
        this.throwableObjects.push(spikyBall);
        this.bombAmount -= 20;
        this.updateBombBar();
    }


    /**
     * displays an error when the character tries to throw without enough bombs.
     */
    showThrowError() {
        soundManager.playSound('characterThrowError');

        let errorImage = new ErrorImageObject(this.character.X, this.character.Y);
        this.throwableObjects.push(errorImage);

        setTimeout(() => {
            this.throwableObjects = this.throwableObjects.filter(obj => obj !== errorImage);
        }, 1000);
    }


    /**
     * checks collisions between throwable objects and enemies.
     */
    checkThrowableObjectCollision() {
        this.throwableObjects.forEach((throwableObject) => {
            this.level.enemies.forEach((enemy) => {
                if (throwableObject.isColliding(enemy, throwableObject.X, throwableObject.Y, throwableObject.width, throwableObject.height)) {
                    enemy.getHit(20);
                    console.log(`Enemy ${enemy.name} was hit by a throwable object! Current Life: ${enemy.enemyLife}`);
                }
            });
        });
    }


    /**
     * draws all elements of the game world on the canvas.
     */
    drawWorld() {
        if (this.isPaused || (this.character.isDead() && this.character.deadAnimationPlayed)) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.camFrameX, 0);
        this.placeObjectsOnCanvas(this.level.backgroundObjects);
        this.placeObjectsOnCanvas(this.level.enemies);
        this.placeObjectsOnCanvas(this.level.healthObjects);
        this.placeObjectsOnCanvas(this.level.bombObjects);
        this.placeObjectsOnCanvas(this.throwableObjects);
        this.drawObject(this.character);
        this.ctx.translate(-this.camFrameX, 0);
        this.ctx.imageSmoothingEnabled = true;
        this.ctx.imageSmoothingQuality = 'high';
        if (!this.isPaused && (!this.character.isDead() || !this.character.deadAnimationPlayed)) {
            this.animationFrameId = requestAnimationFrame(() => this.drawWorld());
        }
    }


    /**
     * places an array of objects on the canvas.
     * @param {Array<Object>} objects - the objects to be placed on the canvas.
     */
    placeObjectsOnCanvas(objects) {
        objects.forEach(object => {
            this.drawObject(object);
        });
    }


    /**
     * draws a single object on the canvas.
     * @param {Object} moveObj - the object to be drawn.
     */
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


    /**
     * flips an image horizontally for rendering on the canvas.
     * @param {Object} moveObj - the object to be flipped.
     */
    flipImage(moveObj) {
        this.ctx.save();
        this.ctx.translate(moveObj.width, 0);
        this.ctx.scale(-1, 1);
        moveObj.X = moveObj.X * -1;
    }


    /**
     * reverses the horizontal flip of an image.
     * @param {Object} moveObj - the object whose flip is to be reversed.
     */
    flipImageReverse(moveObj) {
        moveObj.X = moveObj.X * -1;
        this.ctx.restore();
    }
}