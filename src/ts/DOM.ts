import { Animations } from '../main';

const DEFAULT_ANIMATION: Animations = 'animation-slide-fade-down';

export function animateElement(
	element: HTMLElement,
	animation: Animations = DEFAULT_ANIMATION,
	before: () => void = () => {},
	after: () => void = () => {}
): void {
	before();
	element.classList.add(animation);

	const animationEndListener = () => {
		element.classList.remove(animation);
		after();
		element.removeEventListener('animationend', animationEndListener);
	};

	element.addEventListener('animationend', animationEndListener);
}
