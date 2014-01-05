$ = jQuery;

$(function () {

  $('body').scrollspy();

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var pos = target.offset().top;
        if ($('#mainHeader').outerHeight() == 0) {
          pos -= $('.navbar-fixed-top').outerHeight();
        }
        $('html,body').animate({
          scrollTop: pos
        }, 600);

        if (!$(this).attr('data-toggle')) {
          return false;
        }
      }
    }
  });

});

