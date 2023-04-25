import { animateElement } from './DOM';

const headingsObserver: IntersectionObserver = new IntersectionObserver(headingObserverCallback);
const projectCardsObserver: IntersectionObserver = new IntersectionObserver(projectCardsObserverCallback);

function headingObserverCallback(entries: IntersectionObserverEntry[], observer: IntersectionObserver): void {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			animateElement(entry.target as HTMLElement, 'animation-slide-fade-down');
			observer.unobserve(entry.target);
		}
	});
}

function projectCardsObserverCallback(entries: IntersectionObserverEntry[], observer: IntersectionObserver): void {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			animateElement(entry.target as HTMLElement, 'animation-fade-pop-up');
			observer.unobserve(entry.target);
		}
	});
}

export function initializeObservers(): void {
	document.querySelectorAll('h2').forEach(heading => headingsObserver.observe(heading));
	document.querySelectorAll('.project-card').forEach(card => projectCardsObserver.observe(card));
}
