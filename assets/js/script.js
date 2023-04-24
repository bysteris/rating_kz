$(document).ready(function () {
    $('.festivals-block-items').slick({
        slidesToShow: 3,
        slideToScroll: 1,
        dots: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });

    let burgerBtn = document.querySelector(".burger-btn"),
        menu = document.querySelector(".menu"),
        menuMob = document.querySelector(".menu-mob");

    burgerBtn.addEventListener("click", () => {
        burgerBtn.classList.toggle("active");
        setTimeout(() => menu.classList.toggle("active"), 100);
        menuMob.classList.toggle("active");
    });

});