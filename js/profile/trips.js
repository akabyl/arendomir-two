document.addEventListener('DOMContentLoaded', () => {
	const links = document.querySelectorAll('.profile-object__link[data-link]');
	const sections = document.querySelectorAll('.profile-tarrifs__bottom');

	links.forEach(link => {
		link.addEventListener('click', e => {
			e.preventDefault();
			const targetLink = link.getAttribute('data-link');

			// Удаляем класс active у всех ссылок и добавляем к текущей
			links.forEach(l => l.classList.remove('active'));
			link.classList.add('active');

			// Скрываем все секции и показываем только ту, что соответствует data-link
			sections.forEach(section => {
				if (section.classList.contains(targetLink)) {
					section.classList.remove('hidden');
				} else {
					section.classList.add('hidden');
				}
			});
		});
	});
});
