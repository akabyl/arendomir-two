document.addEventListener('DOMContentLoaded', () => {
	const cardList = document.getElementById('cardList');

	cardList.addEventListener('click', event => {
		const toggleButton = event.target.closest('.toggle-button');
		if (!toggleButton) return;

		event.preventDefault();
		const card = toggleButton.closest('.card');
		const textContent = card.querySelector('.text-content');
		const buttonSpan = toggleButton.querySelector('span');

		if (textContent.classList.contains('expanded')) {
			textContent.classList.remove('expanded');
			buttonSpan.textContent = 'Читать далее';
		} else {
			textContent.classList.add('expanded');
			buttonSpan.textContent = 'Свернуть';
		}
	});
});
