import './style.css';

const pageNavigationButton: HTMLButtonElement = document.querySelector('#page-navigation-toggle')!;

pageNavigationButton.addEventListener('click', (e: Event) => {
	handleMenuToggle(e.target as HTMLButtonElement);
});

function handleMenuToggle(button: HTMLButtonElement): void {
	const wasExpanded: boolean =
		button.getAttribute('aria-expanded') && button.getAttribute('aria-expanded') === 'true' ? true : false;
	const targetId: string | null = button.getAttribute('aria-controls');
	if (!targetId) return;

	const target: HTMLElement | null = document.querySelector(`#${targetId}`);
	button.setAttribute('aria-expanded', (!wasExpanded).toString());
	button.setAttribute('aria-label', wasExpanded ? 'Open menu' : 'Close menu');
	target?.toggleAttribute('data-expanded');
}
