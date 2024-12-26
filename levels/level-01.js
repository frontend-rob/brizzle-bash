function getRandomX(baseX, range) {
    return baseX + Math.random() * range;
}

function getRandomY(baseY, range) {
    return baseY + Math.random() * range;
}

function getRandomSpeed(baseSpeed, range) {
    return baseSpeed + Math.random() * range;
}




const level01 = new Level(

    [
        // ! INCLUDE ENEMIES
        new Plant(getRandomX(600, 200)),
        new Plant(getRandomX(2800, 200)),
        new Squid(getRandomX(1400, 200), getRandomSpeed(0.5, 0.25)),
        new Squid(getRandomX(3200, 200), getRandomSpeed(1.5, 0.25)),
        new Squid(getRandomX(4200, 200), getRandomSpeed(2, 0.25)),
        new Candle(getRandomX(1800, 200), getRandomSpeed(0.5, 0.25)),
        new Candle(getRandomX(3600, 200), getRandomSpeed(1, 0.25)),
        new Spider(getRandomX(2400, 200), getRandomSpeed(1, 0.25)),
        new Spider(getRandomX(4800, 200), getRandomSpeed(1.5, 0.25)),
        new Spirit(getRandomX(3500, 200), getRandomY(150, 150), getRandomSpeed(1, 0.25)),
        new Spirit(getRandomX(5000, 200), getRandomY(150, 150), getRandomSpeed(1.5, 0.25)),
        new Spinner(getRandomX(4000, 200), getRandomY(100, 150), getRandomSpeed(1.5, 0.25)),
        new Spinner(getRandomX(5600, 200), getRandomY(100, 150), getRandomSpeed(2, 0.25)),
        new Endboss(getRandomX(7000, 200))
    ],


    [
        // ! INCLUDE BACKGROUND
        new BackgroundObject('../assets/img/background/layer-1.png', -1599),
        new BackgroundObject('../assets/img/background/layer-2.png', -1599),
        new BackgroundObject('../assets/img/background/layer-3.png', -1599),
        new BackgroundObject('../assets/img/background/layer-4.png', -1599),
        new BackgroundObject('../assets/img/background/layer-5.png', -1599),
        new BackgroundObject('../assets/img/background/layer-1.png', 0),
        new BackgroundObject('../assets/img/background/layer-2.png', 0),
        new BackgroundObject('../assets/img/background/layer-3.png', 0),
        new BackgroundObject('../assets/img/background/layer-4.png', 0),
        new BackgroundObject('../assets/img/background/layer-5.png', 0),
        new BackgroundObject('../assets/img/background/layer-1.png', 1599),
        new BackgroundObject('../assets/img/background/layer-2.png', 1599),
        new BackgroundObject('../assets/img/background/layer-3.png', 1599),
        new BackgroundObject('../assets/img/background/layer-4.png', 1599),
        new BackgroundObject('../assets/img/background/layer-5.png', 1599),
        new BackgroundObject('../assets/img/background/layer-1.png', 1599 * 2),
        new BackgroundObject('../assets/img/background/layer-2.png', 1599 * 2),
        new BackgroundObject('../assets/img/background/layer-3.png', 1599 * 2),
        new BackgroundObject('../assets/img/background/layer-4.png', 1599 * 2),
        new BackgroundObject('../assets/img/background/layer-5.png', 1599 * 2),
        new BackgroundObject('../assets/img/background/layer-1.png', 1599 * 3),
        new BackgroundObject('../assets/img/background/layer-2.png', 1599 * 3),
        new BackgroundObject('../assets/img/background/layer-3.png', 1599 * 3),
        new BackgroundObject('../assets/img/background/layer-4.png', 1599 * 3),
        new BackgroundObject('../assets/img/background/layer-5.png', 1599 * 3),
        new BackgroundObject('../assets/img/background/layer-1.png', 1599 * 4),
        new BackgroundObject('../assets/img/background/layer-2.png', 1599 * 4),
        new BackgroundObject('../assets/img/background/layer-3.png', 1599 * 4),
        new BackgroundObject('../assets/img/background/layer-4.png', 1599 * 4),
        new BackgroundObject('../assets/img/background/layer-5.png', 1599 * 4)
    ],

    [
        // ! INCLUDE HEALTH COLLECTABLES
        new HealthObject(getRandomX(-300, 200), getRandomY(200, 100)),
        new HealthObject(getRandomX(1400, 200), getRandomY(200, 100)),
    ],

    [
        // ! INCLUDE BOMB COLLECTABLES
        new BombObject(getRandomX(-500, 200), getRandomY(100, 200)),
        new BombObject(getRandomX(-300, 200), getRandomY(100, 200)),
        new BombObject(getRandomX(1500, 200), getRandomY(100, 200)),
        new BombObject(getRandomX(2500, 200), getRandomY(100, 200)),
        new BombObject(getRandomX(3500, 200), getRandomY(100, 200)),
        new BombObject(getRandomX(4500, 200), getRandomY(100, 200)),
        new BombObject(getRandomX(5500, 200), getRandomY(100, 200)),
        new BombObject(getRandomX(6500, 200), getRandomY(100, 200)),
    ]

);