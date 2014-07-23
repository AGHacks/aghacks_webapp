function centerWelcomeBox() {
  var margin = ($(window).height() - $('#welcome').height()) / 2;
  $('#welcome').css('margin-top', margin + 'px');
  $('#welcome').css('margin-bottom', margin + 'px');
}

function navbarHandler() {
  var position = $(window).scrollTop();
  var navbar = $("#navbar-fixed");
  if ($(document).width() > 769) {
    if (position <= 0) {
      navbar.hide();
    }
    else {
      if(!navbar.is(":visible")) {
        navbar.toggle();
      }
    }
  } else if(!navbar.is(":visible")) {
    navbar.show();
  }
}

$(document).ready(function() {
  centerWelcomeBox();
  navbarHandler();

  $(window).resize(centerWelcomeBox);
  $(window).scroll(navbarHandler);

  $('body').scrollspy({ target: '#navbar-fixed', offset: 65 });

  $(".scroll-to").on('click', function() {
    window.scrollTo(0, $($(this).attr("href")).offset().top - 61);
    return false;
  });  
});