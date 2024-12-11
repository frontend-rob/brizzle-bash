class Spider extends MovableObject {
    
    Y = 320;
    width = 142;
    height = 125;

    IMAGES_WALK = [
        '../assets/img/monsters/spider/sp-00.png',
        '../assets/img/monsters/spider/sp-01.png',
        '../assets/img/monsters/spider/sp-02.png',
        '../assets/img/monsters/spider/sp-03.png',
        '../assets/img/monsters/spider/sp-04.png',
        '../assets/img/monsters/spider/sp-05.png',
        '../assets/img/monsters/spider/sp-06.png',
        '../assets/img/monsters/spider/sp-07.png',
        '../assets/img/monsters/spider/sp-08.png',
        '../assets/img/monsters/spider/sp-09.png',
        '../assets/img/monsters/spider/sp-10.png',
        '../assets/img/monsters/spider/sp-11.png',
        '../assets/img/monsters/spider/sp-12.png',
        '../assets/img/monsters/spider/sp-13.png',
        '../assets/img/monsters/spider/sp-14.png',
        '../assets/img/monsters/spider/sp-15.png',
        '../assets/img/monsters/spider/sp-16.png',
        '../assets/img/monsters/spider/sp-17.png',
        '../assets/img/monsters/spider/sp-18.png',
        '../assets/img/monsters/spider/sp-19.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALK[0]);
        this.loadImages(this.IMAGES_WALK);
        this.X = 420 + Math.random() * 500;
        this.speedX = 0.25 + Math.random() * 0.5;
        this.animate();
    };

    animate() {
        setInterval(() => {
            this.moveLeft();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALK);
        }, 1000 / 35);
    };


}