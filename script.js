document.addEventListener("DOMContentLoaded", function () {
    // Login Form Handling
    const loginForm = document.querySelector("#login form");
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const username = loginForm.querySelector("input[type='text']").value;
        const password = loginForm.querySelector("input[type='password']").value;

        if (username === "admin" && password === "password") {
            alert("Login successful! Welcome, " + username + "!");
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.getAttribute("href"));
            targetSection.scrollIntoView({ behavior: "smooth" });
        });
    });

    // Contact Form Handling
    const contactForm = document.querySelector("#contact form");
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for reaching out! We will get back to you soon.");
        contactForm.reset();
    });
});