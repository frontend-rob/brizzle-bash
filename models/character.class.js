/**
 * represents the main character object.
 * @extends MovableObject
 */
class Character extends MovableObject {

    width = 80;
    height = 160;
    speedX = 8;
    characterLife = 100;


    IMAGES_IDLE = [
        '../assets/img/character/idle/idleu_000.png',
        '../assets/img/character/idle/idleu_001.png',
        '../assets/img/character/idle/idleu_002.png',
        '../assets/img/character/idle/idleu_003.png',
        '../assets/img/character/idle/idleu_004.png',
        '../assets/img/character/idle/idleu_005.png',
        '../assets/img/character/idle/idleu_006.png',
        '../assets/img/character/idle/idleu_007.png',
        '../assets/img/character/idle/idleu_008.png',
        '../assets/img/character/idle/idleu_009.png',
        '../assets/img/character/idle/idleu_010.png',
        '../assets/img/character/idle/idleu_011.png',
        '../assets/img/character/idle/idleu_012.png',
        '../assets/img/character/idle/idleu_013.png',
        '../assets/img/character/idle/idleu_014.png',
        '../assets/img/character/idle/idleu_015.png',
        '../assets/img/character/idle/idleu_016.png',
        '../assets/img/character/idle/idleu_017.png',
        '../assets/img/character/idle/idleu_018.png',
        '../assets/img/character/idle/idleu_019.png',
        '../assets/img/character/idle/idleu_020.png',
        '../assets/img/character/idle/idleu_021.png',
        '../assets/img/character/idle/idleu_022.png',
        '../assets/img/character/idle/idleu_023.png',
        '../assets/img/character/idle/idleu_024.png',
        '../assets/img/character/idle/idleu_025.png',
        '../assets/img/character/idle/idleu_026.png',
        '../assets/img/character/idle/idleu_027.png',
        '../assets/img/character/idle/idleu_028.png',
        '../assets/img/character/idle/idleu_029.png',
        '../assets/img/character/idle/idleu_031.png',
        '../assets/img/character/idle/idleu_030.png',
        '../assets/img/character/idle/idleu_032.png',
        '../assets/img/character/idle/idleu_033.png',
        '../assets/img/character/idle/idleu_034.png',
        '../assets/img/character/idle/idleu_035.png',
        '../assets/img/character/idle/idleu_036.png',
        '../assets/img/character/idle/idleu_037.png',
        '../assets/img/character/idle/idleu_038.png',
        '../assets/img/character/idle/idleu_039.png',
        '../assets/img/character/idle/idleu_041.png',
        '../assets/img/character/idle/idleu_042.png',
        '../assets/img/character/idle/idleu_043.png',
        '../assets/img/character/idle/idleu_044.png',
        '../assets/img/character/idle/idleu_045.png',
        '../assets/img/character/idle/idleu_046.png',
        '../assets/img/character/idle/idleu_047.png',
        '../assets/img/character/idle/idleu_048.png',
        '../assets/img/character/idle/idleu_049.png',
        '../assets/img/character/idle/idleu_050.png',
        '../assets/img/character/idle/idleu_051.png',
        '../assets/img/character/idle/idleu_052.png',
        '../assets/img/character/idle/idleu_053.png',
        '../assets/img/character/idle/idleu_054.png',
        '../assets/img/character/idle/idleu_055.png',
        '../assets/img/character/idle/idleu_056.png',
        '../assets/img/character/idle/idleu_057.png',
        '../assets/img/character/idle/idleu_058.png',
        '../assets/img/character/idle/idleu_059.png',
        '../assets/img/character/idle/idleu_060.png',
        '../assets/img/character/idle/idleu_061.png',
    ];

