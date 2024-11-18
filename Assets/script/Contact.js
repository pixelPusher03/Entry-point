// JavaScript
const form = document.querySelector('.contact-form form');
const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const message = document.querySelector('#message').value;

  if (name === '' || email === '' || message === '') {
    alert('Please fill out all fields');
    return;
  }

  const formData = {
    name,
    email,
    message,
  };

  fetch('/api/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert('Message sent successfully!');
    })
    .catch((error) => {
      console.error(error);
      alert('Error sending message');
    });
});