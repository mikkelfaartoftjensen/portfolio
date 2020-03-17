export default class HomePage {
    constructor() {
      this.template();
    }
  
    template() {
      document.getElementById('home').innerHTML += /*html*/ `
      <div id="home__content--wrapper">
      <div class="home__content__text">
      <h1>Hello im Mikkel</h1> 
      <h2>I specialize in Front end<br>Web development</h2>
      <button class="learn-more">
    <span class="circle" aria-hidden="true"><img src="../images/icons/arrow-down.svg">
      <span class="icon arrow"></span>
    </span>
    <span class="button-text">se projekter</span>
  </button>  
      </div> 
      <div class="home__content__img"></div> 
      </div>  
      <h3 class="section__cta__text">Projects</h3> 
      `;
    } 
  } 