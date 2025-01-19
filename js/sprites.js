/**
 * animation frames for the main character (Brizzly).
 * each key represents a specific animation state, and its value is an array of image paths.
 * 
 * states include:
 * - IDLE: when the character is standing still.
 * - WALK: when the character is moving.
 * - JUMP: when the character jumps.
 * - PUNCH: when the character performs a punch attack.
 * - THROW: when the character throws an object.
 * - HIT: when the character gets hit by an enemy.
 * - DEAD: when the character dies.
 * - SURPRISE: when the character is startled or surprised.
 */
let BRIZZLY_IMAGES = {
    'IDLE': [
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
        '../assets/img/character/idle/idleu_061.png'
    ],

    'WALK': [
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
    ],

    'JUMP': [
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
    ],

    'PUNCH': [
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
    ],

    'THROW': [
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
    ],

    'HIT': [
        '../assets/img/character/hit/esu_000.png',
        '../assets/img/character/hit/esu_001.png',
        '../assets/img/character/hit/esu_002.png',
        '../assets/img/character/hit/esu_003.png',
        '../assets/img/character/hit/esu_004.png',
        '../assets/img/character/hit/esu_005.png'
    ],

    'DEAD': [
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
    ],

    'SURPRISE': [
        '../assets/img/character/surprise/surpu_000.png',
        '../assets/img/character/surprise/surpu_001.png',
        '../assets/img/character/surprise/surpu_002.png',
        '../assets/img/character/surprise/surpu_003.png',
        '../assets/img/character/surprise/surpu_004.png',
        '../assets/img/character/surprise/surpu_005.png'
    ]
};


/**
 * animation frames for the mushroom end boss called "fungal colossus".
 * 
 * states include:
 * - WALK: when the boss is moving.
 * - HIT: when the boss gets hit by the player.
 */
let ENDBOSS_IMAGES = {
    'WALK': [
        '../assets/img/monsters/mushroom/walk/mr-00.png',
        '../assets/img/monsters/mushroom/walk/mr-01.png',
        '../assets/img/monsters/mushroom/walk/mr-02.png',
        '../assets/img/monsters/mushroom/walk/mr-03.png',
        '../assets/img/monsters/mushroom/walk/mr-04.png',
        '../assets/img/monsters/mushroom/walk/mr-05.png',
        '../assets/img/monsters/mushroom/walk/mr-06.png',
        '../assets/img/monsters/mushroom/walk/mr-07.png',
        '../assets/img/monsters/mushroom/walk/mr-08.png',
        '../assets/img/monsters/mushroom/walk/mr-09.png',
        '../assets/img/monsters/mushroom/walk/mr-10.png',
        '../assets/img/monsters/mushroom/walk/mr-11.png',
        '../assets/img/monsters/mushroom/walk/mr-12.png',
        '../assets/img/monsters/mushroom/walk/mr-13.png',
        '../assets/img/monsters/mushroom/walk/mr-14.png',
        '../assets/img/monsters/mushroom/walk/mr-15.png',
        '../assets/img/monsters/mushroom/walk/mr-16.png',
        '../assets/img/monsters/mushroom/walk/mr-17.png',
        '../assets/img/monsters/mushroom/walk/mr-18.png',
        '../assets/img/monsters/mushroom/walk/mr-19.png',
        '../assets/img/monsters/mushroom/walk/mr-20.png',
        '../assets/img/monsters/mushroom/walk/mr-21.png',
        '../assets/img/monsters/mushroom/walk/mr-22.png',
        '../assets/img/monsters/mushroom/walk/mr-23.png',
        '../assets/img/monsters/mushroom/walk/mr-24.png',
        '../assets/img/monsters/mushroom/walk/mr-25.png',
        '../assets/img/monsters/mushroom/walk/mr-26.png',
        '../assets/img/monsters/mushroom/walk/mr-27.png',
        '../assets/img/monsters/mushroom/walk/mr-28.png',
        '../assets/img/monsters/mushroom/walk/mr-29.png'
    ],

    'HIT': [
        '../assets/img/monsters/mushroom/hit/mrh-00.png',
        '../assets/img/monsters/mushroom/hit/mrh-01.png',
        '../assets/img/monsters/mushroom/hit/mrh-02.png',
        '../assets/img/monsters/mushroom/hit/mrh-03.png',
        '../assets/img/monsters/mushroom/hit/mrh-04.png',
        '../assets/img/monsters/mushroom/hit/mrh-05.png',
        '../assets/img/monsters/mushroom/hit/mrh-06.png'
    ]
};


/**
 * animation frames for the candle bug enemy.
 */
