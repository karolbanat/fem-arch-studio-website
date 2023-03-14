import './style.css';
import { handleMenuToggle } from './ts/menu-toggle';

/* types */
export type Animations = 'animation-slide-fade-down' | 'animation-slide-fade-up';

/* elements */
const pageNavigationButton: HTMLButtonElement = document.querySelector('#page-navigation-toggle')!;

/* event handlers */
pageNavigationButton.addEventListener('click', (e: Event) => {
	handleMenuToggle(e.target as HTMLButtonElement);
});
