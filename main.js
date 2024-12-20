const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', (e) => {
	navLinks.classList.toggle('open');

	const isOpen = navLinks.classList.contains('open');
	menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line');
});

navLinks.addEventListener('click', (e) => {
	navLinks.classList.remove('open');
	menuBtnIcon.setAttribute('class', 'ri-menu-line');
});

const scrollRevealOption = {
	origin: 'bottom',
	distance: '50px',
	duration: 1000,
};

const searchEvent = () => {
	const query = document.getElementById('search-input').value.toLowerCase();
	const events = [
		{ name: 'EEA 2024 Himatro', className: 'destination__card_EEA' },
		{ name: 'Portela 2024 FT Unila', className: 'ddestination__card_Portela' },
		{ name: 'Reformarch Architectur 2024', className: 'destination_card_Reformarch' },
		{ name: 'Lampung Night Fair', className: 'destination_card_LNF' },
		{ name: 'Ecophoria', className: 'destination_card_Ecophoria' },
		{ name: 'Juicy Luicy Lampung Night Fair', className: 'destination_card_JL' },
	];
	console.log(query);

	const result = events.find((event) => event.name.toLowerCase().includes(query));

	if (result) {
		// Cari elemen berdasarkan class dan scroll ke sana
		const targetElement = document.querySelector(`.${result.className}`);
		if (targetElement) {
			targetElement.scrollIntoView({ behavior: 'smooth' });
		}
	} else {
		alert('Event tidak ditemukan!');
	}
};

document.querySelector('.search-icon').addEventListener('click', searchEvent);
document.querySelector('#search-input').addEventListener('keypress', searchEvent);

ScrollReveal().reveal('.header__image img', {
	...scrollRevealOption,
	origin: 'right',
});
ScrollReveal().reveal('.header__content p', {
	...scrollRevealOption,
	delay: 500,
});
ScrollReveal().reveal('.header__content h1', {
	...scrollRevealOption,
	delay: 1000,
});
ScrollReveal().reveal('.header__btns', {
	...scrollRevealOption,
	delay: 1500,
});

ScrollReveal().reveal('.destination__card', {
	...scrollRevealOption,
	interval: 500,
});

ScrollReveal().reveal('.showcase__image img', {
	...scrollRevealOption,
	origin: 'left',
});
ScrollReveal().reveal('.showcase__content h4', {
	...scrollRevealOption,
	delay: 500,
});
ScrollReveal().reveal('.showcase__content p', {
	...scrollRevealOption,
	delay: 1000,
});
ScrollReveal().reveal('.showcase__btn', {
	...scrollRevealOption,
	delay: 1500,
});

ScrollReveal().reveal('.banner__card', {
	...scrollRevealOption,
	interval: 500,
});

ScrollReveal().reveal('.discover__card', {
	...scrollRevealOption,
	interval: 500,
});

const swiper = new Swiper('.swiper', {
	slidesPerView: 3,
	spaceBetween: 20,
	loop: true,
});
