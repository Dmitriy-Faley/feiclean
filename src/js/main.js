//import Swiper from 'swiper';

$(document).ready(function () {

    $('.menu-btn').on('click', function (e) {
        e.preventDefault;
        $(this).toggleClass('menu-btn_active');

        var $btn = $(".text-btn");
        var text = $btn.text();
        var label = $btn.data('label');
        $btn.text(label).data('label', text);

        $(this).toggleClass("active");
        $(".overlay").toggleClass("open");
        // this line ▼ prevents content scroll-behind
        $("body").toggleClass("locked");
    });


    var modal1 = $('.modal-overlay-1, .modal-1');
    var modal2 = $('.modal-overlay-2, .modal-2');

    $('.btn-modal-1').click(function () {
        modal1.addClass('active');
        $("body").addClass("locked");
    });

    $('.btn-modal-2').click(function () {
        modal2.addClass('active');
        $("body").addClass("locked");
    });

    $('.close-modal-1').click(function () {
        modal1.removeClass('active');
        $("body").removeClass("locked");
    });
    $('.close-modal-2').click(function () {
        modal2.removeClass('active');
        $("body").removeClass("locked");
    });


    $('.modal-overlay-1').click(function (e) {
        var container = $(".modal-overlay-1");
        if (container.has(e.target).length === 0) {
            modal1.removeClass('active');
            $("body").removeClass("locked");
        }
    });

    $('.modal-overlay-2').click(function (e) {
        var container2 = $(".modal-overlay-2");
        if (container2.has(e.target).length === 0) {
            modal2.removeClass('active');
            $("body").removeClass("locked");
        }
    });

    $(document).on('keydown', function (e) {
        if (e.keyCode == 27) {
            modal1.removeClass('active');
            $("body").removeClass("locked");
        }

        if (e.keyCode == 27) {
            modal2.removeClass('active');
            $("body").removeClass("locked");
        }

    });

    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        loopFillGroupWithBlank: true,
        //cssMode: true,
        //mousewheel: true,
        //keyboard: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        speed: 800,
        autoplay: {
            delay: 4500,
            disableOnInteraction: false,
        },
        breakpoints: {
            500: {
                direction: "vertical",
            },
            480: {
                direction: "horizontal",
            }
        }
    });


    var swiper = new Swiper(".clients__slider", {
        slidesPerView: 3,
        //spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        speed: 800,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {

            960: {
                //setWrapperSize:true,
                slidesPerView: 3,
            },
            580: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            }
        }
    });


    var swiper = new Swiper(".our-advantage__slider", {
        //cssMode: true,
        slidesPerView: 4,
        //spaceBetween: 5,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },

        breakpoints: {
            1200: {
                speed: 800,
                autoplay: {
                    delay: 4500,
                    disableOnInteraction: false,
                },
                slidesPerView: 4,
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 1,
            },
            500: {
                slidesPerView: 2,
                slidesPerGroup: 1,
            },
            320: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            }
        }
    });

    var swiper = new Swiper(".certificates__slider", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: ".swiper-pagination",
            type: "fraction",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


    $('#button-more').click(function () {
        $(".catalog .catalog__cards .catalog__cards--item").toggleClass('active_cards');
        $(".catalog__equipment .catalog__cards .catalog__cards--item").toggleClass('active_cards');
        $(".services .services__cards .services__cards--item").toggleClass('active_cards');

        $(this).addClass('hidden');
    });

    $('#button-more__spare-1').click(function () {
        $('.spare-parts .lift .spare-parts__content--item').toggleClass('active_cards');
        $(this).addClass('hidden');
    });

    $('#button-more__spare-2').click(function () {
        $('.spare-parts .eskalator .spare-parts__content--item').toggleClass('active_cards');
        $(this).addClass('hidden');
    })


    $('.btn-add-1').on('click', function () {
        $('form .form-input input.hidden').removeClass('hidden');
        $(this).addClass('hidden');
        $('.btn-add-2').removeClass('hidden');
    });

    $('.btn-add-2').on('click', function () {
        $('form .form-input input.hidden_2').removeClass('hidden_2');
        $(this).addClass('hidden');
    });



});



// Проверяем, можно ли использовать Webp формат
function canUseWebp() {
    // Создаем элемент canvas
    let elem = document.createElement('canvas');
    // Приводим элемент к булеву типу
    if (!!(elem.getContext && elem.getContext('2d'))) {
        // Создаем изображение в формате webp, возвращаем индекс искомого элемента и сразу же проверяем его
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }
    // Иначе Webp не используем
    return false;
}

window.onload = function () {
    // Получаем все элементы с дата-атрибутом data-bg
    let images = document.querySelectorAll('[data-bg]');
    // Проходимся по каждому
    for (let i = 0; i < images.length; i++) {
        // Получаем значение каждого дата-атрибута
        let image = images[i].getAttribute('data-bg');
        // Каждому найденному элементу задаем свойство background-image с изображение формата jpg
        images[i].style.backgroundImage = 'url(' + image + ')';
    }

    // Проверяем, является ли браузер посетителя сайта Firefox и получаем его версию
    let isitFirefox = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
    let firefoxVer = isitFirefox ? parseInt(isitFirefox[1]) : 0;

    // Если есть поддержка Webp или браузер Firefox версии больше или равно 65
    if (canUseWebp() || firefoxVer >= 65) {
        // Делаем все то же самое что и для jpg, но уже для изображений формата Webp
        let imagesWebp = document.querySelectorAll('[data-bg-webp]');
        for (let i = 0; i < imagesWebp.length; i++) {
            let imageWebp = imagesWebp[i].getAttribute('data-bg-webp');
            imagesWebp[i].style.backgroundImage = 'url(' + imageWebp + ')';
        }
    }
};