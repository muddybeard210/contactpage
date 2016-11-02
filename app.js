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

$('.projectCard').mouseenter(function(){
  $('p', this).css("opacity", "1");
  $('p', this).css("height", "100%");
  // $(this).addClass("boxShadow");
  // $(this).css("margin-top", "-10px");

});
$('.projectCard').mouseleave(function(){
  $('p', this).css("opacity", "0");
  $('p', this).css("height", "0px");
  // $(this).removeClass("boxShadow");
  // $(this).css("margin", "5px");

});
