const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/light-logoz.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="img/user.png" alt=""></a>
                <a href="#"><img src="img/cart.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="index.html" class="link">home</a></li>
            <li class="link-item"><a href="index.html#women" class="link">women</a></li>
            <li class="link-item"><a href="index.html#mens" class="link">men</a></li>
            <li class="link-item"><a href="index.html#kids" class="link">Kids</a></li>
            <li class="link-item"><a href="index.html#shoes" class="link">Shoes</a></li>
            <li class="link-item"><a href="index.html#accessories" class="link">accessories</a></li>
        </ul>
    `;
}
createNav();