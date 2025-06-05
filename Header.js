class Header extends HTMLElement {
  constructor() {
    super();
  }

  //green: #3F8A8C
  //blue: #0C5679
  //dark blue: #0B0835
  //red: #E5340B
  //orange: #F28A0F
  //yellow: #FFE7BD

  
  connectedCallback() {
    this.innerHTML = `
      <style>
        #navHeader {
            position: sticky;
            margin:0;
            padding:0;
            top:0;
            left:0; 
            background-color: #0B0835;
            display:flex;
            align-items: center;
            justify-content: space-between;

        }

        .tealColor {
            color: #FFE7BD;
        }

        #navBar {
            height:100%;
            width:100%;
            display:flex;
            justify-content: space-around;
            align-items: center;
            
        }

        a {
            color: white;
            margin:0;
            font-size:1.5vw;
            text-decoration: none;
            margin-right:0.25vw;
        }

        a:hover{
            color: #E5340B;
            border-bottom: 1px solid #E5340B;
        }

      </style>

      <header id="navHeader">
        <p class="tealColor" style="font-size:3vw; margin: 1vh; width:100%;">Timo Loher's Website</p>
        <nav id="navBar">
            <a class="tealColor" href="index.html">Home</a></li>
            <a class="tealColor" href="about.html">About</a></li>
            <a class="tealColor" href="work.html">Work</a></li>
            <a class="tealColor" href="contact.html">Contact</a></li>
        </nav>
      </header>
          

    `;
  }
}

customElements.define('header-component', Header);
