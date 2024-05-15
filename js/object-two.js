
const swiper = new Swiper('.mySwiper', {
	loop: true,
	spaceBetween: 10,
	slidesPerView: 4,
	freeMode: true,
	watchSlidesProgress: true,
});
const swiper2 = new Swiper('.mySwiper2', {
	loop: true,
	spaceBetween: 10,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination',
	},
	thumbs: {
		swiper: swiper,
	},
});

const swiperRewiews = new Swiper('.swiper-rewiews', {
	loop: true,
	slidesPerView: 1,
	spaceBetween: 10,
	freeMode: true,
	watchSlidesProgress: true,
	navigation: {
		nextEl: '.slide-button-next',
		prevEl: '.slide-button-prev',
	},
});

window.addEventListener('DOMContentLoaded', () => {
	const container = document.querySelector('.main__wrap');
	const element = document.querySelector('#main');

	container.addEventListener('scroll', () => {
		const scrollTop = container.scrollTop;
		element.style.top = `${scrollTop}px`;
	});
});

const calendarSide = new VanillaCalendar('#calendar-side', {
	date: {
		today: new Date(),
	},
	settings: {
		lang: 'ru',
		range: {
			// disableAllDays: true,
		},
		visibility: {
			today: false,
			daysOutside: false,
		},
	},
});
calendarSide.init();

const headTitle = document.querySelector('.vanilla-calendar-header');
const paragraph = document.createElement('p');
paragraph.textContent = 'Календарь дат';
paragraph.classList.add('paragraph-c');
const firstChild = headTitle.firstChild;

headTitle.insertBefore(paragraph, firstChild);

// Выбор элемента с классом 'vanilla-calendar-content'
const calendarContent = document.querySelector('.vanilla-calendar-wrapper');

// Создание блока div для кнопок
const buttonBlock = document.createElement('div');
buttonBlock.classList.add('calendar-inner-div');
// Создание кнопки "Доступно"
const availableButton = document.createElement('div');
availableButton.textContent = 'Доступно';
// Добавление класса
availableButton.classList.add('available-button');
availableButton.classList.add('calen-button');
availableButton.classList.add('active');

// Создание кнопки "Недоступно"
const unavailableButton = document.createElement('div');
unavailableButton.textContent = 'Недоступно';
// Добавление класса
unavailableButton.classList.add('unavailable-button');
unavailableButton.classList.add('calen-button');

// Добавление кнопок в блок
buttonBlock.appendChild(availableButton);
buttonBlock.appendChild(unavailableButton);

// Добавление блока с кнопками внутрь элемента .vanilla-calendar-content
calendarContent.appendChild(buttonBlock);
