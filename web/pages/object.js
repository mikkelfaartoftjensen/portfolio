export default class ObjectPage {
    constructor() {
      this.template();
    }
  
    template() {
        document.querySelector("#projects__container").innerHTML += /*html*/ `
        <li class="project" data-aos="fade-right" data-aos-delay="100">
        <div class="project--content" onclick="return true">
          <div class="poster" style="background-image: url('${repenso.background}');">
          <div class="poster--gradient"><h2>${repenso.title}</h2></div> 
          </div>
          <div class="info">
            <header>
               
            </header>
            <p>  
              ${repenso.desc} 
            </p>
            <div class="project__button--container">
            <button class="learn-more" id="repenso-btn">     
        <span class="circle" aria-hidden="true"><img src="https://faartoft.com/images/icons/arrow.svg">
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
         <li class="project" data-aos="fade-right" data-aos-delay="200">
         <div class="project--content" onclick="return true">
           <div class="poster" style="background-image: url('${barhunt.background}');">
           <div class="poster--gradient"><h2>${barhunt.title}</h2></div> 
           </div>
           <div class="info">
             <header>
               
             </header>
             <p>
               ${barhunt.desc}
             </p>
             <div class="project__button--container">
             <button class="learn-more" id="barhunt-btn"> 
         <span class="circle" aria-hidden="true"><img src="https://faartoft.com/images/icons/arrow.svg">
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
         <li class="project" data-aos="fade-right" data-aos-delay="300">
         <div class="project--content" onclick="return true">
           <div class="poster" style="background-image: url('${calcul8r.background}');">
           <div class="poster--gradient"><h2>${calcul8r.title}</h2></div> 
           </div>
           <div class="info">
             <header>
              
             </header>
             <p>
               ${calcul8r.desc}
             </p>
             <div class="project__button--container">
             <button class="learn-more" id="calcul8r-btn">
         <span class="circle" aria-hidden="true"><img src="https://faartoft.com/images/icons/arrow.svg">
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
           <li class="project" data-aos="fade-right" data-aos-delay="400"> 
           <div class="project--content" onclick="return true">
             <div class="poster" style="background-image: url('${race.background}');">
             <div class="poster--gradient"><h2>${race.title}</h2></div> 
             </div>
             <div class="info">
               <header>
                 
               </header>
               <p>
                 ${race.desc}
               </p>
               <div class="project__button--container">
               <button class="learn-more" id="race-btn">
           <span class="circle" aria-hidden="true"><img src="https://faartoft.com/images/icons/arrow.svg">
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
           <div class="close-detail-view"><img src="https://faartoft.com/images/icons/x.svg" alt="icon of x"></div>
           <div class="detail-view-container"> 
           <div class="detail-view-container__card" style="background-image: url('${barhunt.background}');">
           <div class="detail-view-container--gradient"><h2 class="detail-view-container--gradient__h2">${barhunt.title}</h2></div>  
           </div>
           <div class="detail-view-container__text">
           <div class="detail-view-container__text--left">
           <div detail-view-block>
           <h3>Konceptet</h3>
           <p>${barhunt.concept}</p>
           </div>
           <div class="detail-view-block">
           <h3>Beskrivelse</h3>
           <p>${barhunt.desc}</p>
           </div>
           <div class="detail-view-block">
           <h3>Metode</h3>
           <p>${barhunt.method}</p>
           </div>
           </div>
           <div class="detail-view-container__text--right">
           <div class="gifs">
           <img class="logo" src="${barhunt.gif}" alt="logo">
            <img class="logo2"src="${barhunt.gif2}" alt="">
            </div> 
           <div class="detail-view-block icons">
           <h3>Teknologi</h3>
           <img src="${developer.html}" alt="${developer.html}">
           <img src="${developer.css}" alt="${developer.css}">
           <img src="${developer.sass}" alt="${developer.sass}">
           <img src="${developer.javascript}" alt="${developer.javascript}">
           <img src="${developer.json}" alt="${developer.json}">
           <img src="${developer.firebase}" alt="${developer.firebase}">  
           </div> 
           <div class="detail-view-block detail-view-cta">
           <a href="${barhunt.website}" target="_blank"><button class="learn-more">
           <span class="circle" aria-hidden="true"><img src="https://faartoft.com/images/icons/arrow.svg">
             <span class="icon arrow"></span>
           </span>
           <span class="button-text">besøg siden</span>
          </button></a> 
          <a href="${barhunt.repo}" target="_blank"><button class="learn-more" id="race-btn">
          <span class="circle" aria-hidden="true"><img src="https://faartoft.com/images/icons/github-icon.svg"> 
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">se repository</span>
         </button></a>
           </div>
           </div>
           </div> 
           </div>
           `;
           
           document.querySelector("#repenso").innerHTML += /*html*/ `
           <div class="detail-view-container"> 
           <div class="close-detail-view"><img src="https://faartoft.com/images/icons/x.svg" alt="icon of x"></div> 
           <div class="detail-view-container__card" style="background-image: url('${repenso.background}');">
           <div class="detail-view-container--gradient"><h2 class="detail-view-container--gradient__h2">${repenso.title}</h2></div>  
           </div>
           <div class="detail-view-container__text">
           <div class="detail-view-container__text--left">
           <div detail-view-block>
           <h3>Konceptet</h3>
           <p>${repenso.concept}</p>
           </div>
           <div class="detail-view-block">
           <h3>Beskrivelse</h3>
           <p>${repenso.desc}</p>
           </div>
           <div class="detail-view-block">
           <h3>Metode</h3>
           <p>${repenso.method}</p>
           </div>
           </div>
           <div class="detail-view-container__text--right">
           <div class="gifs">
           <img class="logo" src="${repenso.gif}" alt="logo">
            <img class="logo2"src="${repenso.gif2}" alt="">
            </div> 
           <div class="detail-view-block icons">
           <h3>Teknologi</h3>
           <img src="${developer.html}" alt="${developer.html}">
           <img src="${developer.css}" alt="${developer.css}">
           <img src="${developer.sass}" alt="${developer.sass}">
           <img src="${developer.javascript}" alt="${developer.javascript}">
           <img src="${developer.jquery}" alt="${developer.jquery}">
           <img src="${developer.php}" alt="${developer.php}"> 
           </div> 
           <div class="detail-view-block detail-view-cta">
           <a href="${repenso.website}" target="_blank"><button class="learn-more">
           <span class="circle" aria-hidden="true"><img src="https://faartoft.com/images/icons/arrow.svg">
             <span class="icon arrow"></span>
           </span>
           <span class="button-text">besøg siden</span>
          </button></a> 
          <a href="${repenso.repo}" target="_blank"><button class="learn-more" id="race-btn">
          <span class="circle" aria-hidden="true"><img src="https://faartoft.com/images/icons/github-icon.svg"> 
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">se repository</span>
         </button></a>
           </div>
           </div>
           </div> 
           </div>
           `;
 
           document.querySelector("#calcul8r").innerHTML += /*html*/ `
           <div class="close-detail-view"><img src="https://faartoft.com/images/icons/x.svg" alt="icon of x"></div>
           <div class="detail-view-container"> 
           <div class="detail-view-container__card" style="background-image: url('${calcul8r.background}');">
           <div class="detail-view-container--gradient"><h2 class="detail-view-container--gradient__h2">${calcul8r.title}</h2></div>  
           </div>
           <div class="detail-view-container__text">
           <div class="detail-view-container__text--left">
           <div detail-view-block>
           <h3>Konceptet</h3>
           <p>${calcul8r.concept}</p>
           </div>
           <div class="detail-view-block">
           <h3>Beskrivelse</h3>
           <p>${calcul8r.desc}</p>
           </div>
           <div class="detail-view-block">
           <h3>Metode</h3>
           <p>${calcul8r.method}</p>
           </div>
           </div>
           <div class="detail-view-container__text--right">
           <div class="gifs">
           <img class="logo" src="${calcul8r.gif}" alt="logo">
            <img class="logo2"src="${calcul8r.gif2}" alt="">
            </div> 
           <div class="detail-view-block icons">
           <h3>Teknologi</h3>
           <img src="${developer.html}" alt="${developer.html}">
           <img src="${developer.css}" alt="${developer.css}">
           <img src="${developer.javascript}" alt="${developer.javascript}">
           <img src="${developer.jquery}" alt="${developer.jquery}">
           </div> 
           <div class="detail-view-block detail-view-cta">
           <a href="${calcul8r.website}" target="_blank"><button class="learn-more">
           <span class="circle" aria-hidden="true"><img src="https://faartoft.com/images/icons/arrow.svg">
             <span class="icon arrow"></span>
           </span>
           <span class="button-text">besøg siden</span>
          </button></a> 
          <a href="${calcul8r.repo}" target="_blank"><button class="learn-more" id="race-btn">
          <span class="circle" aria-hidden="true"><img src="https://faartoft.com/images/icons/github-icon.svg"> 
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">se repository</span>
         </button></a>
           </div>
           </div>
           </div> 
           </div>
           `;
           
           document.querySelector("#race").innerHTML += /*html*/ `
           <div class="close-detail-view"><img src="https://faartoft.com/images/icons/x.svg" alt="icon of x"></div>
           <div class="detail-view-container"> 
           <div class="detail-view-container__card" style="background-image: url('${race.background}');">
           <div class="detail-view-container--gradient"><h2 class="detail-view-container--gradient__h2">${race.title}</h2></div>  
           </div>
           <div class="detail-view-container__text">
           <div class="detail-view-container__text--left">
           <div detail-view-block>
           <h3>Konceptet</h3>
           <p>${race.concept}</p>
           </div>
           <div class="detail-view-block">
           <h3>Beskrivelse</h3>
           <p>${race.desc}</p>
           </div>
           <div class="detail-view-block">
           <h3>Metode</h3>
           <p>${race.method}</p>
           </div>
           </div>
           <div class="detail-view-container__text--right">
           <div class="gifs">
           <img class="logo" src="${race.gif}" alt="logo">
            <img class="logo2"src="${race.gif2}" alt="">
            </div> 
           <div class="detail-view-block icons">
           <h3>Teknologi</h3>
           <img src="${developer.html}" alt="${developer.html}">
           <img src="${developer.css}" alt="${developer.css}">
           <img src="${developer.sass}" alt="${developer.sass}">
           <img src="${developer.javascript}" alt="${developer.javascript}">
           <img src="${developer.jquery}" alt="${developer.jquery}"> 
           </div> 
           <div class="detail-view-block detail-view-cta">
           <a href="${race.website}" target="_blank"><button class="learn-more">
           <span class="circle" aria-hidden="true"><img src="https://faartoft.com/images/icons/arrow.svg">
             <span class="icon arrow"></span>
           </span>
           <span class="button-text">besøg siden</span>
          </button></a> 
          <a href="${race.repo}" target="_blank"><button class="learn-more" id="race-btn">
          <span class="circle" aria-hidden="true"><img src="https://faartoft.com/images/icons/github-icon.svg"> 
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">se repository</span>
         </button></a>
           </div>
           </div>
           </div> 
           </div>
           `;
       
       
           /* APPEND DETAIL VIEW */
        /*    document.querySelector("#detail-view").innerHTML +=  `
           
           `;  */
        
       
            
    } 

    
  }