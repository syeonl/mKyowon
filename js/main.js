(function () {
    $('#header .btn_open').on('click', function(e) {
        e.preventDefault();

        $('#header .dimm').show();
        $('#header .gnb_box').addClass('open');
        $('#header .btn_close').fadeIn();
        $('body').addClass('hidden');

        if ($('#header .search_box').hasClass('open')) {
            $('#header .btn_search_toggle').removeClass('on');
            $('#header .search_box').removeClass('open');
            header.removeClass('scroll');
        };
    });

    // gnb 닫기
    $('#header .btn_close, #header .dimm').on('click', function() {
        $('#header .dimm').fadeOut();
        $('#header .gnb_box').removeClass('open');
        $('#header .btn_close').fadeOut();
        $('body').removeClass('hidden');
    });

    // gnb 아코디언
    $('.gnb .depth1>li>a').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('active').parent().siblings().find('>a').removeClass('active');

        $(this).next().stop().slideToggle().parent().siblings().find('.depth2').hide();
    });

    $('#header .btn_search_toggle').on('click', function() {
        $(this).toggleClass('on');
        $('#header .search_box').toggleClass('open');
        $('body').toggleClass('hidden');

        setTimeout(function() {
            header.toggleClass('scroll');
        },0);
    });

    var mainSlider = new Swiper('.main_slider', {
        loop: true, 
        speed: 500, 
        effect: 'fade', 
        autoplay: {
            delay: 4000, 
            disableOnInteraction: false,  
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets', 
          clickable: true,
        },
    });

    var bestSlider = new Swiper('.best_slider', {
        slidesPerView: 'auto',
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: false,
        },
      });

    var freeSlider = new Swiper('.free_silder', {
        loop: true,
        speed: 500, 
        autoplay: {
            delay: 4000, 
            disableOnInteraction: false, 
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });





    // 패밀리 사이트 슬라이드토글 기능
    $('.btn_family').on('click', function() {
        $('.family .list_family').slideToggle();
    });

    // 메인 페이지 탑버튼
    var moveFlag = true;

    $('#footer .top_wrap').on('click', function() {
        if (moveFlag) {
            $(this).next().stop().animate({left:500, top:100, width:150, height:150}, 200,'easeOutBounce');
        } else {
            $(this).next().stop().animate({left:0, top:70, width:100, height:100}, 200, 'easeOutBounce');
        }
        moveFlag = !moveFlag;
    });
})();