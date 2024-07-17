const swiper = new Swiper('#slider', {
    direction: 'horizontal',
    loop: true,

    pagination: {
        el: '.swiper-pagination',
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    autoplay: {
        delay: 10000,
    },
});

const swiper2 = new Swiper('#slider2', {
    // Optional parameters
    direction: 'horizontal',

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    // Default parameters

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
            spaceBetween: 30
        },
        700: {
            slidesPerView: 4,
            spaceBetween: 2
        },
        // when window width is >= 640px
        780: {
            slidesPerView: 5,
            spaceBetween: 2
        },

        1200: {
            slidesPerView: 7,
            spaceBetween: 5
        }
    }
});