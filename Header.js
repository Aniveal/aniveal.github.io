class Header extends HTMLElement {
  constructor() {
    super();
  }

  
  connectedCallback() {
    this.innerHTML = `
      <header id="navHeader">
        <p class=yellowColor style="font-size:3vw; margin: 1vh; width:100%;">Timo Loher's Website</p>
        <nav id="navBar">
            <a class=yellowColor href="index.html">Home</a></li>
            <a class=yellowColor href="about.html">About</a></li>
            <a class=yellowColor href="projects.html">Projekte</a></li>
            <a class=yellowColor href="contact.html">Contact</a></li>
        </nav>
      </header>
          

    `;
  }
}

customElements.define('header-component', Header);
