const form = document.querySelector('.sign-up-form form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

// Add an event listener to the form
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the input values
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  // Validate the input values
  if (name === '') {
    alert('Please enter your name');
    return;
  }

  if (email === '') {
    alert('Please enter your email address');
    return;
  }

  if (!validateEmail(email)) {
    alert('Please enter a valid email address');
    return;
  }

  if (password === '') {
    alert('Please enter a password');
    return;
  }

  if (password.length < 8) {
    alert('Password must be at least 8 characters long');
    return;
  }

  if (confirmPassword === '') {
    alert('Please confirm your password');
    return;
  }

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  // Create a new user object
  const user = {
    name,
    email,
    password,
  };

// JavaScript
function googleSignUp() {
  const authUrl = '(link unavailable)';
  const clientId = 'YOUR_GOOGLE_CLIENT_ID';
  const redirectUri = 'YOUR_REDIRECT_URI';
  const scope = 'profile email';
  const url = `${authUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;
  window.location.href = url;
}

function facebookSignUp() {
  const authUrl = '(link unavailable)';
  const clientId = 'YOUR_FACEBOOK_CLIENT_ID';
  const redirectUri = 'YOUR_REDIRECT_URI';
  const scope = 'email';
  const url = `${authUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;
  window.location.href = url;
}

function instagramSignUp() {
  const authUrl = '(link unavailable)';
  const clientId = 'YOUR_INSTAGRAM_CLIENT_ID';
  const redirectUri = 'YOUR_REDIRECT_URI';
  const scope = 'basic';
  const url = `${authUrl}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&response_type=code`;
  window.location.href = url;
}

  // Send a request to the server to create a new user
  fetch('/api/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Error creating user: ${response.status} ${response.statusText}`);
      }
    })
    .then((data) => {
      console.log(data);
      // Redirect the user to the login page
      window.location.href = '/login';
    })
    .catch((error) => {
      console.error(error);
      alert('Error creating user');
    });
});

// Email validation function
function validateEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}