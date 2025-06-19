class Header extends HTMLElement {
  constructor() {
    super();
  }

  
  connectedCallback() {
    this.innerHTML = `
      <header id="navHeader">
        <p class=yellowColor style="font-size:3vw; margin: 1vh; width:100%;">Timo Loher</p>
        <nav id="navBar">
            <a class=yellowColor href="index.html">Home</a></li>
            <a class=yellowColor href="projects.html">Projekte</a></li>
            <a class=yellowColor href="about.html">Über Mich</a></li>
        </nav>
      </header>
          
    `;
  }
}

customElements.define('header-component', Header);
