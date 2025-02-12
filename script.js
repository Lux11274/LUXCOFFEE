let cart = [];
let darkMode = localStorage.getItem('darkMode') === 'true' ? true : false;
const profileInfo = JSON.parse(localStorage.getItem('profile')) || { username: 'Guest' };

window.onload = function() {
    if (darkMode) {
        document.body.classList.add('dark-mode');
    }
    document.getElementById('profile-username').textContent = profileInfo.username;
};

function showHome() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('shop').style.display = 'none';
    document.getElementById('inbox').style.display = 'none';
    document.getElementById('profile').style.display = 'none';
}

function showShop() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('shop').style.display = 'block';
    document.getElementById('inbox').style.display = 'none';
    document.getElementById('profile').style.display = 'none';
}

function showInbox() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('shop').style.display = 'none';
    document.getElementById('inbox').style.display = 'block';
    document.getElementById('profile').style.display = 'none';
}

function showProfile() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('shop').style.display = 'none';
    document.getElementById('inbox').style.display = 'none';
    document.getElementById('profile').style.display = 'block';
}

function toggleDarkMode() {
    darkMode = !darkMode;
    if (darkMode) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false');
    }
}

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

function addToCart(item) {
    cart.push(item);
    updateCartButton();
}

function updateCartButton() {
    const cartButton = document.querySelector('.cart-button');
    cartButton.textContent = `Cart (${cart.length})`;
}

function viewCart() {
    alert('Items in cart: ' + cart.join(', '));
}

function searchProducts() {
    const searchQuery = document.getElementById('search-bar').value.toLowerCase();
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        const itemName = item.querySelector('p').textContent.toLowerCase();
        if (itemName.includes(searchQuery)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function editProfile() {
    const newUsername = prompt('Enter new username:', profileInfo.username);
    if (newUsername) {
        profileInfo.username = newUsername;
        localStorage.setItem('profile', JSON.stringify(profileInfo));
        document.getElementById('profile-username').textContent = profileInfo.username;
    }
}
