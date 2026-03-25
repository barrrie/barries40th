// Password Protection Script
// IMPORTANT: Change this password before deploying!
const SITE_PASSWORD = 'enter';

const loginScreen = document.getElementById('login-screen');
const content = document.getElementById('content');
const passwordForm = document.getElementById('password-form');
const passwordInput = document.getElementById('password-input');
const errorMessage = document.getElementById('error-message');

// Check if already authenticated
function checkAuth() {
    const isAuthenticated = sessionStorage.getItem('authenticated');
    if (isAuthenticated === 'true') {
        showContent();
    }
}

function showContent() {
    loginScreen.classList.add('hidden');
    content.classList.remove('hidden');
}

function showError(message) {
    errorMessage.textContent = message;
    passwordInput.classList.add('shake');
    setTimeout(() => passwordInput.classList.remove('shake'), 500);
}

passwordForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const enteredPassword = passwordInput.value;

    if (enteredPassword === SITE_PASSWORD) {
        sessionStorage.setItem('authenticated', 'true');
        showContent();
    } else {
        showError('Incorrect password. Please try again.');
        passwordInput.value = '';
    }
});

// Check authentication on page load
checkAuth();
