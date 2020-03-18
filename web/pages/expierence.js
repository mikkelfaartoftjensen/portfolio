export default class ExpierencePage {
    constructor() {
      this.template();
    }
  
    template() {
      document.getElementById('expierence').innerHTML += /*html*/ ` 

      <h2 class="section__h2">My expierence</h2> 
      <p class="section__p">I have a variety of skills. I speak a couple of programming languages such as HTML CSS and JavaScript. I also know extensions of these. Furthermore I focus on the buety of UX and UI</p> 
     
      <div id="expierence__developer" class="expierence__containers">
      <aside class="expierence__containers__text">
       
      </aside>
      <div class="expierence__containers__list">
      
      </div>
      </div>
      `;
    } 
  } 