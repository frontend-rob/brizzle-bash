class Endboss extends MovableObject {

    Y = 100;
    width = 400;
    height = 350;
    speedX = 0.125;
    damage = 20;

    IMAGES_WALK = [
        '../assets/img/monsters/mushroom/mr-00.png',
        '../assets/img/monsters/mushroom/mr-01.png',
        '../assets/img/monsters/mushroom/mr-02.png',
        '../assets/img/monsters/mushroom/mr-03.png',
        '../assets/img/monsters/mushroom/mr-04.png',
        '../assets/img/monsters/mushroom/mr-05.png',
        '../assets/img/monsters/mushroom/mr-06.png',
        '../assets/img/monsters/mushroom/mr-07.png',
        '../assets/img/monsters/mushroom/mr-08.png',
        '../assets/img/monsters/mushroom/mr-09.png',
        '../assets/img/monsters/mushroom/mr-10.png',
        '../assets/img/monsters/mushroom/mr-11.png',
        '../assets/img/monsters/mushroom/mr-12.png',
        '../assets/img/monsters/mushroom/mr-13.png',
        '../assets/img/monsters/mushroom/mr-14.png',
        '../assets/img/monsters/mushroom/mr-15.png',
        '../assets/img/monsters/mushroom/mr-16.png',
        '../assets/img/monsters/mushroom/mr-17.png',
        '../assets/img/monsters/mushroom/mr-18.png',
        '../assets/img/monsters/mushroom/mr-19.png',
        '../assets/img/monsters/mushroom/mr-20.png',
        '../assets/img/monsters/mushroom/mr-21.png',
        '../assets/img/monsters/mushroom/mr-22.png',
        '../assets/img/monsters/mushroom/mr-23.png',
        '../assets/img/monsters/mushroom/mr-24.png',
        '../assets/img/monsters/mushroom/mr-25.png',
        '../assets/img/monsters/mushroom/mr-26.png',
        '../assets/img/monsters/mushroom/mr-27.png',
        '../assets/img/monsters/mushroom/mr-28.png',
        '../assets/img/monsters/mushroom/mr-29.png'
    ];

    constructor(posX) {
        super().loadImage(this.IMAGES_WALK[0]);
        this.loadImages(this.IMAGES_WALK);
        this.name = "Fungal Colossus";
        this.X = posX;
        this.animate();
    };

    animate() {
        setInterval(() => {
            this.moveLeft();
            this.playAnimation(this.IMAGES_WALK);
        }, 1000 / 60);
    };

    getHit() {
        this.enemyLife -= this.damage;
        if (this.enemyLife <= 0) {
            this.isDead();
        }
    }

    isDead() {
        console.log(`${this.name} has died!`);

        const index = this.world.level.enemies.indexOf(this);
        if (index > -1) {
            this.world.level.enemies.splice(index, 1);
        }

        console.log(`Enemies alive:`, this.world.level.enemies);
    }

    

}