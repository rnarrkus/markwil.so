$(document).ready(function(){
  setTimeout(function() {
    $('.overlay-content').removeClass('offset');
  }, 10);
  setTimeout(function() {
    $('.overlay').addClass('fade');
  }, 1200);
  setTimeout(function() {
    $('.overlay-content').addClass('slideUp')
  }, 1200);
  setTimeout(function() {
    $('.overlay').hide()
  }, 2100);
  setTimeout(function() {
    $('section').addClass('fadeUp')
  }, 1400);
});