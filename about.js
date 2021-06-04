console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	alert( 'Form has been submitted!')
}


let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

let img = document.querySelector("img")
img.addEventListener("mouseover", function() {
	alert('You are cute!');
});
  