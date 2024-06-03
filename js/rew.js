document.addEventListener('DOMContentLoaded', function () {
	const starGroups = document.querySelectorAll('.reviews-info__bottom-rate');

	starGroups.forEach(starGroup => {
		let currentRating = -1;

		const stars = starGroup.querySelectorAll('.star');

		stars.forEach(star => {
			star.addEventListener('mouseover', () => {
				const index = parseInt(star.getAttribute('data-index'));
				fillStars(starGroup, index);
			});

			star.addEventListener('mouseleave', () => {
				fillStars(starGroup, currentRating);
			});

			star.addEventListener('click', () => {
				currentRating = parseInt(star.getAttribute('data-index'));
				fillStars(starGroup, currentRating);
			});
		});

		function fillStars(group, index) {
			const stars = group.querySelectorAll('.star');
			stars.forEach((star, i) => {
				if (i <= index) {
					star.querySelector('path').setAttribute('fill', '#F2C94C');
				} else {
					star.querySelector('path').setAttribute('fill', '#E0E0E0');
				}
			});
		}
	});
});

document.addEventListener('input', function (event) {
	if (event.target.classList.contains('main-reviews__textarea')) {
		const count = event.target.value.length;
		const counter = event.target.nextElementSibling.querySelector('span');
		counter.textContent = count;
	}
});

// document.addEventListener('focus', function (event) {
// 	if (event.target.classList.contains('main-reviews__textarea')) {
// 		event.target.removeAttribute('placeholder');
// 	}
// });

document.addEventListener('DOMContentLoaded', function () {
	const textarea = document.querySelectorAll('.main-reviews__textarea');
	textarea.forEach(item =>
		item.addEventListener('focus', function () {
			this.removeAttribute('placeholder');
		})
	);

	textarea.forEach(item =>
		item.addEventListener('blur', function () {
			if (!this.value) {
				this.setAttribute('placeholder', 'Напишите ваш комментарий...');
			}
		})
	);
});

function toggleReviews(type) {
	const miniReviews = document.querySelector('.reviews-info__mini');
	const fullReviews = document.querySelector('.reviews-info__full');

	if (type === 'mini') {
		miniReviews.style.display = 'flex';
		fullReviews.style.display = 'none';
	} else {
		miniReviews.style.display = 'none';
		fullReviews.style.display = 'flex';
	}
}
