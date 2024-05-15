document.addEventListener('DOMContentLoaded', function () {
	const objectSelects = document.querySelectorAll('.object-select');

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
});

const swiper = new Swiper('.swiper', {
	// Navigation arrows
	navigation: {
		nextEl: '.swiper__next',
		prevEl: '.swiper__prev',
	},
	breakpoints: {
		600: {
			slidesPerView: 1,
			spaceBetween: 10,
		},
		830: {
			slidesPerView: 2,
			spaceBetween: 10,
		},
		1360: {
			slidesPerView: 3,
			spaceBetween: 10,
		},
		1500: {
			slidesPerView: 4,
			spaceBetween: 10,
		},
	},
});

const calendar = new VanillaCalendar('#calendar', {
	date: {
		today: new Date('2024-06-07T00:00:00.000Z'),
	},
	settings: {
		lang: 'ru',
		range: {
			// disablePast: true,
			// disableGaps: true,
		},
	},
});
calendar.init();
const calendar2 = new VanillaCalendar('#calendar2', {
	date: {
		today: new Date('2024-07-07T00:00:00.000Z'),
	},
	settings: {
		lang: 'ru',
		range: {
			// disablePast: true,
			// disableGaps: true,
		},
	},
});
calendar2.init();
const calendar3 = new VanillaCalendar('#calendar3', {
	date: {
		today: new Date('2024-08-07T00:00:00.000Z'),
	},
	settings: {

		lang: 'ru',
		range: {
			// disablePast: true,
			// disableGaps: true,
		},
	},
});
calendar3.init();
const calendar4 = new VanillaCalendar('#calendar4', {
	date: {
		today: new Date('2024-09-07T00:00:00.000Z'),
	},
	settings: {

		lang: 'ru',
		range: {
			// disablePast: true,
			// disableGaps: true,
		},
	},
});
calendar4.init();
const calendar5 = new VanillaCalendar('#calendar5', {
	date: {
		today: new Date('2024-10-07T00:00:00.000Z'),
	},
	settings: {

		lang: 'ru',
		range: {
			// disablePast: true,
			// disableGaps: true,
		},
	},
});
calendar5.init();

const calendar6 = new VanillaCalendar('#calendar6', {
	date: {
		today: new Date('2024-11-07T00:00:00.000Z'),
	},
	settings: {

		lang: 'ru',
		range: {
			// disablePast: true,
			// disableGaps: true,
		},
	},
});
calendar6.init();

const calendar7 = new VanillaCalendar('#calendar7', {
	date: {
		today: new Date('2024-12-07T00:00:00.000Z'),
	},
	settings: {

		lang: 'ru',
		range: {
			// disablePast: true,
			// disableGaps: true,
		},
	},
});
calendar7.init();
