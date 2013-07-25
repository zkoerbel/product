var settings = {

	// Images
		images: {
			
			/*
				Your slides, in this format:

				'path/to/image.jpg': 'position',

				where 'position' is the vertical/horizontal position (eg. 'center center', 'top left').
				Use wide/short images for best results.
			*/
			
			'images/slide01.jpg': 'top center',
			'images/slide02.jpg': 'center center',
			'images/slide03.jpg': 'bottom center',
			'images/slide04.jpg': 'center center'

		},

	// Transition speed (in ms)
		speed: 3000,

	// Transition delay (in ms)
		delay: 4500

};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

skel.init(
	{
		preset: 'standard',
		prefix: 'css/style',
		resetCSS: true,
		boxModel: 'border',
		breakpoints: {
			'desktop': {
				grid: {
					gutters: 50
				}
			}
		}
	},
	{
		panels: {
			preset: 'standard'
		}
	}
);

$(function() {

	var slider;

	// Dropdowns
		$('#nav > ul').dropotron({
			offsetY: -50,
			mode: 'fade',
			noOpenerFade: true,
			detach: false,
			alignment: 'center'
		});

	// Slider
		if ((slider = $('#slider')).length > 0)
		{
			var src = settings.images,
				speed = settings.speed,
				delay = settings.delay,
				zIndex = 2, a = [], i, n, x;
			
			// Configure target
				slider.css('position', 'relative');
				
			// Build slides and add them to target
				for (i in src)
				{
					if (!src.hasOwnProperty(i)){
						continue;
					}
				
					x = $('<div></div>');
					
					x
						.css('position', 'absolute')
						.css('z-index', zIndex - 1)
						.css('left', 0)
						.css('top', 0)
						.css('width', '100%')
						.css('height', '100%')
						.css('background-position', src[i])
						.css('background-image', 'url("' + i + '")')
						.css('background-size', 'cover')
						.hide();
						
					x.appendTo(slider);
					
					a.push(x);
				}

			// Loop
				i = 0;

				a[i].fadeIn(speed, function() {
					window.setInterval(function() {
						
						n = i + 1;
						if (n >= a.length){
							n = 0;
						}
						
						a[n]
							.css('z-index', zIndex)
							.fadeIn(speed, function() {
								a[i].hide();
								a[n].css('z-index', zIndex - 1);
								i = n;
							});

					}, delay);
				});
		}

});