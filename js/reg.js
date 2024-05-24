// Обработчик изменения ввода файла
function handleFileInputChange(event) {
	const fileInput = event.target;
	const fileContainer = fileInput.closest('.file-input-container');
	const fileLabel = fileContainer.querySelector('.file-input-label');
	const removeButton = fileContainer.querySelector('.remove-file-btn');
	const file = fileInput.files[0];

	if (file) {
		const reader = new FileReader();
		reader.onload = function (e) {
			fileContainer.classList.add('uploaded');
			fileLabel.innerHTML = `<img src="${e.target.result}" alt="Загруженный файл"> ${file.name}`;
			removeButton.style.display = 'flex';
		};
		reader.readAsDataURL(file);
	}
}

// Обработчик удаления файла
function handleRemoveFile(event) {
	const removeButton = event.target;
	const fileContainer = removeButton.closest('.file-input-container');
	const fileInput = fileContainer.querySelector('.file-input');
	const fileLabel = fileContainer.querySelector('.file-input-label');

	// Восстанавливаем исходный текст метки
	fileLabel.textContent = fileLabel.dataset.defaultText;
	// fileLabel.querySelector('img').src = fileLabel.dataset.defaultImg;

	// Сброс значений input, удаление класса uploaded, возврат к изначальному состоянию метки и скрытие кнопки удаления
	fileInput.value = '';
	fileContainer.classList.remove('uploaded');
	fileLabel.innerHTML = `<img src="./assets/img/reg/skrepka.svg" alt="Прикрепить"> ${fileLabel.textContent
		.trim()
		.split(' ')
		.slice()
		.join(' ')}`;
	removeButton.style.display = 'none';
}

// Назначение обработчиков событий для каждого input
document.querySelectorAll('.file-input').forEach(input => {
	input.addEventListener('change', handleFileInputChange);
});

document.querySelectorAll('.remove-file-btn').forEach(button => {
	button.addEventListener('click', handleRemoveFile);
});