let CANDLE_IMAGES = {
    'WALK': [
        '../assets/img/monsters/candle/cm-00.png',
        '../assets/img/monsters/candle/cm-01.png',
        '../assets/img/monsters/candle/cm-02.png',
        '../assets/img/monsters/candle/cm-03.png',
        '../assets/img/monsters/candle/cm-04.png',
        '../assets/img/monsters/candle/cm-05.png',
        '../assets/img/monsters/candle/cm-06.png',
        '../assets/img/monsters/candle/cm-07.png',
        '../assets/img/monsters/candle/cm-08.png',
        '../assets/img/monsters/candle/cm-09.png',
        '../assets/img/monsters/candle/cm-10.png',
        '../assets/img/monsters/candle/cm-11.png',
        '../assets/img/monsters/candle/cm-12.png',
        '../assets/img/monsters/candle/cm-13.png',
        '../assets/img/monsters/candle/cm-14.png',
        '../assets/img/monsters/candle/cm-15.png',
        '../assets/img/monsters/candle/cm-16.png',
        '../assets/img/monsters/candle/cm-17.png',
        '../assets/img/monsters/candle/cm-18.png',
        '../assets/img/monsters/candle/cm-19.png',
        '../assets/img/monsters/candle/cm-20.png',
        '../assets/img/monsters/candle/cm-21.png',
        '../assets/img/monsters/candle/cm-22.png',
        '../assets/img/monsters/candle/cm-23.png',
        '../assets/img/monsters/candle/cm-24.png',
        '../assets/img/monsters/candle/cm-25.png',
        '../assets/img/monsters/candle/cm-26.png',
        '../assets/img/monsters/candle/cm-27.png',
        '../assets/img/monsters/candle/cm-28.png',
        '../assets/img/monsters/candle/cm-29.png',
        '../assets/img/monsters/candle/cm-30.png',
        '../assets/img/monsters/candle/cm-31.png',
        '../assets/img/monsters/candle/cm-32.png',
        '../assets/img/monsters/candle/cm-33.png',
        '../assets/img/monsters/candle/cm-34.png',
        '../assets/img/monsters/candle/cm-35.png',
        '../assets/img/monsters/candle/cm-36.png',
        '../assets/img/monsters/candle/cm-37.png',
        '../assets/img/monsters/candle/cm-38.png',
        '../assets/img/monsters/candle/cm-39.png'
    ]
};


/**
 * animation frames for the flesh eating plant enemy.
 */
let PLANT_IMAGES = {
    'IDLE': [
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
    ]
};


/**
 * animation frames for the spider enemy.
 */
let SPIDER_IMAGES = {
    'WALK': [
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
    ]
};


/**
 * animation frames for the ocular spinner enemy.
 */
let SPINNER_IMAGES = {
    'WALK': [
        '../assets/img/monsters/spinner/spi-00.png',
        '../assets/img/monsters/spinner/spi-01.png',
        '../assets/img/monsters/spinner/spi-02.png',
        '../assets/img/monsters/spinner/spi-03.png',
        '../assets/img/monsters/spinner/spi-04.png',
        '../assets/img/monsters/spinner/spi-05.png',
        '../assets/img/monsters/spinner/spi-06.png',
        '../assets/img/monsters/spinner/spi-07.png',
        '../assets/img/monsters/spinner/spi-08.png',
        '../assets/img/monsters/spinner/spi-09.png',
        '../assets/img/monsters/spinner/spi-10.png',
        '../assets/img/monsters/spinner/spi-11.png',
        '../assets/img/monsters/spinner/spi-12.png',
        '../assets/img/monsters/spinner/spi-13.png',
        '../assets/img/monsters/spinner/spi-14.png',
        '../assets/img/monsters/spinner/spi-15.png',
        '../assets/img/monsters/spinner/spi-16.png',
        '../assets/img/monsters/spinner/spi-17.png',
        '../assets/img/monsters/spinner/spi-18.png',
        '../assets/img/monsters/spinner/spi-19.png'
    ]
};


/**
 * animation frames for the phantom spirit enemy.
 */
let SPIRIT_IMAGES = {
    'WALK': [
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
    ]
};


/**
 * animation frames for the shadow squid enemy.
 */
let SQUID_IMAGES = {
    'WALK': [
        '../assets/img/monsters/squid/squ-00.png',
        '../assets/img/monsters/squid/squ-01.png',
        '../assets/img/monsters/squid/squ-02.png',
        '../assets/img/monsters/squid/squ-03.png',
        '../assets/img/monsters/squid/squ-04.png',
        '../assets/img/monsters/squid/squ-05.png',
        '../assets/img/monsters/squid/squ-06.png',
        '../assets/img/monsters/squid/squ-07.png',
        '../assets/img/monsters/squid/squ-08.png',
        '../assets/img/monsters/squid/squ-09.png',
        '../assets/img/monsters/squid/squ-10.png',
        '../assets/img/monsters/squid/squ-11.png',
        '../assets/img/monsters/squid/squ-12.png',
        '../assets/img/monsters/squid/squ-13.png',
        '../assets/img/monsters/squid/squ-14.png',
        '../assets/img/monsters/squid/squ-15.png',
        '../assets/img/monsters/squid/squ-16.png',
        '../assets/img/monsters/squid/squ-17.png',
        '../assets/img/monsters/squid/squ-18.png',
        '../assets/img/monsters/squid/squ-19.png'
    ]
};