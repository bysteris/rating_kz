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

    // TABS
    const tabs = document.querySelectorAll('.tabs-item');
    const tabsContent = document.querySelectorAll('.catalog-items');

    if (tabsContent.length > 0 || tabs.length > 0) {

        function hideTabContent() {
            tabsContent.forEach(item => {
                item.classList.remove('active');
            });

            tabs.forEach(item => {
                item.classList.remove('active');
            });
        }

        function showTabContent(i = 0) {
            tabsContent[i].classList.add('active');
            tabs[i].classList.add('active');
        }

        hideTabContent();
        showTabContent();

        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                hideTabContent();
                showTabContent(index);
            });
        });
    }

});