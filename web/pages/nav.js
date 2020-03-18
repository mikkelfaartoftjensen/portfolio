export default class NavPage {
    constructor() {
      this.template();
    }
  
    template() {
      document.querySelector('nav').innerHTML += /*html*/ `
        <div class="nav__link--left">
      <a href="#projects" class="nav__link">Projects</a>
      <a href="#about" class="nav__link">About</a>
      </div>
      <a href="#home"><div id="nav__cta" class="nav__link"><img class="nav__cta__arrow" src="http://faartoft.com/images/logo2.svg" alt="icon of arrow"></div></a>  

      <div class="nav__link--right">
      <a href="#expierence" class="nav__link">Expierence</a>
      <a href="#contact" class="nav__link">Contact</a> 
      </div>
      `;
    }
  } 

     
    