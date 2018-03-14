(function ($) {
    "use strict";
    jQuery(document).ready(function () {
        
        /*-------------------------NAVBAR---------------------------- */
        $(window).on('scroll', function () {
            if ($(".navbar").offset().top > 50) {
                $(".navbar-fixed-top").addClass("top-nav-collapse");
            } else {
                $(".navbar-fixed-top").removeClass("top-nav-collapse");
            }
        });
        $('a.page-scroll').bind('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
		
		
		/*------------------------- STELLAR ---------------------------*/
        $.stellar();
         
		
	});
	
	$(window).on('load', function() {
        /*----------------------------    PRELOADER    -------------------------------- */
        jQuery('.preloader').fadeOut(1000);
    });
	
})(jQuery);





