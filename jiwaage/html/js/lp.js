// JavaScript Document

$(function() {        
       
  

	var bd = $("#body");
	
		
	$(window).scroll(function () {
		
		var s = $(window).scrollTop();
		
		var sb = s + $(window).height();
		
		
		if( s > 50 ) {	
			bd.addClass('fixed');
			
			
		} else {
			bd.removeClass('fixed');
		}
		
	});



});


