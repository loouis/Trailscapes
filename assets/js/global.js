(function($){

  var $hamburgerBtn = $('.hamburger-btn'),
      $mainHeader = $('.main-header'),
      $body = $('body');


  var closeNav = function(){
    $body.removeClass('body--scroll-fix');
    $mainHeader.removeClass('main-header--visible');
  }

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

  // // BX Slider
  // $(".home-slider").bxSlider({
  //   pagerCustom: '.bx-home-pager',
  // });

  // Fancybox
  // $(".fancybox-thumb").fancybox({
	// 	prevEffect	: 'none',
	// 	nextEffect	: 'none',
	// 	helpers	: {
	// 		title	: {
	// 			type: 'outside'
	// 		},
	// 		thumbs	: {
	// 			width	: 100,
	// 			height	: 100
	// 		}
	// 	}
	// });

  // $('.test').click(function(e) {
  //   e.preventDefault();
  //   $(".fancybox-thumb").trigger("click");
  // });


})(jQuery);
