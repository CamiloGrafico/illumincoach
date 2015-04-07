$(document).ready(function(){

	//------- PANEL DERECHA -------
   
	$('.menu-bars').click(function(){
		$('.right-panel').toggleClass("right-panel-on");

		$('.linea-1, .linea-3').addClass("animated");

		$('.linea-1').toggleClass("rotateIn rotateIn_reverse");

		$('.linea-3').toggleClass("rotateOut rotateOut_reverse");

		$('p, .linea-2', this).toggleClass("invisible");

		$('.menu-bars span').toggleClass("red-bar");
	});	

	//------- SCROLL TO SECTION WITH MENU -------
       $(function() {
		  $('a[href*=#]:not([href=#]), a.arrow-more[href*=#]:not([href=#]), .gotop a[href*=#]:not([href=#])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html,body').animate({
		          scrollTop: target.offset().top
		        }, 1500, 'easeInOutQuint');
		        return false;
		      }
		    }
		  });
		});


	//------- VIDEO CONTAINER 100 -------
	  
	  	$(function(){ $('.video-container').css({'height':(($(window).height()))}); 
	  	$(window).resize(function(){ $('.video-container').css({'height':(($(window).height()))}); }); });

	  
	//------- WATCH VIDEO ------- 
		
		$("#watch-video").click(function() {
		  $(".video-container").fadeIn(300);
		  $('iframe#video').attr('src','//player.vimeo.com/video/113631191?autoplay=1');
		});

		$(".close-button, .video-container").click(function() {
		  $(".video-container").fadeOut(300);
		  $('iframe#video').attr('src','');
		});

	//------- SPEAKER SWITCH -------

	$( window ).resize(function() {
		reorderMiddleSlide();
	});
	reorderMiddleSlide();
	
	function reorderMiddleSlide() {
		if ($(window).width() > 768) {
			$('.speaker-switch').each(function( index ) {
				var speakerImage = $(this).find('.speaker-photo-right').detach();
				$(this).append(speakerImage);
			});
		}
		else {
			$('.speaker-switch').each(function( index ) {
				var speakerContent = $(this).find('.speaker-text').detach();
				$(this).append(speakerContent);
			});
		}
	}


	//------- MORE INFO REGISTER -------
/*	$('.agenda-session').click(function(){
		$('a', this).toggle();
		$('.breakout-sessions', this).toggle();
	});*/

});