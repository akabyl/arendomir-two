document.addEventListener('DOMContentLoaded', function () {
	const textarea = document.getElementById('mainSupportTextarea');

	textarea.addEventListener('focus', function () {
		this.removeAttribute('placeholder');
	});

	textarea.addEventListener('blur', function () {
		if (!this.value) {
			this.setAttribute('placeholder', 'Напишите ваш комментарий...');
		}
	});
});