    IMAGES_WALK = [
            '../assets/img/character/walk/runu_000.png',
            '../assets/img/character/walk/runu_001.png',
            '../assets/img/character/walk/runu_002.png',
            '../assets/img/character/walk/runu_003.png',
            '../assets/img/character/walk/runu_004.png',
            '../assets/img/character/walk/runu_005.png',
            '../assets/img/character/walk/runu_006.png',
            '../assets/img/character/walk/runu_007.png',
            '../assets/img/character/walk/runu_008.png',
            '../assets/img/character/walk/runu_009.png',
            '../assets/img/character/walk/runu_010.png',
            '../assets/img/character/walk/runu_011.png',
            '../assets/img/character/walk/runu_012.png',
            '../assets/img/character/walk/runu_014.png',
            '../assets/img/character/walk/runu_015.png',
            '../assets/img/character/walk/runu_016.png',
            '../assets/img/character/walk/runu_017.png',
            '../assets/img/character/walk/runu_018.png',
            '../assets/img/character/walk/runu_019.png',
            '../assets/img/character/walk/runu_020.png',
            '../assets/img/character/walk/runu_021.png',
            '../assets/img/character/walk/runu_022.png',
            '../assets/img/character/walk/runu_023.png',
            '../assets/img/character/walk/runu_024.png',
            '../assets/img/character/walk/runu_025.png',
            '../assets/img/character/walk/runu_026.png',
            '../assets/img/character/walk/runu_027.png',
            '../assets/img/character/walk/runu_028.png',
            '../assets/img/character/walk/runu_029.png',
            '../assets/img/character/walk/runu_030.png',
            '../assets/img/character/walk/runu_031.png',
            '../assets/img/character/walk/runu_032.png',
            '../assets/img/character/walk/runu_033.png',
            '../assets/img/character/walk/runu_034.png',
            '../assets/img/character/walk/runu_035.png',
            '../assets/img/character/walk/runu_036.png',
            '../assets/img/character/walk/runu_037.png',
            '../assets/img/character/walk/runu_038.png',
            '../assets/img/character/walk/runu_039.png',
            '../assets/img/character/walk/runu_040.png',
            '../assets/img/character/walk/runu_041.png',
            '../assets/img/character/walk/runu_042.png',
            '../assets/img/character/walk/runu_043.png',
            '../assets/img/character/walk/runu_044.png',
            '../assets/img/character/walk/runu_045.png',
            '../assets/img/character/walk/runu_046.png',
            '../assets/img/character/walk/runu_047.png',
            '../assets/img/character/walk/runu_048.png'
    ];

    IMAGES_JUMP = [
        '../assets/img/character/jump/juu_000.png',
        '../assets/img/character/jump/juu_001.png',
        '../assets/img/character/jump/juu_002.png',
        '../assets/img/character/jump/juu_003.png',
        '../assets/img/character/jump/juu_004.png',
        '../assets/img/character/jump/juu_005.png',
        '../assets/img/character/jump/juu_006.png',
        '../assets/img/character/jump/juu_007.png',
        '../assets/img/character/jump/juu_008.png',
        '../assets/img/character/jump/juu_009.png',
        '../assets/img/character/jump/juu_010.png',
        '../assets/img/character/jump/juu_011.png',
        '../assets/img/character/jump/juu_012.png',
        '../assets/img/character/jump/juu_013.png',
        '../assets/img/character/jump/juu_014.png',
        '../assets/img/character/jump/juu_015.png',
        '../assets/img/character/jump/juu_016.png',
        '../assets/img/character/jump/juu_017.png'


    ];

    IMAGES_PUNCH = [
        '../assets/img/character/attack/attu_000.png',
        '../assets/img/character/attack/attu_001.png',
        '../assets/img/character/attack/attu_002.png',
        '../assets/img/character/attack/attu_003.png',
        '../assets/img/character/attack/attu_004.png',
        '../assets/img/character/attack/attu_005.png',
        '../assets/img/character/attack/attu_006.png',
        '../assets/img/character/attack/attu_007.png',
        '../assets/img/character/attack/attu_008.png',
        '../assets/img/character/attack/attu_009.png',
        '../assets/img/character/attack/attu_010.png',
        '../assets/img/character/attack/attu_011.png',
        '../assets/img/character/attack/attu_012.png',
        '../assets/img/character/attack/attu_013.png',
        '../assets/img/character/attack/attu_014.png',
        '../assets/img/character/attack/attu_015.png',
        '../assets/img/character/attack/attu_016.png',
        '../assets/img/character/attack/attu_017.png',
        '../assets/img/character/attack/attu_018.png',
        '../assets/img/character/attack/attu_019.png',
        '../assets/img/character/attack/attu_020.png',
        '../assets/img/character/attack/attu_021.png',
        '../assets/img/character/attack/attu_022.png',
        '../assets/img/character/attack/attu_023.png',
        '../assets/img/character/attack/attu_024.png'
    ];

    IMAGES_HIT = [
        '../assets/img/character/hit/esu_000.png',
        '../assets/img/character/hit/esu_001.png',
        '../assets/img/character/hit/esu_002.png',
        '../assets/img/character/hit/esu_003.png',
        '../assets/img/character/hit/esu_004.png',
        '../assets/img/character/hit/esu_005.png'
    ];

