import { handleMenuToggle } from './ts/menu-toggle';
import { mountSlider } from './ts/slider';
import './style.css';
import { initializeObservers } from './ts/intersectionObserver';

/* types */
export type Animations = 'animation-slide-fade-down' | 'animation-slide-fade-up' | 'animation-fade-pop-up';

/* elements */
const pageNavigationButton: HTMLButtonElement = document.querySelector('#page-navigation-toggle')!;

/* event handlers */
pageNavigationButton.addEventListener('click', (e: Event) => {
	handleMenuToggle(e.target as HTMLButtonElement);
});

/* other */
mountSlider();
initializeObservers();
