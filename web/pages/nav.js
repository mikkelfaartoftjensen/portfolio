export default class NavPage {
    constructor() {
      this.template();
    }
  
    template() {
      document.querySelector('nav').innerHTML += /*html*/ `
        <!--<div class="nav__link--left">-->
      <a href="#home" class="nav__link">Hjem</a>
      <a href="#projects" class="nav__link">Projekter</a>
      <!--</div>-->
      <!--<a href="#home" id="nav__cta"><div class="nav__link"><img class="nav__cta__arrow" src="https://faartoft.com/images/logo3.svg" alt="faartoft.com logo"></div></a> -->

      <!--<div class="nav__link--right">-->
      <a href="#expierence" class="nav__link">Færdigheder</a>
      <a href="#contact" class="nav__link">Kontakt</a> 
      <!--</div>-->  
      `; 
    }
  } 

     
    