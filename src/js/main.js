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



});


const tabs = document.querySelector(".tabs__content");
const tabButton = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".content");

tabs.onclick = e => {
    const id = e.target.dataset.id;
    if (id) {
        tabButton.forEach(btn => {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");

        contents.forEach(content => {
            content.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
}


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