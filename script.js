// Global variables to track login status
let darkMode = localStorage.getItem('darkMode') === 'true' ? true : false;
const profileInfo = JSON.parse(localStorage.getItem('profile')) || { username: 'Guest' };

window.onload = function() {
    // Check dark mode and display profile
    if (darkMode) {
        document.body.classList.add('dark-mode');
    }
    document.getElementById('profile-username').textContent = profileInfo.username;
};

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Fetch stored credentials from localStorage
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (!username || !password) {
        document.getElementById('login-error-message').textContent = "Both fields are required!";
        document.getElementById('login-error-message').style.display = 'block';
        return;
    }

    if (username === storedUsername && password === storedPassword) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        document.getElementById('login-error-message').textContent = "Invalid credentials!";
        document.getElementById('login-error-message').style.display = 'block';
    }
}

function createAccount() {
    const newUsername = document.getElementById('new-username').value;
    const newPassword = document.getElementById('new-password').value;

    if (!newUsername || !newPassword) {
        document.getElementById('signup-error-message').textContent = "Both fields are required!";
        document.getElementById('signup-error-message').style.display = 'block';
        return;
    }

    // Store credentials in localStorage
    localStorage.setItem('username', newUsername);
    localStorage.setItem('password', newPassword);

    // Simulate account creation
    alert('Account created successfully!');
    showLogin();
}

function showSignup() {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('signup-screen').style.display = 'block';
}

function showLogin() {
    document.getElementById('signup-screen').style.display = 'none';
    document.getElementById('login-screen').style.display = 'block';
}
