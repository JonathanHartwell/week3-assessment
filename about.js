console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	//accidently made a paragraph confirmation.
	// let formConfirm = document.createElement("alert")
	// document.querySelector('form').appendChild(formConfirm)
	// formConfirm.textContent = ("Form Sent!")
	alert('Form Submitted!')
	console.log('form submit');
}

const goodDuckMsg = (evt) => {
	evt.preventDefault()
	alert('lookin cute? pass me?')
}


let form = document.querySelector('#contact');
let goodDuck = document.querySelector("#gudDuck");
goodDuck.addEventListener("mouseover", goodDuckMsg)
form.addEventListener('submit', alert('lookin cute? pass me?'));