    IMAGES_DEAD = [
        '../assets/img/character/dead/ko1u_000.png',
        '../assets/img/character/dead/ko1u_001.png',
        '../assets/img/character/dead/ko1u_002.png',
        '../assets/img/character/dead/ko1u_003.png',
        '../assets/img/character/dead/ko1u_004.png',
        '../assets/img/character/dead/ko1u_005.png',
        '../assets/img/character/dead/ko1u_006.png',
        '../assets/img/character/dead/ko1u_007.png',
        '../assets/img/character/dead/ko1u_008.png',
        '../assets/img/character/dead/ko1u_009.png',
        '../assets/img/character/dead/ko1u_010.png',
        '../assets/img/character/dead/ko1u_011.png',
        '../assets/img/character/dead/ko1u_012.png',
        '../assets/img/character/dead/ko1u_013.png',
        '../assets/img/character/dead/ko1u_014.png',
        '../assets/img/character/dead/ko1u_015.png',
        '../assets/img/character/dead/ko1u_016.png',
        '../assets/img/character/dead/ko1u_017.png',
        '../assets/img/character/dead/ko1u_018.png',
        '../assets/img/character/dead/ko1u_019.png',
        '../assets/img/character/dead/ko1u_020.png',
        '../assets/img/character/dead/ko1u_021.png',
        '../assets/img/character/dead/ko1u_022.png',
        '../assets/img/character/dead/ko1u_023.png',
        '../assets/img/character/dead/ko1u_024.png',
        '../assets/img/character/dead/ko1u_025.png',
        '../assets/img/character/dead/ko1u_026.png',
        '../assets/img/character/dead/ko1u_027.png',
        '../assets/img/character/dead/ko1u_028.png',
        '../assets/img/character/dead/ko1u_029.png',
        '../assets/img/character/dead/ko1u_030.png',
        '../assets/img/character/dead/ko1u_031.png',
        '../assets/img/character/dead/ko1u_032.png',
        '../assets/img/character/dead/ko1u_033.png',
        '../assets/img/character/dead/ko1u_034.png',
        '../assets/img/character/dead/ko1u_035.png',
        '../assets/img/character/dead/ko1u_036.png',
        '../assets/img/character/dead/ko1u_037.png',
        '../assets/img/character/dead/ko1u_038.png',
        '../assets/img/character/dead/ko1u_039.png',
        '../assets/img/character/dead/ko1u_040.png',
        '../assets/img/character/dead/ko1u_041.png',
        '../assets/img/character/dead/ko1u_042.png',
        '../assets/img/character/dead/ko1u_043.png',
        '../assets/img/character/dead/ko1u_044.png',
        '../assets/img/character/dead/ko1u_045.png',
        '../assets/img/character/dead/ko1u_046.png',
        '../assets/img/character/dead/ko1u_047.png',
        '../assets/img/character/dead/ko1u_048.png',
        '../assets/img/character/dead/ko1u_049.png',
        '../assets/img/character/dead/ko1u_050.png',
        '../assets/img/character/dead/ko1u_051.png',
        '../assets/img/character/dead/ko1u_052.png',
        '../assets/img/character/dead/ko1u_053.png',
        '../assets/img/character/dead/ko1u_054.png',
        '../assets/img/character/dead/ko1u_055.png',
        '../assets/img/character/dead/ko1u_056.png',
        '../assets/img/character/dead/ko1u_057.png',
        '../assets/img/character/dead/ko1u_058.png',
        '../assets/img/character/dead/ko1u_059.png',
        '../assets/img/character/dead/ko1u_060.png',
        '../assets/img/character/dead/ko1u_061.png'
    ];

    IMAGES_THROW = [
        '../assets/img/character/throw/thu_000.png',
        '../assets/img/character/throw/thu_001.png',
        '../assets/img/character/throw/thu_002.png',
        '../assets/img/character/throw/thu_003.png',
        '../assets/img/character/throw/thu_004.png',
        '../assets/img/character/throw/thu_005.png',
        '../assets/img/character/throw/thu_006.png',
        '../assets/img/character/throw/thu_007.png',
        '../assets/img/character/throw/thu_008.png',
        '../assets/img/character/throw/thu_009.png',
        '../assets/img/character/throw/thu_010.png',
        '../assets/img/character/throw/thu_011.png',
        '../assets/img/character/throw/thu_012.png',
        '../assets/img/character/throw/thu_013.png',
        '../assets/img/character/throw/thu_014.png',
        '../assets/img/character/throw/thu_015.png',
        '../assets/img/character/throw/thu_016.png',
        '../assets/img/character/throw/thu_017.png',
        '../assets/img/character/throw/thu_018.png',
        '../assets/img/character/throw/thu_019.png',
        '../assets/img/character/throw/thu_019.png',
        '../assets/img/character/throw/thu_020.png',
        '../assets/img/character/throw/thu_021.png',
        '../assets/img/character/throw/thu_022.png',
        '../assets/img/character/throw/thu_023.png',
        '../assets/img/character/throw/thu_024.png',
        '../assets/img/character/throw/thu_025.png',
        '../assets/img/character/throw/thu_026.png',
        '../assets/img/character/throw/thu_027.png',
        '../assets/img/character/throw/thu_028.png',
        '../assets/img/character/throw/thu_029.png',
        '../assets/img/character/throw/thu_030.png',
        '../assets/img/character/throw/thu_031.png',
        '../assets/img/character/throw/thu_032.png',
        '../assets/img/character/throw/thu_033.png',
        '../assets/img/character/throw/thu_034.png',
        '../assets/img/character/throw/thu_035.png',
        '../assets/img/character/throw/thu_036.png',
        '../assets/img/character/throw/thu_037.png',
        '../assets/img/character/throw/thu_038.png',
        '../assets/img/character/throw/thu_039.png',
        '../assets/img/character/throw/thu_040.png',
        '../assets/img/character/throw/thu_041.png',
        '../assets/img/character/throw/thu_042.png',
        '../assets/img/character/throw/thu_043.png',
        '../assets/img/character/throw/thu_044.png',
        '../assets/img/character/throw/thu_045.png',
        '../assets/img/character/throw/thu_046.png',
        '../assets/img/character/throw/thu_047.png',
        '../assets/img/character/throw/thu_048.png',
        '../assets/img/character/throw/thu_049.png'

    ];

