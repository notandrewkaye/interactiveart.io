var scrollHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.nav-bar' ),
		didScroll = false,
		changeHeaderOn = 180;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 175 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			$( header ).addClass( 'scrolled' );
		}
		else {
			$( header ).removeClass( 'scrolled' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();

var sections = $('.post'),
	chapters = $('.chapter'),
	nav = $('.nav-bar'),
	sticky = $('#sticky-chapters'),
	nav_height = nav.outerHeight();
 
$(window).on('scroll', function () {
  var cur_pos = $(this).scrollTop();
 
  sections.each(function() {
    var top = $(this).offset().top - nav_height,
        bottom = top + $(this).outerHeight();
 
      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find('a').removeClass('active');
        sections.removeClass('active');
 
        $(this).addClass('active');
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      }
    });

  chapters.each(function() {
    var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();
 
      if (cur_pos >= top && cur_pos <= bottom) {
        sticky.find('a').removeClass('active');
        chapters.removeClass('active');
 		
        $(this).addClass('active');
        sticky.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
      }
    });
  });

  nav.find('a').on('click', function () {
  var $el = $(this),
  	  id = $el.attr('href');
 
  $('html, body').animate({
    scrollTop: $(id).offset().top - nav_height
  }, 500);
 
  return false;
});