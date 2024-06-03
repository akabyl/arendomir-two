document.addEventListener('DOMContentLoaded', function () {
	const objectSelects = document.querySelectorAll('.object-select');
	if (objectSelects) {
		objectSelects.forEach(select => {
			const header = select.querySelector('.object-select__header');
			const list = select.querySelector('.object-select__list');

			header.addEventListener('click', function (event) {
				event.stopPropagation(); // Предотвращаем всплытие события
				list.style.display = list.style.display === 'block' ? 'none' : 'block';
				if (list.style.display === 'block') {
					select.classList.add('active-transform');
				} else {
					select.classList.remove('active-transform');
				}
			});

			list.addEventListener('click', function (event) {
				event.stopPropagation(); // Предотвращаем всплытие события
				const selectedOption = event.target.textContent;
				header.textContent = selectedOption;
				list.style.display = 'none';
				select.classList.remove('active-transform');
			});
		});
	}

	// const items = document.querySelectorAll('.reviews-info__bottom-item');
	// items.forEach(item => {
	// 	item.addEventListener('click', () => {
	// 		const descr = item.querySelector('.reviews-info__bottom-descr');

	// 		if (descr) {
	// 			// // Скрываем все другие описания
	// 			// document.querySelectorAll('.reviews-info__bottom-descr').forEach(otherDescr => {
	// 			// 	if (otherDescr !== descr) {
	// 			// 		otherDescr.classList.remove('active');
	// 			// 	}
	// 			// });

	// 			// Переключаем текущее описание
	// 			descr.classList.toggle('active');
	// 		}
	// 	});
	// });
});

function copyToClipboard() {
	// Получаем элемент input
	const inputElement = document.getElementById('copyInput');

	// Выделяем текст внутри элемента
	inputElement.select();

	// Копируем выделенный текст в буфер обмена
	document.execCommand('copy');

	// Снятие выделения
	inputElement.setSelectionRange(0, 0);
	// Оповещение пользователя
	alert('Текст скопирован в буфер обмена!');
}

const swiper = document.querySelector('.swiper');
if (swiper) {
	const swiper = new Swiper('.swiper', {
		// If we need pagination
		pagination: {
			el: '.swiper-pagination',
		},

		// Navigation arrows
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
}

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



