<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lux Coffee</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
</head>
<body>
    <div id="login-screen">
        <h2>Login to Lux Coffee</h2>
        <input type="text" id="username" placeholder="Username" required>
        <input type="password" id="password" placeholder="Password" required>
        <button onclick="login()">Login</button>
    </div>

    <div id="main-content" style="display: none;">
        <header>
            <h1>Lux Coffee</h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#shop">Shop</a></li>
                    <li><a href="#inbox">Inbox</a></li>
                    <li><a href="#profile">Profile</a></li>
                    <li><button id="dark-mode-toggle">Dark Mode</button></li>
                </ul>
            </nav>
        </header>
        
        <section id="home">
            <h2>Welcome to Lux Coffee</h2>
            <p>Enjoy the finest coffee experience crafted with passion.</p>
            <img src="coffee1.jpg" alt="Premium Coffee" class="hero-image">
        </section>
        
        <section id="shop">
            <h2>Shop</h2>
            <div class="gallery">
                <div class="item">
                    <img src="1.jpg" alt="Caffè Macchiato">
                    <p>Caffè Macchiato</p>
                    <button class="buy-button" onclick="addToCart('Caffè Macchiato')">Buy Now</button>
                </div>
                <div class="item">
                    <img src="2.jpg" alt="Cappuccino">
                    <p>Cappuccino</p>
                    <button class="buy-button" onclick="addToCart('Cappuccino')">Buy Now</button>
                </div>
                <div class="item">
                    <img src="3.jpg" alt="Flat White">
                    <p>Flat White</p>
                    <button class="buy-button" onclick="addToCart('Flat White')">Buy Now</button>
                </div>
                <div class="item">
                    <img src="4.jpg" alt="Latte">
                    <p>Latte</p>
                    <button class="buy-button" onclick="addToCart('Latte')">Buy Now</button>
                </div>
                <div class="item">
                    <img src="5.jpg" alt="Americano">
                    <p>Americano</p>
                    <button class="buy-button" onclick="addToCart('Americano')">Buy Now</button>
                </div>
            </div>
            <button class="cart-button" onclick="viewCart()"><i class="fas fa-shopping-cart"></i> Cart</button>
            <button class="add-button"><i class="fas fa-plus"></i> Add Item</button>
        </section>
        
        <section id="inbox">
            <h2>Inbox</h2>
            <p>No new messages.</p>
        </section>
        
        <section id="profile">
            <h2>Your Profile</h2>
            <p>Welcome, User!</p>
            <button class="edit-profile">Edit Profile</button>
        </section>
        
        <footer>
            <p>&copy; 2025 Lux Coffee. All Rights Reserved.</p>
        </footer>
    </div>
    
    <script src="script.js"></script>
</body>
</html>
