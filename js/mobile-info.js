const backButton = document.querySelectorAll('.mobile-info__back');
const mobileInfo = document.querySelectorAll('.mobile-info');
const headItems = document.querySelectorAll('.head__item');
const body = document.querySelector('body');
const mobileInfoOne = document.getElementById('mobile-info__one');
const mobileInfoTwo = document.getElementById('mobile-info__two');

headItems.forEach(e =>
	e.addEventListener('click', function show(event) {
		if (event.currentTarget.classList.contains('head__item-fillter')) {
			mobileInfoOne.classList.add('active');
			body.classList.add('no_scroll');
		}
		if (event.currentTarget.classList.contains('head__item-category')) {
			mobileInfoTwo.classList.add('active');
			body.classList.add('no_scroll');
		}
	})
);

backButton.forEach(button =>
	button.addEventListener('click', () => {
		mobileInfo.forEach(item => (item.classList.contains('active') ? item.classList.remove('active') : null));
		body.classList.remove('no_scroll');
	})
);

