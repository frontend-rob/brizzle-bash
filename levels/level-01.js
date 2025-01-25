/**
 * generates a random x-coordinate based on a base value and a range.
 * the random value will be within the range of the base value plus a random value from 0 to `range`.
 * 
 * @param {number} baseX - the base x-coordinate.
 * @param {number} range - the range to add to the base x-coordinate.
 * @returns {number} - a random x-coordinate within the range of baseX and baseX + range.
 */
function getRandomX(baseX, range) {
    return baseX + Math.random() * range;
}


/**
 * generates a random y-coordinate based on a base value and a range.
 * the random value will be within the range of the base value plus a random value from 0 to `range`.
 * 
 * @param {number} baseY - the base y-coordinate.
 * @param {number} range - the range to add to the base y-coordinate.
 * @returns {number} - a random y-coordinate within the range of baseY and baseY + range.
 */
function getRandomY(baseY, range) {
    return baseY + Math.random() * range;
}


/**
 * generates a random speed based on a base value and a range.
 * the random speed will be within the range of baseSpeed and baseSpeed + range.
 * 
 * @param {number} baseSpeed - the base speed value.
 * @param {number} range - the range to add to the base speed value.
 * @returns {number} - a random speed within the range of baseSpeed and baseSpeed + range.
 */
function getRandomSpeed(baseSpeed, range) {
    return baseSpeed + Math.random() * range;
}


/**
 * defines the first level in the game with enemies, background objects, and collectables.
 * initializes the level with random positions and speeds.
 * 
 * @type {Level}
 */
const level01 = new Level(
    [
        // enemies
        new Plant(getRandomX(500, 200)),
        new Plant(getRandomX(2800, 200)),
        new Plant(getRandomX(4200, 200)),
        new Squid(getRandomX(800, 200), getRandomSpeed(0.5, 0.25)),
        new Squid(getRandomX(3200, 200), getRandomSpeed(1, 0.25)),
        new Squid(getRandomX(4400, 200), getRandomSpeed(1, 0.25)),
        new Candle(getRandomX(1200, 200), getRandomSpeed(0.5, 0.25)),
        new Candle(getRandomX(3800, 200), getRandomSpeed(1, 0.25)),
        new Candle(getRandomX(6000, 200), getRandomSpeed(1, 0.25)),
        new Spider(getRandomX(1800, 200), getRandomSpeed(1, 0.25)),
        new Spider(getRandomX(4800, 200), getRandomSpeed(1, 0.25)),
        new Spider(getRandomX(6400, 200), getRandomSpeed(1, 0.25)),
        new Spirit(getRandomX(3600, 200), getRandomY(150, 150), getRandomSpeed(2, 0.25)),
        new Spirit(getRandomX(5000, 200), getRandomY(150, 150), getRandomSpeed(3, 0.25)),
        new Spirit(getRandomX(6600, 200), getRandomY(150, 150), getRandomSpeed(4, 0.25)),
        new Spinner(getRandomX(2200, 200), getRandomY(100, 150), getRandomSpeed(2, 0.25)),
        new Spinner(getRandomX(4000, 200), getRandomY(100, 150), getRandomSpeed(2, 0.25)),
        new Spinner(getRandomX(5600, 200), getRandomY(100, 150), getRandomSpeed(4, 0.25)),
        new Spinner(getRandomX(6200, 200), getRandomY(100, 150), getRandomSpeed(4, 0.25)),
        new Endboss(getRandomX(7000, 200))
    ],

    [
        // background objects
        new BackgroundObject('./assets/img/background/layer-1.png', -1599),
        new BackgroundObject('./assets/img/background/layer-2.png', -1599),
        new BackgroundObject('./assets/img/background/layer-3.png', -1599),
        new BackgroundObject('./assets/img/background/layer-4.png', -1599),
        new BackgroundObject('./assets/img/background/layer-5.png', -1599),
        new BackgroundObject('./assets/img/background/layer-1.png', 0),
        new BackgroundObject('./assets/img/background/layer-2.png', 0),
        new BackgroundObject('./assets/img/background/layer-3.png', 0),
        new BackgroundObject('./assets/img/background/layer-4.png', 0),
        new BackgroundObject('./assets/img/background/layer-5.png', 0),
        new BackgroundObject('./assets/img/background/layer-1.png', 1599),
        new BackgroundObject('./assets/img/background/layer-2.png', 1599),
        new BackgroundObject('./assets/img/background/layer-3.png', 1599),
        new BackgroundObject('./assets/img/background/layer-4.png', 1599),
        new BackgroundObject('./assets/img/background/layer-5.png', 1599),
        new BackgroundObject('./assets/img/background/layer-1.png', 1599 * 2),
        new BackgroundObject('./assets/img/background/layer-2.png', 1599 * 2),
        new BackgroundObject('./assets/img/background/layer-3.png', 1599 * 2),
        new BackgroundObject('./assets/img/background/layer-4.png', 1599 * 2),
        new BackgroundObject('./assets/img/background/layer-5.png', 1599 * 2),
        new BackgroundObject('./assets/img/background/layer-1.png', 1599 * 3),
        new BackgroundObject('./assets/img/background/layer-2.png', 1599 * 3),
        new BackgroundObject('./assets/img/background/layer-3.png', 1599 * 3),
        new BackgroundObject('./assets/img/background/layer-4.png', 1599 * 3),
        new BackgroundObject('./assets/img/background/layer-5.png', 1599 * 3),
        new BackgroundObject('./assets/img/background/layer-1.png', 1599 * 4),
        new BackgroundObject('./assets/img/background/layer-2.png', 1599 * 4),
        new BackgroundObject('./assets/img/background/layer-3.png', 1599 * 4),
        new BackgroundObject('./assets/img/background/layer-4.png', 1599 * 4),
        new BackgroundObject('./assets/img/background/layer-5.png', 1599 * 4)
    ],

    [
        // health collectables
        new HealthObject(getRandomX(-300, 200), getRandomY(200, 100)),
        new HealthObject(getRandomX(1000, 200), getRandomY(200, 100)),
        new HealthObject(getRandomX(2000, 200), getRandomY(200, 100)),
        new HealthObject(getRandomX(3000, 200), getRandomY(200, 100)),
        new HealthObject(getRandomX(4000, 200), getRandomY(200, 100)),
        new HealthObject(getRandomX(5000, 200), getRandomY(200, 100)),
        new HealthObject(getRandomX(6000, 200), getRandomY(200, 100)),
    ],

    [
        // bomb collectables
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
