$( document ).ready(function() {

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-20
        }, 1000);
        return false;
      }
    }
  });

  $(window).scroll(function(){
    if (jQuery(this).scrollTop() > 100) {
      jQuery('.scrollup').fadeIn();
    } else {
      jQuery('.scrollup').fadeOut();
    }
  });
  // scroll-to-top animate
  $('.scrollup').click(function(){
    jQuery("html, body").animate({ scrollTop: 0 }, 600);
    return false;
  });

  $('.more').on('click', function(){
    $('.more').fadeOut();
    $(this).next().slideToggle();
  });
  $('.less').on('click', function(){
    $(this).parent().slideToggle();
    $('.more').fadeIn();
  });

});
