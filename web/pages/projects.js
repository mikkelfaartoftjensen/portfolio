export default class ProjectsPage {
    constructor() {
      this.template();
    }
  
    template() {
      document.getElementById('projects').innerHTML += /*html*/ ` 
        
      <h2 class="section__h2">Mine projekter</h2> 
      <p class="section__p">Her kan I se mine projekter - hvilke teknologier, jeg har anvendt, samt specifikke informationer omhandlende hver enkelt projekt.</p>
       <div id="projects__container"></div>  
      <div id="barhunt" class="detail-view"></div>  
      <div id="repenso" class="detail-view"></div>   
      <div id="calcul8r" class="detail-view"></div>   
      <div id="race" class="detail-view"></div>   
      `;  

      
    } 

    
  } 


  
 
  