    IMAGES_SURPRISE = [
        '../assets/img/character/surprise/surpu_000.png',
        '../assets/img/character/surprise/surpu_001.png',
        '../assets/img/character/surprise/surpu_002.png',
        '../assets/img/character/surprise/surpu_003.png',
        '../assets/img/character/surprise/surpu_004.png',
        '../assets/img/character/surprise/surpu_005.png'
    ];


    world;

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
    };

    constructor() {
        super().loadImage('../assets/img/character/idle/idleu_000.png');
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
    };

    animate() {
        setInterval(() => {
            if (this.world.isPaused) {
                soundManager.pauseSound('characterWalk');
                soundManager.pauseSound('characterJump');
                soundManager.pauseSound('characterPunch');
                soundManager.pauseSound('characterHurt');
                soundManager.pauseSound('collectHealth');
                soundManager.pauseSound('collectItem');
                soundManager.pauseSound('characterThrowError');
                soundManager.pauseSound('throwItem');
                soundManager.pauseSound('deadEnemy');
                soundManager.pauseSound('deadEndboss');
                soundManager.pauseSound('gameover');
                return;
            }

            soundManager.pauseSound('characterWalk');

            if (this.world.keyboard.RIGHT && this.X < this.world.level.levelEndX) {
                this.moveRight();
                this.flipImage = false;
                if (!this.isHurt()) {
                    soundManager.playSound('characterWalk');
                }
            }

            if (this.world.keyboard.LEFT && this.X > -480) {
                this.moveLeft();
                this.flipImage = true;
                if (!this.isHurt()) {
                    soundManager.playSound('characterWalk');
                }
            }

            if ((this.world.keyboard.UP || this.world.keyboard.SPACE) && !this.isHurt()) {
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


    // ! prioization from top to down
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

    triggerSurprise() {
        soundManager.playSound('characterSurprised');
        this.surpriseStartTime = Date.now();
    }

    isSurprised() {
        if (this.surpriseStartTime) {
            return Date.now() - this.surpriseStartTime <= 2000;
        }
        return false;
    }

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

        // ! adjust Y position because of different img sizes
        if (state === 'dead') {
            this.Y = 280;
        };

        if (state === 'hit') {
            this.Y = 272;
        };

        if (state === 'throw') {
            this.Y = 280;
        };

        const scale = this.animationScales[state];
        const newWidth = this.referenceWidth * scale.widthFactor;
        const newHeight = this.referenceHeight * scale.heightFactor;
        const heightDifference = newHeight - this.height;
        this.y -= heightDifference;

        this.width = newWidth;
        this.height = newHeight;

        if (state === 'dead') {
            this.playDeadAnimation(animations[state]);
        } else {
            this.playAnimation(animations[state]);
        }
    }

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

    async playHitBeforeDead() {
        this.updateCharacterAnimation('hit');
        await new Promise(resolve => setTimeout(resolve, 250));
        this.currentImage = 0;
        this.updateCharacterAnimation('dead');
        soundManager.playSound('gameover');
    }

    punch() {
        if (this.world.isPaused) return false;

        if (this.world.keyboard.PUNCH) {
            this.checkPunchCollision();
            return true;
        }
        return false;
    }

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

    throw() {
        if (this.world.isPaused) return false;

        if (this.world.keyboard.THROW_BALL && this.world.bombAmount > 0) {
            this.checkThrowCollision();
            return true;
        }
        return false;
    }

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