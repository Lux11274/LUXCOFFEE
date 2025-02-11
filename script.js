document.addEventListener("DOMContentLoaded", function () {
    // Login Form Handling with Modal
    const loginForm = document.querySelector("#login form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            
            const username = loginForm.querySelector("input[type='text']").value;
            const password = loginForm.querySelector("input[type='password']").value;
            const loginMessage = document.querySelector("#login-message");

            if (username === "admin" && password === "password") {
                loginMessage.textContent = "Login successful! Welcome, " + username + "!";
                loginMessage.style.color = "green";
            } else {
                loginMessage.textContent = "Invalid credentials. Please try again.";
                loginMessage.style.color = "red";
            }
        });
    }

    // Animated Smooth Scrolling for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.getAttribute("href"));
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    // Contact Form Handling with Confirmation Message
    const contactForm = document.querySelector("#contact form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();
            document.querySelector("#contact-message").textContent = "Thank you for reaching out! We will get back to you soon.";
            contactForm.reset();
        });
    }

    // Toggle Mobile Menu with Smooth Animation
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
    if (menuToggle && navMenu) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

    // Dark Mode Toggle
    const darkModeToggle = document.querySelector("#dark-mode-toggle");
    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
        });
    }

    // Product Showcase Animation
    const productItems = document.querySelectorAll(".product");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.5 });
    
    productItems.forEach(item => observer.observe(item));

    // Simple Cart System
    const cart = [];
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function () {
            const productName = this.dataset.name;
            cart.push(productName);
            alert(`${productName} added to cart!`);
        });
    });

    // Ensure Images Are Loaded Properly
    const imageContainer = document.querySelector("#gallery");
    if (imageContainer) {
        const imageNames = ["coffee1.jpg", "coffee2.jpg", "coffee3.jpg", "coffee4.jpg", "coffee5.jpg", "coffee6.jpg"];
        imageNames.forEach(img => {
            const imgElement = document.createElement("img");
            imgElement.src = img;
            imgElement.alt = "Coffee Image";
            imgElement.classList.add("gallery-image");
            imageContainer.appendChild(imgElement);
        });
    }
});
