// Load scripts after page loads
$(document).ready(function(){
  $('.inactive').click(function(){
    return false;
  });

  $('.menu-toggle').click(function(){
    $('.body-frame').toggleClass('expanded');
  });

  $('.hype-button').click(function(){
    if ($('.hypes').is('.hyped')) {
      $('.hypes').html('629').removeClass('hyped');
      $('.hype-button').removeClass('hyped');
    } else {
      $('.hypes').html('630').addClass('hyped');
      $('.hype-button').addClass('hyped');
    }
    return false;
  });

  $('.select-unit').click(function(){
    $('.select-unit ul').removeClass('select-active');
    $(this).children('ul').addClass('select-active');
  });
});