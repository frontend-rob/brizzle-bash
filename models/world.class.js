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


    initializeHealthBar() {
        const progressBar = document.getElementById('progress-bar-health');
        progressBar.style.width = `${this.characterLife}%`;
    }

    

    initializeBombBar() {
        const progressBar = document.getElementById('progress-bar-bomb');
        progressBar.style.width = `${this.bombAmount}%`;
    }


    pauseGame() {
        this.isPaused = true;
        console.log("Game Paused");

        cancelAnimationFrame(this.animationFrameId);

        this.character.pauseAnimation();
        this.level.enemies.forEach(enemy => enemy.pauseAnimation());
        this.throwableObjects.forEach(obj => obj.pauseAnimation());
    }


    resumeGame() {
        this.isPaused = false;
        console.log("Game Resumed");

        this.character.resumeAnimation();
        this.level.enemies.forEach(enemy => enemy.resumeAnimation());
        this.throwableObjects.forEach(obj => obj.resumeAnimation()); 
        this.animationFrameId = requestAnimationFrame(() => this.drawWorld());
    }


    runGame() {
        setInterval(() => {
            if (!this.isPaused && (!this.character.isDead() || !this.character.deadAnimationPlayed)) {
                // soundManager.playSound('gameMusic');
                this.checkCollisions();
                this.checkThrowObjects();
                this.checkThrowableObjectCollision();
            }
        }, 250);
    }


    checkThrowObjects() {
        if (this.keyboard.THROW_BALL) {
            let spikyball = new ThrowableObject(this.character.X + 20, this.character.Y + 50, this, this.character);
            this.throwableObjects.push(spikyball);
        }
    }


    checkCollisions() {
        if (this.character.isDead()) {
            return;
        }
        this.handleEnemyCollision();
        this.handleHealing();
        this.handleBombCollection();
        this.checkEndbossProximity();
    }

    checkEndbossProximity() {
        const endBoss = this.level.enemies.find(enemy => enemy instanceof Endboss);
        if (endBoss) {
            const distance = Math.abs(this.character.X - endBoss.X);
            if (distance <= 400 && !this.hasSeenEndboss) {
                this.character.triggerSurprise();
                this.hasSeenEndboss = true;
            }
        }
    }


    handleEnemyCollision() {
        this.level.enemies.forEach((enemy) => {
            if (this.character.isColliding(enemy, this.collisionOffsetX, this.collisionOffsetY)) {
                this.handleCollisionWithEnemy(enemy);
            }
        });
    }

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


    processPunch(enemy) {
        enemy.getHit(10);
    }

    
    processCollision(enemy) {
        this.character.getHit();
        if (!hasPlayedHurtSound) {
            soundManager.playSound('characterHurt');
            hasPlayedHurtSound = true;
        }
        console.log(`Character collided with enemy: ${enemy.name}, Current Life: ${this.character.characterLife}`);
    }




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


    updateBombBar() {
        const progressBar = document.getElementById('progress-bar-bomb');
        progressBar.style.width = `${this.bombAmount}%`;
    }



    checkThrowObjects() {
        if (this.keyboard.THROW_BALL && this.bombAmount > 0) {
            this.throwSpikyBall();
        } else if (this.keyboard.THROW_BALL && this.bombAmount <= 0) {
            this.showThrowError();
        }
    }

    throwSpikyBall() {
        soundManager.playSound('characterThrowTtem');

        let spikyBall = new ThrowableObject(this.character.X + 20, this.character.Y + 50, this, this.character);
        this.throwableObjects.push(spikyBall);
        this.bombAmount -= 20;
        this.updateBombBar();
    }

    showThrowError() {
        soundManager.playSound('characterThrowError');

        let errorImage = new ErrorImageObject(this.character.X, this.character.Y);
        this.throwableObjects.push(errorImage);

        setTimeout(() => {
            this.throwableObjects = this.throwableObjects.filter(obj => obj !== errorImage);
        }, 1000);
    }


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

}
