console.log('signup page is connected');
const form = document.getElementById('userForm');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	const formElements = Array.from(form.elements);

    const body = {};


	formElements.forEach((el) => {
        body[el.name] = el.value;
        console.log(body);
    });

    formElements.reduce((acc, curr) => {

    }, {})

	console.log(formElements);
    /*
{
  "id": 0,
  "username": "string",
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "password": "string",
  "phone": "string",
  "userStatus": 0
}
    */
});
