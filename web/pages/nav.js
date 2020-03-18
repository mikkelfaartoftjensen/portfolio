export default class NavPage {
    constructor() {
      this.template();
    }
  
    template() {
      document.querySelector('nav').innerHTML += /*html*/ `
        <div class="nav__link--left">
      <a href="#projects" class="nav__link">Projects</a>
      <a href="#" class="nav__link">About</a>
      </div>
      <div id="nav__cta"><img class="nav__cta__arrow" src="../images/icons/css3.png" alt="icon of arrow"></div>  

      <div class="nav__link--right">
      <a href="#" class="nav__link">Expierence</a>
      <a href="#" class="nav__link">Contact</a> 
      </div>
      `;
    }
  } 

     
    