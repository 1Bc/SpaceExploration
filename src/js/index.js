class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="site-footer">
                <div class="footer-content">
                    <p>Contact us at: space@exploration.com</p>
                    <p>&copy; 2024 Space Exploration</p>
                </div>
            </footer>
        `
    }
}

customElements.define('my-footer', MyFooter);

class MyNavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="navbar">
              <div class="logo"></div>
            </div>
        `
    }
}

customElements.define('my-navbar', MyNavBar);
