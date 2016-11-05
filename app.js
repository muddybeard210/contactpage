new WOW().init();


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});

$(window).load(function(){
  if($(window).width()<600){
    $(".projectCard p").css("opacity", "1");
    $(".projectCard p").css('height', '100%');
    $(".projectCard").addClass("boxShadow");

    console.log('monkey')
  }
});

$(window).load(function(){
  if($(window).width()>600) {
    $('.projectCard').mouseenter(function(){
      $('p', this).css("opacity", "1");
      $('p', this).css("height", "100%");

      $(this).addClass("boxShadow");
      // $(this).css("margin-top", "-10px");


    });
    $('.projectCard').mouseleave(function(){
      $('p', this).css("opacity", "0");
      $('p', this).css("height", "0px");

      $(this).removeClass("boxShadow");
      // $(this).css("margin-top", "5px");


    });

  }
})
