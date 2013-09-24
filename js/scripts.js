// Load scripts after page loads
$(document).ready(function(){
  $('.inactive').click(function(){
    return false;
  });
  
  $('.menu-toggle').click(function(){
    $('.body-frame').toggleClass('expanded');
  });
});