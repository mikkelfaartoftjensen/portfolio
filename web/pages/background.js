export default class BackgroundPage {
    constructor() {
      this.template();
    }
   
    template() {
      document.getElementById('inner').innerHTML += /*html*/ `
      <li class="bubble"></li> 
            <li class="bubble"></li> 
            <li class="bubble"></li>
            <li class="bubble"></li>  
            <li class="bubble"></li>   
            <li class="bubble"></li> 
            <li class="bubble"></li>  
            <li class="bubble"></li>  
            <li class="bubble"></li> 
            <li class="bubble"></li>
            <li class="bubble"></li>
            <li class="bubble"></li> 
            `;
    }
  }
 

