export default class ObjectPage {
    constructor() {
      this.template();
    }
  
    template() {
        document.querySelector("#projects__container").innerHTML += /*html*/ `
        <li class="project">
        <div class="project--content" onclick="return true">
          <div class="poster" style="background-image: url('${repenso.background}');">
          <div class="poster--gradient"><h2>${repenso.title}</h2></div> 
          </div>
          <div class="info">
            <header>
              <h1>${repenso.title}</h1> 
            </header>
            <p>  
              ${repenso.desc}
            </p>
            <div class="project__button--container">
            <button class="learn-more">    
        <span class="circle" aria-hidden="true"><img src="../images/icons/arrow-down.svg">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">se projektet</span>
       </button>  
       </div> 
          </div>
        </div>
       </li>
        `;  
          
        
         /* barhunt */
         document.querySelector("#projects__container").innerHTML += /*html*/ `
         <li class="project">
         <div class="project--content" onclick="return true">
           <div class="poster" style="background-image: url('${barhunt.background}');">
           <div class="poster--gradient"><h2>${barhunt.title}</h2></div> 
           </div>
           <div class="info">
             <header>
               <h1>${barhunt.title}</h1> 
             </header>
             <p>
               ${barhunt.desc}
             </p>
             <div class="project__button--container">
             <button class="learn-more" id="btn"> 
         <span class="circle" aria-hidden="true"><img src="../images/icons/arrow-down.svg">
           <span class="icon arrow"></span>
         </span>
         <span class="button-text">se projektet</span>
        </button>  
        </div> 
           </div>
         </div>
        </li>
         `; 
       
         /* calcul8r */
         document.querySelector("#projects__container").innerHTML += /*html*/ `
         <li class="project">
         <div class="project--content" onclick="return true">
           <div class="poster" style="background-image: url('${calcul8r.background}');">
           <div class="poster--gradient"><h2>${calcul8r.title}</h2></div> 
           </div>
           <div class="info">
             <header>
               <h1>${calcul8r.title}</h1> 
             </header>
             <p>
               ${calcul8r.desc}
             </p>
             <div class="project__button--container">
             <button class="learn-more">
         <span class="circle" aria-hidden="true"><img src="../images/icons/arrow-down.svg">
           <span class="icon arrow"></span>
         </span>
         <span class="button-text">se projektet</span>
        </button>  
        </div> 
           </div>
         </div>
        </li>
         `; 
          
       
           /* carlsberg race */
           document.querySelector("#projects__container").innerHTML += /*html*/ `
           <li class="project">
           <div class="project--content" onclick="return true">
             <div class="poster" style="background-image: url('${race.background}');">
             <div class="poster--gradient"><h2>${race.title}</h2></div> 
             </div>
             <div class="info">
               <header>
                 <h1>${race.title}</h1> 
               </header>
               <p>
                 ${race.desc}
               </p>
               <div class="project__button--container">
               <button class="learn-more">
           <span class="circle" aria-hidden="true"><img src="../images/icons/arrow-down.svg">
             <span class="icon arrow"></span>
           </span>
           <span class="button-text">se projektet</span>
          </button>  
          </div> 
             </div>
           </div>
          </li>
           `;



            /* DETAIL VIEW */
           document.querySelector("#barhunt").innerHTML += /*html*/ `
           <div class="close-detail-view"></div>
           <h1>hej</h1>
           `;
           
       
           /* APPEND DETAIL VIEW */
        /*    document.querySelector("#detail-view").innerHTML +=  `
           
           `;  */
        
       
            
    } 

    
  }