$(document).ready(function(){

	
	$('.hamburger').click(function(){
		
		var $this = $( this );
		
		if ($this.hasClass('is-active')){
			$('.fsmenu, .logo').removeClass('is-active');
			$('.fsmenu, .logo').addClass('close-menu');
		} else{
			$('.fsmenu, .logo').removeClass('close-menu');
			$('.fsmenu, .logo').addClass('is-active');
		};
		$this.toggleClass('is-active');
	});
	
	$( ".fsmenu--list-element" ).hover(
		function() {
			$( this ).addClass('open');
			$( this ).removeClass('is-closing');
		}, function() {
			$( this ).removeClass('open');
			$( this ).addClass('is-closing');
		}
	);
				
});