/*===================================
Author       : Bestwebcreator.
Template Name: Cryptocash – ICO, Cryptocurrency Website & ICO Landing Page HTML + Dashboard Template
Version      : 1.8
===================================*/

(function($) {
	'use strict';
	
	/*===================================*
	01. LOADING JS
	/*===================================*/
	$(window).on('load', function() {
		var preLoder = $(".loader-wrapper");
		preLoder.delay(700).fadeOut(500);
		$('body').addClass('loaded');
	});

	/*===================================*
	02. SMOOTH SCROLLING JS
	*===================================*/
	// Select all links with hashes
    $('a.page-scroll').on('click', function(event) {
        // On-page links
        if ( location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname ) {
          // Figure out element to scroll to
          var target = $(this.hash),
              speed= $(this).data("speed") || 800;
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top - 60
            }, speed);
          }
        }
    });
	
	/*===================================*
	03. MENU JS
	*===================================*/
	//Main navigation scroll spy for shadow
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

	    if (scroll >= 80) {
	        $('header').addClass('nav-fixed');
	    } else {
	        $('header').removeClass('nav-fixed');
	    }

	});
	
	//Show Hide dropdown-menu Main navigation 
	$( document ).ready( function () {
		$( '.dropdown-menu a.dropdown-toggler' ).on( 'click', function ( e ) {
			var $el = $( this );
			var $parent = $( this ).offsetParent( ".dropdown-menu" );
			if ( !$( this ).next().hasClass( 'show' ) ) {
				$( this ).parents( '.dropdown-menu' ).first().find( '.show' ).removeClass( "show" );
			}
			var $subMenu = $( this ).next( ".dropdown-menu" );
			$subMenu.toggleClass( 'show' );
			
			$( this ).parent( "li" ).toggleClass( 'show' );
	
			$( this ).parents( 'li.nav-item.dropdown.show' ).on( 'hidden.bs.dropdown', function ( e ) {
				$( '.dropdown-menu .show' ).removeClass( "show" );
			} );
			
			return false;
		} );
	} );
	
	
	//Hide Navbar Dropdown After Click On Links
	var navBar = $(".header_wrap");
	var navbarLinks = navBar.find(".navbar-collapse ul li a.nav_item");

    $.each( navbarLinks, function( i, val ) {

      var navbarLink = $(this);

        navbarLink.on('click', function () {
          navBar.find(".navbar-collapse").collapse('hide');
		  $("header").removeClass("active");
        });

    });
	
	//Main navigation Active Class Add Remove
	$('.navbar-toggler').on('click', function() {
		$("header").toggleClass("active");
	});	
	$(document).on("ready", function () {
	if ($(window).width() > 991) {
		$("header").removeClass("active");
	}
	$(window).on("resize", function () {
	if ($(window).width() > 991) {
			$("header").removeClass("active");
		}
	})
	})
	
	//Language Select Dropdown
	$(document).ready(function() {
	$("#lng_select,#doc_select").msDropdown();
	})
   
	/*===================================*
	04. BACKGROUND ANIMATION JS
	*===================================*/
	var $particles_js = $('#banner_bg_effect');
	if ($particles_js.length > 0) {
		particlesJS('banner_bg_effect',
			// Update your personal code.
			{
				"particles": {
					"number": {
						"value": 80,
						"density": {
							"enable": true,
							"value_area": 800
						}
					},
					"color": {
						"value": "#ffffff"
					},
					"shape": {
						"type": "circle",
						"stroke": {
							"width": 0,
							"color": "#ffffff"
						},
						"polygon": {
							"nb_sides": 5
						},
						"image": {
							"src": "img/github.svg",
							"width": 100,
							"height": 100
						}
					},
					"opacity": {
						"value": 0.4,
						"random": false,
						"anim": {
							"enable": false,
							"speed": 1,
							"opacity_min": 0.5,
							"sync": false
						}
					},
					"size": {
						"value": 3,
						"random": true,
						"anim": {
							"enable": false,
							"speed": 20,
							"size_min": 0.2,
							"sync": false
						}
					},
					"line_linked": {
						"enable": true,
						"distance": 150,
						"color": "#ffffff",
						"opacity": 0.20,
						"width": 1
					},
					"move": {
						"enable": true,
						"speed": 6,
						"direction": "none",
						"random": false,
						"straight": false,
						"out_mode": "out",
						"bounce": false,
						"attract": {
							"enable": false,
							"rotateX": 600,
							"rotateY": 1200
						}
					}
				},
				"interactivity": {
					"detect_on": "canvas",
					"events": {
						"onhover": {
							"enable": true,
							"mode": "repulse"
						},
						"onclick": {
							"enable": true,
							"mode": "push"
						},
						"resize": true
					},
					"modes": {
						"grab": {
							"distance": 400,
							"line_linked": {
								"opacity": 1
							}
						},
						"bubble": {
							"distance": 400,
							"size": 20,
							"duration": 2,
							"opacity": 1,
							"speed": 3
						},
						"repulse": {
							"distance": 200,
							"duration": 0.4
						},
						"push": {
							"particles_nb": 4
						},
						"remove": {
							"particles_nb": 2
						}
					}
				},
				"retina_detect": true
			}
	
		);
	}
	
  	/*===================================*
	05. ROAD MAP SLIDER JS
	*===================================*/
	 $('.roadmap').owlCarousel({
	     loop: false,
	     margin: 30,
		 autoHeight: true,
	     nav: true,
	     navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
	     responsive: {
	         0: {
	             items: 1,
	         },
	         380: {
	             items: 2,
	         },
	         600: {
	             items: 3,
				 margin: 15
	         },
	         1000: {
	             items: 5,
	         },
	         1199: {
	             items: 6
	         }
	     }
	 });
	 
	 $('.roadmap_wrap').owlCarousel({
	     loop: false,
	     margin: 30,
		 autoHeight: true,
	     nav: true,
	     navText: ['<i class="ion-arrow-left-c"></i>', '<i class="ion-arrow-right-c"></i>'],
	     responsive: {
	         0: {
	             items: 1,
	         },
	         380: {
	             items: 2,
	         },
	         767: {
	             items: 3,
	         },
	         1000: {
	             items: 4,
	         },
	         1199: {
	             items: 5
	         }
	     }
	 });
	 $('.timeline').owlCarousel({
	     loop: false,
	     margin: 30,
		 autoHeight: true,
	     nav: true,
	     navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
	     responsive: {
	         0: {
	             items: 1,
	         },
	         380: {
	             items: 2,
	         },
	         767: {
	             items: 3,
	         },
	         1000: {
	             items: 4,
	         },
	         1199: {
	             items: 5
	         }
	     }
	 });
	 
	/*===================================*
	06. BLOG SLIDER S
	*===================================*/
	 $('.blog_slider').owlCarousel({
	     loop: false,
	     margin: 30,
	     nav: false,
		 dots: true,
	     responsive: {
	         0: {
	             items: 1,
	         },
	         380: {
	             items: 1,
	         },
	         768: {
	             items: 2,
	         },
	         1000: {
	             items: 3,
	         },
	         1199: {
	             items: 3
	         }
	     }
	 });
	 
	/*===================================*
	07. TESTIMONIAL SLIDER JS
	*===================================*/	 
	$('.testimonial_slider').owlCarousel({
	     loop: false,
	     margin: 30,
	     nav: false,
		 dots: true,
		 autoHeight:true,
	     responsive: {
	         0: {
	             items: 1,
	         },
	         768: {
	             items: 1,
	         },
	         1000: {
	             items: 2,
	         },
	         1199: {
	             items: 2
	         }
	     }
	 });
	 
	/*===================================*
     08.COUNTDOWN JS
    *===================================*/
    $('.tk_countdown_time').each(function() {
        var endTime = $(this).data('time');
        $(this).countdown(endTime, function(tm) {
            $(this).html(tm.strftime('<span class="counter_box"><span id="days" class="tk_counter days">%D </span><span class="tk_text">Days</span></span><span class="counter_box"><span id="hours" class="tk_counter hours">%H</span><span class="tk_text">Hours</span></span><span class="counter_box"><span id="mins" class="tk_counter minutes">%M</span><span class="tk_text">Minutes</span></span><span class="counter_box"><span id="secs" class="tk_counter seconds">%S</span><span class="tk_text">Seconds</span></span>'));
        });
    });
	
	/*===================================*
	 09. VIDEO JS
	*===================================*/
	$('.video').magnificPopup({
		type: 'iframe'
	});

	/*===================================*
	10. CONTACT FORM JS
	*===================================*/
	$("#submitButton").on("click", function(event) {
	    event.preventDefault();
	    var mydata = $("form").serialize();
	    $.ajax({
	        type: "POST",
	        dataType: "json",
	        url: "contact.php",
	        data: mydata,
	        success: function(data) {
	            if (data.type === "error") {
	                $("#alert-msg").removeClass("alert-msg-success");
	                $("#alert-msg").addClass("alert-msg-failure");
	            } else {
	                $("#alert-msg").addClass("alert-msg-success");
	                $("#alert-msg").removeClass("alert-msg-failure");
	                $("#first-name").val("Enter Name");
	                $("#email").val("Enter Email");
	                $("#subject").val("Enter Subject");
	                $("#description").val("Enter Message");

	            }
	            $("#alert-msg").html(data.msg);
	            $("#alert-msg").show();
	        },
	        error: function(xhr, textStatus) {
	            alert(textStatus);
	        }
	    });
	});
	
	/*===================================*
	11. SCROLLUP JS
	*===================================*/
	$(window).scroll(function() {
		if ($(this).scrollTop() > 150) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
	
	$(".scrollup").on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 600);
		return false;
	});
	
	/*===================================*
	12. POPUP JS
	*===================================*/
	$('.content-popup').magnificPopup({
		type: 'inline',
		preloader: true,
		mainClass: 'mfp-zoom'
	});
	
	/*===================================*
	13. ANIMATION JS
	*===================================*/
	$(function() {
	
		function ckScrollInit(items, trigger) {
			items.each(function() {
				var ckElement = $(this),
					AnimationClass = ckElement.attr('data-animation'),
					AnimationDelay = ckElement.attr('data-animation-delay');
	
				ckElement.css({
					'-webkit-animation-delay': AnimationDelay,
					'-moz-animation-delay': AnimationDelay,
					'animation-delay': AnimationDelay,
					opacity: 0
				});
	
				var ckTrigger = (trigger) ? trigger : ckElement;
	
				ckTrigger.waypoint(function() {
					ckElement.addClass("animated").css("opacity", "1");
					ckElement.addClass('animated').addClass(AnimationClass);
				}, {
					triggerOnce: true,
					offset: '90%'
				});
			});
		}
	
		ckScrollInit($('.animation'));
		ckScrollInit($('.staggered-animation'), $('.staggered-animation-wrap'));
	
	});
	
	/*===================================*
	14. START COUNTUP JS
	*===================================*/
	jQuery(document).ready(function($) {
		jQuery('.counter').counterUp({
			delay: 10,
			time: 1000
		});
	});

	/*===================================*
	15. COLOR SWITCHHER JS
	*===================================*/
	$(".color-switch").on("click", "button", function() {
	
		$(this).addClass("active").siblings().removeClass("active");
		$("#layoutstyle").attr("href", "assets/color/" + $(this).val() + ".css");
	
	});
	
	$(".icon").on("click", function() {
		$(".color-switch").toggleClass("switch-active");
		$(this).toggleClass("switch-active");
	});
	
	$(function() {
		$('#doc_select').change(function(){
			$('.document_tab .tab-pane').removeClass('show active');
			$('#' + $(this).val()).addClass('show active');
		});
	});
	
	google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
                var mapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 12,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(40.7020, -73.9220), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                   styles:[{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"}]}]};

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var mapElement = document.getElementById('map');

                // Create the Google Map using our element and options defined above
                var map = new google.maps.Map(mapElement, mapOptions);

                // Let's also add a marker while we're at it
                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(40.7020, -73.9220),
                    map: map,
					icon: "assets/images/marker.png",
                    title: 'Snazzy!'
                });
            }	
			
					
})(jQuery);

