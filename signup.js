console.log('signup page is connected');
const form = document.getElementById('userForm');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const formElements = Array.from(form.elements);
	const body = {};
	formElements.forEach((el) => {
		if (el.name) {
			body[el.name] = el.value;
		}
	});
	body.id = 0;
	fetch('https://petstore.swagger.io/v2/user', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(body),
	})
		.then((res) => {
			console.log(res.json());
		})
		.catch((err) => console.error(err));
	console.log(JSON.stringify(body));
});
