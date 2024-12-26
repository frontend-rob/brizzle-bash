class Plant extends MovableObject {

    Y = 304;
    width = 171;
    height = 150;
    damage = 100;

    IMAGES_WALK = [
        '../assets/img/monsters/plant/ep-00.png',
        '../assets/img/monsters/plant/ep-01.png',
        '../assets/img/monsters/plant/ep-02.png',
        '../assets/img/monsters/plant/ep-03.png',
        '../assets/img/monsters/plant/ep-04.png',
        '../assets/img/monsters/plant/ep-05.png',
        '../assets/img/monsters/plant/ep-06.png',
        '../assets/img/monsters/plant/ep-07.png',
        '../assets/img/monsters/plant/ep-08.png',
        '../assets/img/monsters/plant/ep-09.png',
        '../assets/img/monsters/plant/ep-10.png',
        '../assets/img/monsters/plant/ep-11.png',
        '../assets/img/monsters/plant/ep-12.png',
        '../assets/img/monsters/plant/ep-13.png',
        '../assets/img/monsters/plant/ep-14.png',
        '../assets/img/monsters/plant/ep-15.png',
        '../assets/img/monsters/plant/ep-16.png',
        '../assets/img/monsters/plant/ep-17.png',
        '../assets/img/monsters/plant/ep-18.png',
        '../assets/img/monsters/plant/ep-19.png'
    ];

    constructor(posX) {
        super().loadImage(this.IMAGES_WALK[0]);
        this.loadImages(this.IMAGES_WALK);
        this.X = posX;
        this.name = "Flesh Lotus";
        this.animate();
    };

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALK);
        }, 1000 / 35);
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