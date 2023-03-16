import { Splide } from '@splidejs/splide';
import '@splidejs/splide/css';

export function mountSlider(className: string = 'splide'): void {
	new Splide(`.${className}`, {
		arrows: false,
		perPage: 1,
	}).mount();
}
