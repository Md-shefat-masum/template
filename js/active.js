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
        
        
        /*------------------------- counter ---------------------------*/
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

		
        /*------------------------- VIDEO POPUP -------------------------*/
        $('.videopopup').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            iframe: {
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                    }
                }
            }
        });
		

		/*---------------------- PORTFOLIO POP SCRIPT ---------------------*/
        $('.gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            removalDelay: 500,
            callbacks: {
                beforeOpen: function () {
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            },
            closeOnContentClick: true,
            midClick: true,
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0, 1]
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
            }
        });
		

		/*---------------------- TESTIMONIAL SLICK CAROUSEL ---------------------*/
        $('.testimonial-slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            dots: true,
            autoplay: true,
            speed: 400,
            pauseOnHover: false,
            dotsClass: 'testimonial_dots'
        });


        /*-------------------------  BRAND SLICK CAROUSEL -------------------------*/
        $('.brand_carousel').slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 5,
            arrows: false,
            autoplay: true,
            speed: 10010,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        slidesToShow: 3
                    }
        },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        slidesToShow: 2
                    }
        }
        ]
        });
		
		
		/*-------------------------  SKILL BAR -------------------------*/
		var skillsDiv = $('#skills');
		$(window).on('scroll', function () {
			var winT = $(window).scrollTop(),
				winH = $(window).height(),
				skillsT = skillsDiv.offset().top;
			if (winT + winH > skillsT) {
				$('.skillbar').each(function () {
					$(this).find('.skillbar-bar').animate({
						width: $(this).attr('data-percent')
					}, 6000);
				});
			}
		});   
        
		
	});

	
	
	$(window).on('load', function() {
        /*----------------------------    PRELOADER    -------------------------------- */
        jQuery('.preloader').fadeOut(1000);

        /*---------------------------- PORTFOLIO ISOTOP FILTER ---------------------------- */
        var $gallery = $(".gallery").isotope({});
        $(".filtering").on("click", "span", function () {
            var filterValue = $(this).attr("data-filter");
            $gallery.isotope({
                filter: filterValue
            });
            $(this).addClass("active").siblings().removeClass("active")
        })
    });
	
})(jQuery);


/*---------------------------- Contact Form---------------------------- */
$("#contactForm").validator().on("submit", function (event) {
    if (event.isDefaultPrevented()) {
        // handle the invalid form...
        formError();
        submitMSG(false, "Did you fill in the form properly?");
    } else {
        // everything looks good!
        event.preventDefault();
        submitForm();
    }
});


function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var phone = $("#phone").val();
    var message = $("#message").val();

    $.ajax({
        type: "POST",
        url: "php/form-process.php",
        data: "name=" + name + "&email=" + email + "&subject=" + subject + "&phone=" + phone + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else {
                formError();
                submitMSG(false,text);
            }
        }
    });
}

function formSuccess(){
    $("#contactForm")[0].reset();
    submitMSG(true, "Message Submitted!")
}

function formError(){
    $("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
        $(this).removeClass();
    });
}

function submitMSG(valid, msg){
    if(valid){
        var msgClasses = "alert alert-danger ion-close";
    } else {
        var msgClasses = "alert alert-success ion-checkmark";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}

