jQuery(document).ready(function($) {
	tab = $('#nav li a');

	tab.on('click', function(event) {
		event.preventDefault();
		tab.removeClass('active');
		$(this).addClass('active');

		tab_content = $(this).attr('href');
		$('div[id$="tab-content"]').removeClass('active');
		$(tab_content).addClass('active');

	});

});


// mobile
jQuery(document).ready(function($) {

	stab = $('#menu li a');

	stab.on('click', function(e) {
		e.preventDefault();
		stab.removeClass('active');
		$(this).addClass('active');

		stab_content = $(this).attr('href');
		$('div[id$="tab-content"]').removeClass('active');
		$(stab_content).addClass('active');
});


});