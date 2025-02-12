// Form Validation
function validateForm() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username == "" || password == "") {
        alert("All fields are required!");
        return false;
    }
    return true;
}

// Login and Signup logic
function login() {
    if (validateForm()) {
        document.getElementById('login-screen').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    }
}

function createAccount() {
    let newUsername = document.getElementById("new-username").value;
    let newPassword = document.getElementById("new-password").value;
    if (newUsername == "" || newPassword == "") {
        alert("All fields are required!");
        return;
    }
    alert("Account created!");
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

// Star Ratings
document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', (e) => {
        let rating = Array.from(e.target.parentElement.children).indexOf(e.target) + 1;
        alert(`You rated this item ${rating} stars!`);
    });
});

// Search Functionality
document.getElementById('search-bar').addEventListener('input', function(e) {
    let searchTerm = e.target.value.toLowerCase();
    let items = document.querySelectorAll('.item');
    items.forEach(item => {
        let name = item.querySelector('p').textContent.toLowerCase();
        if (name.includes(searchTerm)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
});

// Dark Mode Toggle
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Cart Persistence
const cart = [];

function addToCart(item) {
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert("Item added to cart!");
}

// Notification System
function showNotification(message) {
    let notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerText = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}
