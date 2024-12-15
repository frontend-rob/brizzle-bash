/**
 * @type {number} currentSlide - tracks the current slide index in the carousel.
 */
let currentSlide = 0;


/**
 * @type {Array<Object>} carouselData - holds data for each carousel item, including ID, image source, and title.
 */
const carouselData = [
    {
        id: "carousel-brizzly",
        image: "../assets/img/carousel/talku-00.png",
        title: "Brizzly"
    },
    {
        id: "carousel-candle",
        image: "../assets/img/carousel/cm-00.png",
        title: "Candle Bug"
    },
    {
        id: "carousel-mushroom",
        image: "../assets/img/carousel/mr-00.png",
        title: "Fungal Colossus"
    },
    {
        id: "carousel-plant",
        image: "../assets/img/carousel/ep-00.png",
        title: "Flesh Lotus"
    },
    {
        id: "carousel-spider",
        image: "../assets/img/carousel/sp-00.png",
        title: "Toxic Widow"
    },
    {
        id: "carousel-spinner",
        image: "../assets/img/carousel/spi-00.png",
        title: "Ocular Spinner"
    },
    {
        id: "carousel-spirit",
        image: "../assets/img/carousel/spr-00.png",
        title: "Soul Phantom"
    },
    {
        id: "carousel-squid",
        image: "../assets/img/carousel/squ-00.png",
        title: "Shadow Squid"
    },
];


/**
 * initializes the carousel and populates it with items from carouselData.
 */
function createCarousel() {
    const carousel = document.getElementById('carousel');

    carousel.innerHTML = '';
    let carouselHTML = '';

    carouselData.forEach(data => {
        carouselHTML += `
            <div class="carousel-item">
                <div class="image-container">
                    <img src="${data.image}" alt="${data.title}" id="${data.id}">
                </div>
                <div class="carousel-caption">
                    <h3>${data.title}</h3>
                </div>
            </div>
        `;
    });

    carousel.innerHTML = carouselHTML;
    updateCarousel();
}


/**
 * moves the carousel slides based on the step value.
 * @param {number} step - the direction and number of slides to move (e.g., -1 for previous, 1 for next).
 */
function moveSlide(step) {
    const items = document.querySelectorAll('.carousel-item');
    const totalSlides = items.length;

    currentSlide = (currentSlide + step + totalSlides) % totalSlides;

    updateCarousel();
}


/**
 * updates the carousel to reflect the current slide.
 * adjusts the active state and positions the carousel.
 */
function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    items.forEach((item, index) => {
        if (index === currentSlide) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    const carousel = document.getElementById('carousel');
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}