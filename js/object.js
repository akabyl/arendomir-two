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

const swiper = document.querySelector('.swiper');
if (swiper) {
}
const swiper2 = new Swiper('.swiper', {
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




const form = document.querySelector('.new-object');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
	event.preventDefault(); // Предотвращаем отправку формы по умолчанию

	// Получаем данные из формы
	const formData = new FormData(form);

	// Преобразуем данные в объект JSON
	const jsonData = {};
	formData.forEach((value, key) => {
		jsonData[key] = value;
	});

	// Отправляем данные на сервер
	fetch('https://arendomir.site/php/api/rent/set/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(jsonData),
	})
		.then(response => {
			if (!response.ok) {
				throw new Error('Network response was not ok');
			}
			return response.json();
		})
		.then(data => {
			console.log('Success:', data);
			// Действия при успешной отправке данных
		})
		.catch(error => {
			console.error('Error:', error);
			// Действия при ошибке отправки данных
		});
}

// const url = 'https://arendomir.site/php/api/rent/set/';

// const data = {
// 	id_house: null, // Если объект новый, иначе указываем ID
// 	city: 'Москва',
// 	type_house: 3, // 0 - спальное место, 1 - комната, 2 - студия, 3 - квартира, 4 - дача, 5 - часть дома, 6 - дом
// 	amount_room: 2,
// 	amount_bathroom: 1,
// 	amount_bed: 3,
// 	bathroom_data: JSON.stringify([0, 0]), // Два совмещенных санузла
// 	type_ownership: 0, // 0 - собственность, 1 - долгосрочная аренда
// 	square: 45,
// 	address: 'ул. Пушкина, д. 10',
// 	appliances: JSON.stringify([2, 4]), // Кондиционер и стиральная машина
// 	renovation: 2, // 0 - требуется, 1 - эконом, 2 - евро
// 	allowed_kid: 1,
// 	allowed_pet: 0,
// 	allowed_smoke: 0,
// 	allowed_invalid: 1,
// 	allowed_single: 1,
// 	has_parking: 1,
// 	has_transfer: 0,
// 	has_insurance: 1,
// 	has_lift: 1,
// 	has_balcony: 1,
// 	has_housing_services: 1,
// 	bus_station: 1, // 0 - менее 5 минут, 1 - 5-10 минут, и т.д.
// 	beach: 3,
// 	culture: 2,
// 	mall: 1,
// 	park: 0,
// 	attraction: 4,
// 	price_daily: 1500,
// 	price_weekly: 1400,
// 	price_monthly: 1200,
// };

// fetch(url, {
// 	method: 'POST',
// 	headers: {
// 		'Content-Type': 'application/json',
// 	},
// 	body: JSON.stringify(data),
// })
// 	.then(response => response.json())
// 	.then(data => {
// 		console.log('Success:', data);
// 	})
// 	.catch(error => {
// 		console.error('Error:', error);
// 	});
