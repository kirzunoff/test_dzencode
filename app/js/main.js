$(function(){	
	
	$("#sticky_menu").on("click","a", function (event) {
		 event.preventDefault();
		 var id  = $(this).attr('href'),
			 top = $(id).offset().top-100;
		 $('body,html').animate({scrollTop: top}, 1500);
	});
	
	$(".about_carouser").owlCarousel({
		items: 1,
		itemsDesktop: [1199,1],
		itemsDesktopSmall: [979,1],
		itemsTablet: [768,1],
		navigation: true,
		pagination: false,
		navigationText: false,
	 });
	
	$("#trainers_carousel").owlCarousel({
	  	items: 1,
		itemsDesktop: [1199,1],
		itemsDesktopSmall: [979,1],
		itemsTablet: [768,1],
		navigation: true,
		pagination: true,
		navigationText: false,
	});
	
	$('.menu_btn').click(function(){
        $('#sticky_menu ul').slideToggle();
    });
	
	$('.price_btn_basic').hover(
    function(){
        $('.block_basic').css('background-color','#5363db');
    },
    function(){
        $('.block_basic').css('background-color','#5b6ceb');
    });
	
	$('.price_btn_pro').hover(
    function(){
        $('.block_pro').css('background-color','#5363db');
    },
    function(){
        $('.block_pro').css('background-color','#5b6ceb');
    });
	
	$('.price_btn_premium').hover(
    function(){
        $('.block_premium').css('background-color','#5363db');
    },
    function(){
        $('.block_premium').css('background-color','#5b6ceb');
    });
	
});