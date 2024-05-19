const welcome = document.getElementById('welcome');
const userId = document.getElementById('user_id');
const signinForm = document.getElementById('signin__form');
const signinBtn = document.getElementById('signin__btn');
const logout = document.getElementById('logout__btn');
const title = document.querySelector('.title');

if (localStorage.id !== null) {
	onLogged();
}

signinForm.addEventListener('submit', (event) => {
	event.preventDefault();

	const xhr = new XMLHttpRequest();

	xhr.addEventListener('readystatechange', () => {
		if (xhr.readyState === xhr.DONE) {
			let response = JSON.parse(xhr.response);
			if (response.success === true) {
				localStorage.id = response.user_id;
				onLogged();
			} else {
				alert('Неверный логин/пароль');
			}
		}
	})

	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
	const formData = new FormData(document.getElementById('signin__form'));

	xhr.send(formData);

})

logout.addEventListener('click', () => {
	signinForm.reset();
	title.textContent = 'Вход';
	signinBtn.style.display = 'block';
	logout.style.display = 'none';
	welcome.classList.remove('welcome_active');
	localStorage.id = '';
})

function onLogged() {
	signinBtn.style.display = 'none';
	logout.style.display = 'block';
	userId.textContent = localStorage.id;
	title.textContent = `Вы авторизованы ${localStorage.id}`;
	welcome.classList.add('welcome_active');
}