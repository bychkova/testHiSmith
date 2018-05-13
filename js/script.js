$(document).ready(function(){
	$(document).on('click','.tablet-header-menu', function(){
		$('.hidden-menu').css('visibility', 'visible');
	});
	$(document).on('click','.close-menu', function(){
		$('.hidden-menu').css('visibility', 'hidden');
	})
})