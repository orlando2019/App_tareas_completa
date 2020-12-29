const sign_in_btn = document.querySelector('#sign-in-btn1');
const sign_up_btn = document.querySelector('#sign-up-btn1');
const container = document.querySelector('.container1');

sign_up_btn.addEventListener('click', () => {
	container.classList.add('sign-up-mode');
});

sign_in_btn.addEventListener('click', () => {
	container.classList.remove('sign-up-mode');
});
