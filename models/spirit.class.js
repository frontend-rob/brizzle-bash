class Spirit extends MovableObject {
    
    Y = 190;
    width = 171;
    height = 150;

    amplitude = 10;
    frequency = 0.075;
    time = 0;

    IMAGES_WALK = [
        '../assets/img/monsters/spirit/spr-00.png',
        '../assets/img/monsters/spirit/spr-01.png',
        '../assets/img/monsters/spirit/spr-02.png',
        '../assets/img/monsters/spirit/spr-03.png',
        '../assets/img/monsters/spirit/spr-04.png',
        '../assets/img/monsters/spirit/spr-05.png',
        '../assets/img/monsters/spirit/spr-06.png',
        '../assets/img/monsters/spirit/spr-07.png',
        '../assets/img/monsters/spirit/spr-08.png',
        '../assets/img/monsters/spirit/spr-09.png',
        '../assets/img/monsters/spirit/spr-10.png',
        '../assets/img/monsters/spirit/spr-11.png',
        '../assets/img/monsters/spirit/spr-12.png',
        '../assets/img/monsters/spirit/spr-13.png',
        '../assets/img/monsters/spirit/spr-14.png',
        '../assets/img/monsters/spirit/spr-15.png',
        '../assets/img/monsters/spirit/spr-16.png',
        '../assets/img/monsters/spirit/spr-17.png',
        '../assets/img/monsters/spirit/spr-18.png',
        '../assets/img/monsters/spirit/spr-19.png'
    ];

    constructor() {
        super().loadImage(this.IMAGES_WALK[0]);
        this.loadImages(this.IMAGES_WALK);
        this.X = 420 + Math.random() * 500;
        this.speedX = 0.75 + Math.random() * 0.5;
        this.animate();
    };

    animate() {
        setInterval(() => {
            this.moveLeftOscillate();
        }, 1000 / 60);

        setInterval(() => {
            this.playAnimation(this.IMAGES_WALK);
        }, 1000 / 35);
    }

    moveLeftOscillate() {
        this.moveLeft();
        this.Y = 190 + Math.sin(this.time * this.frequency) * this.amplitude;
        this.time += 1;
    }


}