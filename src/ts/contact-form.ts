const contactForm: HTMLFormElement = document.querySelector('.contact-form')!;
const submitBtn: HTMLButtonElement = contactForm?.querySelector('button[type="submit"]')!;
const nameInput: HTMLInputElement = contactForm?.querySelector('input#name')!;
const emailInput: HTMLInputElement = contactForm?.querySelector('input#email')!;
const messageInput: HTMLTextAreaElement = contactForm?.querySelector('textarea#message')!;

const EMAIL_REGEX =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

submitBtn?.addEventListener('click', (e: Event) => {
	e.preventDefault();
	handleFormSubmit();
});
nameInput.addEventListener('focusout', (e: Event) => validateName(e.target as HTMLInputElement));
nameInput.addEventListener('focusin', (e: Event) => removeError(e.target as HTMLInputElement));

emailInput.addEventListener('focusout', (e: Event) => validateEmail(e.target as HTMLInputElement));
emailInput.addEventListener('focusin', (e: Event) => removeError(e.target as HTMLInputElement));

messageInput.addEventListener('focusout', (e: Event) => validateMessage(e.target as HTMLTextAreaElement));
messageInput.addEventListener('focusin', (e: Event) => removeError(e.target as HTMLTextAreaElement));

function handleFormSubmit(): void {
	const isValidName: boolean = validateName(nameInput);
	const isValidEmail: boolean = validateEmail(emailInput);
	const isValidMessage: boolean = validateMessage(messageInput);

	if (!isValidName || !isValidEmail || !isValidMessage) return;

	clearInputs();
	displaySuccessMessage(contactForm);
}

function validateName(input: HTMLInputElement): boolean {
	if (input.value === '') return displayError(input, "Can't be empty");
	else return removeError(input);
}

function validateEmail(input: HTMLInputElement): boolean {
	if (input.value === '') return displayError(input, "Can't be empty");
	else if (!EMAIL_REGEX.test(input.value)) return displayError(input, 'Enter valid email address');
	else return removeError(input);
}

function validateMessage(input: HTMLTextAreaElement): boolean {
	if (input.value === '') return displayError(input, "Can't be empty");
	else return removeError(input);
}

function displayError(input: HTMLElement, message: string = ''): boolean {
	const inputGroup: HTMLElement | null = input.closest('.input-group');
	if (!inputGroup) return false;

	inputGroup.setAttribute('data-error', 'true');

	const errorElement: HTMLElement | null = inputGroup.querySelector('.input-error[role="alert"]');
	if (!errorElement) return false;

	errorElement.innerText = message;
	return false;
}

function removeError(input: HTMLElement): boolean {
	const inputGroup: HTMLElement | null = input.closest('.input-group');
	if (!inputGroup) return true;

	inputGroup.removeAttribute('data-error');

	const errorElement: HTMLElement | null = inputGroup.querySelector('.input-error[role="alert"]');
	if (!errorElement) return true;

	errorElement.innerText = '';
	return true;
}

function clearInputs(): void {
	nameInput.value = '';
	emailInput.value = '';
	messageInput.value = '';
}

function displaySuccessMessage(element: HTMLElement): HTMLElement {
	const successMessage: HTMLParagraphElement = document.createElement('p');
	successMessage.classList.add('success-message');
	successMessage.innerText = 'Message sent successfully';
	element.appendChild(successMessage);
	return successMessage;
}

export {};
