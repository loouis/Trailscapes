(function($){

  var $hamburgerBtn = $('.hamburger-btn'),
      $mainHeader = $('.main-header'),
      $body = $('body'),
      $bxPager = $('#bx-pager a');


  var closeNav = function(){
    $body.removeClass('body--scroll-fix');
    $mainHeader.removeClass('main-header--visible');
  }

  //fitvids
  $(".slider-container__video").fitVids();

  // Navigation show and hide
  $hamburgerBtn.on('click', function(){
    $body.toggleClass('body--scroll-fix');
    $mainHeader.toggleClass('main-header--visible');
  });

  // Close nav using escape key
	$(document).keyup(function(e) {
	  if (e.keyCode === 27) {
	    closeNav();
	  }
	});



  // Skrollr init
  if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
    // BX Slider
    $(".home-slider").bxSlider({
      pagerCustom: '.bx-home-pager',
      controls: false
    });
  }

  // Magnific Popup
  var win = $(window),
      w,
      currRs;

    $('.openBoxButton').magnificPopup({
      type: 'ajax',
      closeOnBgClick: false,
      callbacks: {
        close: function() {
          // destroy the slider to avoid memory leaks
          // if(this.content) {
          //   this.content.find('.royalSlider').data('royalSlider').destroy();
          // }

          // if(this.content) {
          //   this.content.find('.bxslider').destroySlider();
          // }

          // var slider = $('.bxslider').bxSlider();
          // slider = $('.bxslider').bxSlider();
          // slider.destroySlider();

          // slider.destroySlider();

        }
      }
      // closeOnBgClick: false;
    });

  $bxPager.on('click', function(e){
    e.preventDefault();
  })




})(jQuery);
