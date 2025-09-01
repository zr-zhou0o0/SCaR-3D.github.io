window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

	// Coming soon handler for paper/code/arxiv
	$('.coming-soon').on('click', function(e){
		e.preventDefault();
		// Optionally you can customize message based on data-type
		let t = $(this).data('type');
		let map = {paper:'Paper', code:'Code', arxiv:'arXiv'};
		alert((map[t]||'Content') + ' coming soon');
	});

})
