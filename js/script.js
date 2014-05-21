function centerWelcomeBox() {
  var margin = ($(window).height() - $('#welcome').height()) / 2;
  $('#welcome').css('margin-top', margin + 'px');
  $('#welcome').css('margin-bottom', margin + 'px');
}

function navbarHandler() {
  var position = $(window).scrollTop();
  var navbar = $("#navbar-fixed");
  if(position <= 0) {
    navbar.toggle();
  }
  else {
    if(!navbar.is(":visible")) {
      navbar.toggle();
    }
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
