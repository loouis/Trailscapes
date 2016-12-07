(function($){

  var $hamburgerBtn = $('.hamburger-btn'),
      $mainHeader = $('.main-header'),
      $body = $('body');

  // Navigation show and hide
  $hamburgerBtn.on('click', function(){
    $body.toggleClass('body--scroll-fix');
    $mainHeader.toggleClass('main-header--visible');
  });


})(jQuery);
