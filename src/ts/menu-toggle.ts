import { animateElement } from './DOM';

export function handleMenuToggle(button: HTMLButtonElement): void {
	const wasExpanded: boolean =
		button.getAttribute('aria-expanded') && button.getAttribute('aria-expanded') === 'true' ? true : false;
	const targetId: string | null = button.getAttribute('aria-controls');
	if (!targetId) return;

	const target: HTMLElement | null = document.querySelector(`#${targetId}`);
	button.setAttribute('aria-expanded', (!wasExpanded).toString());
	button.setAttribute('aria-label', wasExpanded ? 'Open menu' : 'Close menu');

	if (!target) return;

	if (wasExpanded) {
		animateElement(
			target,
			'animation-slide-fade-up',
			() => {},
			() => {
				target.removeAttribute('data-expanded');
			}
		);
	} else {
		animateElement(
			target,
			'animation-slide-fade-down',
			() => {
				target.setAttribute('data-expanded', 'true');
			},
			() => {}
		);
	}
}
