$(document).ready(function(){

  $(window).scroll(function(){
    if (this.scrollY > 0) {
      $(".header").addClass("header--scroll");
    }
    else {
      $(".header").removeClass("header--scroll");
    }
  });

  $('.burger__icon').on('click', function(){
    $(this).toggleClass('burger--active');
    $('.burger').toggleClass('burger--active');
    $(".header").toggleClass("header-burger-open");
  });

  $('.fa-search').on('click', function(){
    $('.search').addClass('search--active');
  });
  $('.search__cancel').on('click', function(){
    $('.search').removeClass('search--active');
  });
  $('.search__cancel-block').on('click', function(){
    $('.search').removeClass('search--active');
  });

  $('.burger-loupe').on('click', function(){
    $('.burger').removeClass('burger--active');
    $('.burger__icon').removeClass('burger--active');
    $(".header").removeClass("header-burger-open");
  });

  $('.fa-chevron-down').on('click', function(){
    $('html,body').stop().animate({ scrollTop: $('.about').offset().top - 20 }, 1000);
  });

  $('.tabs--item').on('click', function(){
    $('.tabs--item').removeClass('tabs--item--active');
    $(this).addClass('tabs--item--active');
  });

});
// 1229 строк