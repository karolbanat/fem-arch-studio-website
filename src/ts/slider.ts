import { Splide } from '@splidejs/splide';
import '@splidejs/splide/css';

export function mountSlider(className: string = 'splide'): void {
	const splide = new Splide(`.${className}`, {
		arrows: false,
		perPage: 1,
		mediaQuery: 'max',
		classes: {
			pagination: 'splide__pagination slider__pagination',
			page: 'splide__pagination__page slider__page',
		},
		breakpoints: {
			992: {
				pagination: false,
			},
		},
	});

	splide.on('pagination:mounted', function (data) {
		data.items.forEach(item => {
			item.button.textContent = String(item.page + 1);
		});
	});

	splide.mount();
}
