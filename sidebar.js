class SideBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div id="sidebar" class="sidebar">
            <button id="toggle-btn" class="toggle-btn" onclick="toggleSidebar()" style="width: 32px; height: 32px; vertical-align: left;">
                <img src="/images/icons/hamburgerIconTest1.png" alt="Home" style="width: 32px; height: 32px; vertical-align: left;">
            </button>
            <nav class="nav-menu">
            <a href="/index.html" class="nav-item">
                <span class="nav-text">Home</span>
            </a>
            <a href="/pages/aboutMe.html" class="nav-item">
                <span class="nav-text">About Me</span>
            </a>
            <a href="#" class="nav-item">
                <span class="nav-text">Messages</span>
            </a>
            <a href="#" class="nav-item">
                <span class="nav-text">Settings</span>
            </a>
            </nav>
        </div>
        `;
    }
}
customElements.define('side-bar', SideBar);

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("collapsed");
}
