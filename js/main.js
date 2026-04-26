 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.carousel-car').owlCarousel({
			center: true,
			loop: true,
			autoplay: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: true,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				1000:{
					items: 3
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	var counter = function() {

		$('#section-counter, .hero-wrap, .ftco-counter').waypoint( function( direction ) {

			var $root = $(this.element);
			if ( direction !== 'down' || $root.hasClass('ftco-counter-done') ) {
				return;
			}

			var $nums = $root.find('.number');
			if ( !$nums.length ) {
				$root.addClass('ftco-counter-done');
				return;
			}

			$root.addClass('ftco-counter-done');

			var commaStep = $.animateNumber.numberStepFactories.separator(',');
			$nums.each(function(){
				var $n = $(this);
				var num = Number( $n.data('number') );
				if ( !isFinite(num) ) {
					return;
				}
				$n.animateNumber(
					{ number: num, numberStep: commaStep },
					2000
				);
			});

		} , { offset: '95%' } );

	}
	counter();


	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


	$('#book_pick_date,#book_off_date').datepicker({
	  'format': 'm/d/yyyy',
	  'autoclose': true
	});
	$('#time_pick').timepicker();



})(jQuery);

/**
 * Pastilles contact (WhatsApp, téléphone, e-mail) — bas gauche.
 * Optionnel, avant ce script : window.EIPI_CONTACT_FAB = { phone: '+33…', whatsapp: '33…', email: '…' };
 */
(function () {
	if (document.getElementById('eipi-contact-fab')) {
		return;
	}

	var cfg = window.EIPI_CONTACT_FAB || {};
	var phoneRaw = cfg.phone || '+905377724295';
	var waDigits = String(cfg.whatsapp != null ? cfg.whatsapp : phoneRaw).replace(/\D/g, '');
	var email = cfg.email || 'edoh.gabiam@expresspiecesindustrielles.com';
	var lang = (document.documentElement.getAttribute('lang') || 'fr').toLowerCase().slice(0, 2);
	var isEn = lang === 'en';

	var label = {
		region: isEn ? 'Quick contact' : 'Contact rapide',
		wa: isEn ? 'WhatsApp' : 'WhatsApp',
		tel: isEn ? 'Phone' : 'Téléphone',
		mail: isEn ? 'Email' : 'E-mail',
		toggleOpen: isEn ? 'Open contact options' : 'Ouvrir les options de contact',
		toggleClose: isEn ? 'Close' : 'Fermer'
	};

	var root = document.createElement('div');
	root.id = 'eipi-contact-fab';
	root.className = 'eipi-contact-fab';
	root.setAttribute('role', 'region');
	root.setAttribute('aria-label', label.region);

	var actions = document.createElement('div');
	actions.id = 'eipi-contact-fab-actions';
	actions.className = 'eipi-contact-fab__actions';

	var wa = document.createElement('a');
	wa.className = 'eipi-contact-fab__btn eipi-contact-fab__btn--whatsapp';
	wa.href = 'https://wa.me/' + waDigits;
	wa.target = '_blank';
	wa.rel = 'noopener noreferrer';
	wa.setAttribute('aria-label', label.wa);
	wa.innerHTML = '<span class="icon icon-whatsapp" aria-hidden="true"></span>';

	var tel = document.createElement('a');
	tel.className = 'eipi-contact-fab__btn eipi-contact-fab__btn--phone';
	tel.href = 'tel:' + String(phoneRaw).replace(/\s/g, '');
	tel.setAttribute('aria-label', label.tel);
	tel.innerHTML = '<i class="ion-ios-call" aria-hidden="true"></i>';

	var mail = document.createElement('a');
	mail.className = 'eipi-contact-fab__btn eipi-contact-fab__btn--email';
	mail.href = 'mailto:' + email;
	mail.setAttribute('aria-label', label.mail);
	mail.innerHTML = '<span class="icon icon-envelope" aria-hidden="true"></span>';

	var toggle = document.createElement('button');
	toggle.type = 'button';
	toggle.className = 'eipi-contact-fab__btn eipi-contact-fab__btn--toggle';
	toggle.setAttribute('aria-expanded', 'false');
	toggle.setAttribute('aria-controls', 'eipi-contact-fab-actions');
	toggle.setAttribute('aria-label', label.toggleOpen);
	toggle.innerHTML =
		'<span class="eipi-contact-fab__toggle-icon eipi-contact-fab__toggle-icon--open"><i class="ion-ios-chatbubbles" aria-hidden="true"></i></span>' +
		'<span class="eipi-contact-fab__toggle-icon eipi-contact-fab__toggle-icon--close"><i class="ion-ios-close" aria-hidden="true"></i></span>';

	actions.appendChild(wa);
	actions.appendChild(tel);
	actions.appendChild(mail);
	root.appendChild(actions);
	root.appendChild(toggle);
	document.body.appendChild(root);

	function setOpen(open) {
		root.classList.toggle('eipi-contact-fab--open', open);
		toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
		toggle.setAttribute('aria-label', open ? label.toggleClose : label.toggleOpen);
	}

	toggle.addEventListener('click', function () {
		setOpen(!root.classList.contains('eipi-contact-fab--open'));
	});

	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape' && root.classList.contains('eipi-contact-fab--open')) {
			setOpen(false);
			toggle.focus();
		}
	});
})();

/**
 * Force-refresh catalogue PDF URL to bypass browser/CDN cache.
 */
(function () {
	var version = '20260426-2';
	var links = document.querySelectorAll('a.eipi-catalogue');
	if (!links.length) {
		return;
	}

	links.forEach(function (link) {
		try {
			var url = new URL(link.getAttribute('href'), window.location.href);
			url.pathname = url.pathname.replace(/expresspieceCatalog(?:1)?\.pdf$/i, 'expresspieceCatalog1.pdf');
			url.searchParams.set('v', version);
			link.setAttribute('href', url.pathname + url.search);
		} catch (e) {
			// Ignore malformed URLs and keep original href.
		}
	});
})();

