'use strict';

(function ($) {
    $('.menu__nav--el, .header__scroll, .footer__heading, .menu__title').click(function (e) {
        e.preventDefault();
        var target = $(this.hash);
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000)
    });

    var $pictures = $('.portfolio__pictures').isotope({
        itemSelector: '.portfolio__pictures--el',
        masonry: {
            columnWidth: '.grid-sizer',
            horizontalOrder: true,
            percentPosition: true,
           }
       });

    $('.portfolio__group').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $pictures.isotope({ filter: filterValue });
        $('.portfolio__group').find('.portfolio__group--active').removeClass('portfolio__group--active');
        $( this ).addClass('portfolio__group--active');
    });

    $(document).ready(function() {
        $('.team__carousel').slick({
            slidesToScroll: 1,
            slide: 'div',
            arrows: false,
            dots: true,
            dotsClass: 'slick-dots team__dots'
        });
        $('.team__slider--text').click(function next() {
            $('.team__carousel').slick('slickNext');
        });
    });

    $(document).ready(function () {
        function open() {
            $('.contact__dialog').fadeIn('fast');
            $('.contact__text').fadeOut();
            $('.contact__button').fadeOut();
        }
        function close() {
            $('.contact__dialog').fadeOut('slow');
            $('.contact__button').fadeIn();
            $('.contact__text').fadeIn();
        }
        function submit() {
            $('.contact__dialog').fadeOut('slow');
            $('.contact__button').fadeIn();
            $('.contact__text').fadeIn();
            console.log('You submitted the form.');
        }
        $('.contact__button').click(open);
        $('.contact__dialog--close').click(close);
        $('.contact__dialog--submit').click(submit);
    });

    $(document).ready(function() {
        $('.testimonials__carousel').slick({
            slidesToScroll: 1,
            slide: 'div',
            autoplay: true,
            autoplaySpeed: 4000,
            arrows: false,
            dots: true,
            dotsClass: 'slick-dots testimonials__dots'
        });
        $('.testimonials__carousel').click(function next() {
            $('.testimonials__carousel').slick('slickNext');
        });
    });

    $(document).ready(function() {
        var elMap = $('.footer__map')[0];
        var place = {lat: 49.569127, lng: 34.585632};
        var mymap = new google.maps.Map(elMap, {
            zoom: 16,
            center: place,
        });
        var marker = new google.maps.Marker({position: place, map: mymap, icon: "./img/marker.png"});
    });


})(jQuery);