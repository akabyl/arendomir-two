const sidebarRules = document.querySelector('.chat-sidebar__rules');
const sidebarRulesDesc = document.querySelector('.chat-sidebar__rules-desc');
const sidebarUsers = document.querySelector('.chat-sidebar__users');
const sidebarTop = document.querySelector('.chat-sidebar__top');

// Функция для обновления высоты sidebarUsers
const updateSidebarUsersHeight = () => {
	const sidebarTopHeight = sidebarTop.offsetHeight;
	const newHeight = `calc(100vh - ${sidebarTopHeight}px)`;
	sidebarUsers.style.height = newHeight;
};

// Обработчик клика на sidebarRules
sidebarRules.onclick = () => {
	sidebarRulesDesc.classList.toggle('hide');
	sidebarRules.classList.toggle('hide');
};

// Подписываемся на событие transitionend для sidebarTop
sidebarTop.addEventListener('transitionend', () => {
	updateSidebarUsersHeight();
});

// Подписываемся на событие изменения размера окна
window.addEventListener('resize', () => {
	const headHeight = document.querySelector('.chat-content__head').offsetHeight;
	const footerHeight = document.querySelector('.chat-content__footer').offsetHeight;
	const windowHeight = window.innerHeight;
	const dynamicHeight = windowHeight - headHeight - footerHeight;
	document.querySelector('.chat-content__messages').style.maxHeight = dynamicHeight + 'px';
	updateSidebarUsersHeight();
});

// Вызываем updateSidebarUsersHeight и событие resize при загрузке страницы
window.addEventListener('load', () => {
	updateSidebarUsersHeight();
	window.dispatchEvent(new Event('resize'));
});

// document.querySelector('textarea').addEventListener('input', function (e) {
// 	e.target.style.height = 'auto';
// 	e.target.style.height = e.target.scrollHeight + 2 + 'px';
// });

const btnModal = document.querySelector('.chat-content__footer-btn');
const modalWrap = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');

btnModal.addEventListener('click', () => {
	modalWrap.classList.remove('closed');
});
closeModal.addEventListener('click', () => {
	modalWrap.classList.add('closed');
});
modalWrap.addEventListener('click', e => {
	if (e.target === modalWrap) {
		modalWrap.classList.add('closed');
	}
	// if(!e.target === )
});

const calendar = new VanillaCalendar('#modal-calendar', {
	settings: {
		lang: 'ru',
		range: {
			disablePast: true,
		},
		selection: {
			day: 'multiple-ranged',
		},
	},
});
calendar.init();
