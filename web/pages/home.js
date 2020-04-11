export default class HomePage {
    constructor() {
      this.template();
    }
  
    template() {
      document.getElementById('home').innerHTML += /*html*/ `
      <div id="home__content--wrapper">
      <div class="home__content__text">
      <h1>Hej, jeg er Mikkel</h1> 
      <h2>Jeg specialiserer i Front end<br>Web udvikling</h2>
      <a href="#projects"><button class="learn-more">
    <span class="circle" aria-hidden="true"><img src="https://faartoft.com/images/icons/arrow-down.svg">
      <span class="icon arrow"></span>
    </span> 
    <span class="button--text">se projekter</span>
  </button></a>     
      </div> 
      <div class="home__content__img"></div> 
      </div>   
      <!--<h3 class="section__cta__text">Projects</h3> 
      -->`;
    } 
  } 