document.addEventListener('DOMContentLoaded', function () {
	const activeLink = document.querySelector('.profile-object__link[data-link="active"]');
	const archiveLink = document.querySelector('.profile-object__link[data-link="archive"]');
	const activeTarrifs = document.querySelector('.profile-tarrifs__bottom:not(.archive)');
	const archiveTarrifs = document.querySelector('.profile-tarrifs__bottom.archive');

	// При клике на ссылку "Архив"
	archiveLink.addEventListener('click', function (event) {
		event.preventDefault();
		activeTarrifs.style.display = 'none'; // Скрываем блок с активными тарифами
		archiveTarrifs.style.display = 'block'; // Показываем блок с архивными тарифами
		activeLink.classList.remove('active'); // Убираем класс активности у ссылки "Действующие"
		archiveLink.classList.add('active'); // Добавляем класс активности к ссылке "Архив"
	});

	// При клике на ссылку "Действующие"
	activeLink.addEventListener('click', function (event) {
		event.preventDefault();
		archiveTarrifs.style.display = 'none'; // Скрываем блок с архивными тарифами
		activeTarrifs.style.display = 'block'; // Показываем блок с активными тарифами
		archiveLink.classList.remove('active'); // Убираем класс активности у ссылки "Архив"
		activeLink.classList.add('active'); // Добавляем класс активности к ссылке "Действующие"
	});
});
