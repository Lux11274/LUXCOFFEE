// Global variables
let cart = [];

// Function to switch between sections
function showSection(section) {
    const sections = document.querySelectorAll('.section-content');
    sections.forEach((sec) => sec.style.display = 'none');
    
    document.getElementById(section).style.display = 'block';
    const links = document.querySelectorAll('nav button');
    links.forEach(link => link.classList.remove('active'));
    document.getElementById(`${section}-link`).classList.add('active');
}

// Function for Login
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (!username || !password) {
        alert("Please enter both username and password.");
        return;
    }

    // Simulate a successful login
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('profile-username').textContent = username;
}

// Show Signup screen
function showSignup() {
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('signup-screen').style.display = 'block';
}

// Show Login screen
function showLogin() {
    document.getElementById('signup-screen').style.display = 'none';
    document.getElementById('login-screen').style.display = 'block';
}

// Function to create an account
function createAccount() {
    const newUsername = document.getElementById('new-username').value;
    const newEmail = document.getElementById('new-email').value;
    const newPassword = document.getElementById('new-password').value;

    if (!newUsername || !newEmail || !newPassword) {
        alert("Please fill in all fields.");
        return;
    }

    // Simulate account creation and go to the login screen
    alert('Account created successfully!');
    showLogin();
}

// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
}

// Check for Dark Mode preference on page load
if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Function to add item to cart
function addToCart(itemName) {
    cart.push(itemName);
    alert(`${itemName} added to cart.`);
}

// Function to view cart
function viewCart() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
    } else {
        alert("Your Cart: " + cart.join(", "));
    }
}
