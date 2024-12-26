function getRandomX(baseX, range) {
    return baseX + Math.random() * range;
}

function getRandomY(baseY, range) {
    return baseY + Math.random() * range;
}


const level01 = new Level(

    [
        // ! INCLUDE ENEMIES
        // new Squid(),
        new Plant(),
        // new Candle(),
        // new Spider(),
        // new Spirit(),
        // new Spinner(),
        new Endboss()
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
        new HealthObject(getRandomX(400, 300), getRandomY(200, 100)),
    ],
    
    [
        // ! INCLUDE BOMB COLLECTABLES
        new BombObject(getRandomX(400, 300), getRandomY(200, 100)),
    ]

);