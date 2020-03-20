export default class ExpierencePage {
    constructor() {
      this.template();
    }
  
    template() {
      document.getElementById('expierence').innerHTML += /*html*/ ` 
 
      <h2 class="section__h2">Mine færdigheder</h2> 
      <p class="section__p">Jeg har en masse talenter- og en stor passion inden for webudvikling. Jeg har erfaring med diverse front-end værktøjer og programmeringssprog såsom HTML, CSS and JavaScript. Jeg har kendskab til diverse extensions, bl.a. Sass og JQuery. I mit arbejde har jeg altid stort fokus på UX og UI</p> 
     
      <div id="expierence__developer" class="expierence__containers">
      <aside class="expierence__containers__text" data-aos="fade-right" data-aos-delay="100">
      
      <img src="http://faartoft.com/images/icons/code.svg" alt="code icon">  
      <h3>Developing</h3> 
      <p>Jeg har erfaring med diverse front end værktøjer og programmeringssprog. Jeg har kendskab til HTML. Til styling anvender jeg hovedsageligt Sass, som jeg compiler til CSS. Jeg har stor Interesse for front end web udvikling. For at øge funktionaliteten bruger jeg JavaScript og heriblandt JQuery. Jeg har anvendt PHP til simpel håndtering af back-end såsom til kontaktformular. Til delingen af mine projekter, anvender jeg Git, hvor jeg bruger GitHub. Jeg har anvendt Firebase til håndtering af back-end i form af database og authentication. Jeg har erfaring med headless CMS, herigennem WordPress, hvor dens REST API anvendes.</p>
      </aside>
      
      <div class="expierence__containers__list">
      <div class="expierence__containers__list--wrapper">
      <h4>Languages</h4>
      <ul data-aos="fade-left" data-aos-delay="200">
      <li><img src="http://faartoft.com/images/white-icons/html-white.svg" alt="HTML icon white">HTML5</li>
      <li><img src="http://faartoft.com/images/white-icons/css-white.svg" alt="css icon white">CSS3</li>
      <li><img src="http://faartoft.com/images/white-icons/sass-white.svg" alt="sass icon white">Sass</li>
      <li><img src="http://faartoft.com/images/white-icons/javascript-white.svg" alt="js icon white">JavaScript</li>
      <li><img src="http://faartoft.com/images/white-icons/jquery-white.svg" alt="jquery icon white">JQuery</li>
      <li><img src="http://faartoft.com/images/white-icons/json-white.svg" alt="json icon white">JSON</li>
      <li><img src="http://faartoft.com/images/white-icons/php-white.svg" alt="php icon white">PHP</li>
      </ul>
      </div>
      <div class="expierence__containers__list--wrapper">
      <h4>Git</h4>
      <ul data-aos="fade-left" data-aos-delay="300">
      <li><img src="http://faartoft.com/images/white-icons/git-white.svg" alt="git icon white">Git</li>
      <li><img src="http://faartoft.com/images/white-icons/github-white.svg" alt="github icon white">Github</li>
      <li><img src="http://faartoft.com/images/white-icons/gitkraken-white.svg" alt="gitkraken icon white">Gitkraken</li>
      <li><img src="http://faartoft.com/images/white-icons/bitbucket-white.svg" alt="bitbucket icon white">Bitbucket</li>
      </ul>
      </div>
      <div class="expierence__containers__list--wrapper">
      <h4>Database</h4>
      <ul data-aos="fade-left" data-aos-delay="400">
      <li><img src="http://faartoft.com/images/white-icons/firebase-white.svg" alt="firebase icon white">Firebase</li>
      <li><img src="http://faartoft.com/images/white-icons/heroku-white.svg" alt="heroku icon white">Heroku</li>
      <li><img src="http://faartoft.com/images/white-icons/wordpress-white.svg" alt="wordpress icon white">WordPress (headless CMS)</li> 
      </ul>
      </div>
      </div>
      </div>




      <!-------->
      <div id="expierence__method" class="expierence__containers--method">
    
      <div class="expierence__containers--method__list">
      <div class="expierence__containers--method__list--wrapper">
      <h4>Design</h4>
      <ul data-aos="fade-right" data-aos-delay="400">
      <li><img src="http://faartoft.com/images/white-icons/website-design.svg" alt="website design icon white">Web design</li>
      <li><img src="http://faartoft.com/images/white-icons/pen-white.svg" alt="UI & UX">UI & UX</li>
      <li><img src="http://faartoft.com/images/white-icons/laptop-white.svg" alt="responsive web icon white">Respnsive web design</li>
      <li><img src="http://faartoft.com/images/white-icons/sketch-white.svg" alt="sketch icon white">Prototyping</li>
      </ul>
      </div>
      <div class="expierence__containers--method__list--wrapper">
      <h4>Model</h4>
      <ul data-aos="fade-right" data-aos-delay="300">
      <li><img src="http://faartoft.com/images/white-icons/refresh-white.svg" alt="Agile icon white">Agile</li>
      <li><img src="http://faartoft.com/images/white-icons/refresh-white.svg" alt="Scrum icon white">SCRUM</li>
      <li><img src="http://faartoft.com/images/white-icons/refresh-white.svg" alt="Sprint icon white">Sprint</li>
      </ul>
      </div>
      <div class="expierence__containers--method__list--wrapper">
      <h4>Approach</h4>
      <ul data-aos="fade-right" data-aos-delay="200">
      <li><img src="http://faartoft.com/images/white-icons/smartphone-white.svg" alt="mobile first icon white">Mobile first</li>
      <li><img src="http://faartoft.com/images/white-icons/smartphone-white.svg" alt="Single page application icon white">SPA</li>
      <li><img src="http://faartoft.com/images/white-icons/performance-white.svg" alt="performance icon white">Performance</li> 
      </ul>
      </div>
      </div>
      <aside class="expierence__containers--method__text" data-aos="fade-left" data-aos-delay="100">
      
      <img src="http://faartoft.com/images/icons/method.svg" alt="code icon">  
      <h3>Method</h3> 
      <p>I udarbejdelsen af web løsninger har jeg altid UI og UX in mente. For at have disse i fokus udarbejder jeg mockup og wireframes ved prototyping inden programmeringen. Her fokuserer jeg på brugeren og oplevelsen. Dette er noget man selvfølgelig aldrig bliver færdig med, derfor arbejder jeg agilt, sådan at jeg hele tiden får mulighed for at genoverveje og tilføje ændringer og forbedringer til mine projekter. Her anvender jeg ofte mobile first udviklingsmetoden, som bygger på, at man programmerer efter mobil størrelse og derefter skalerer op. Performance er et område, der selvfølgelig har høj prioritet, da indlæsningstid er et vigtigt element i web udvikling. Her har jeg bl.a. anvendt SPA (single page application). En SPA, er en web app, der opbygges af én side, men opfører sig som en traditionel med flere sider, og føles mere som en traditionel app. 
      Den vil have en hurtigere indlæsningstid, da web app’en ikke vil genindlæse siden
      når en underside aktiveres.</p>
      </aside>
      </div>

      <div id="expierence__developer" class="expierence__containers">
      <aside class="expierence__containers__text" data-aos="fade-right" data-aos-delay="100">
      
      <img src="http://faartoft.com/images/icons/tools.svg" alt="tools icon">  
      <h3>Tools</h3> 
      <p>I min udviklingsprocess - hvorend det er designfasen, eller udviklingsfasen, anvender jeg diverse værktøjer. Min foretrukne editor er Visual Studio Code, dog har jeg i lang tid brugt Atom. Til fast-typing anvender jeg plug-in’et Emmet. Da jeg hovedsageligt skriver min styling i Sass, anvender jeg en compiler; her anvender jeg Koala. Til uploading af mine filer bruger jeg Filezilla. 
      Til kreeringen af mine mockups, anvender jeg adobe værktøjet XD, som gør dette nemt. Til redigering af billeder, anvender jeg Photoshop. Til udarbejdelsen af SVG’er el. diverse logoer og ikoner, benytter jeg mig af Illustrator.</p>
      </aside>
      
      <div class="expierence__containers__list">
      <div class="expierence__containers__list--wrapper">
      <h4>Developer tools</h4>
      <ul data-aos="fade-left" data-aos-delay="200">
      <li><img src="http://faartoft.com/images/white-icons/vscode-white.svg" alt="visual studio code icon white">Visual Studio Code</li>
      <li><img src="http://faartoft.com/images/white-icons/atom-white.svg" alt="atom icon white">Atom</li>
      <li><img src="http://faartoft.com/images/white-icons/emmet-white.svg" alt="emmet icon white">Emmet</li>
      <li><img src="http://faartoft.com/images/white-icons/bootstrap-white.svg" alt="bootstrap icon white">Bootstrap</li>
      <li><img src="http://faartoft.com/images/white-icons/koala-white.svg" alt="koala compiler icon white">Koala</li>
      <li><img src="http://faartoft.com/images/white-icons/filezilla-white.svg" alt="filezilla icon white">Filezilla</li>
      </ul> 
      </div>
      <div class="expierence__containers__list--wrapper">
      <h4>Design tools</h4>
      <ul data-aos="fade-left" data-aos-delay="300">
      <li><img src="http://faartoft.com/images/white-icons/adobephotoshop-white.svg" alt="photoshop icon white">Photoshop</li>
      <li><img src="http://faartoft.com/images/white-icons/adobexd-white.svg" alt="adobe xd icon white">XD</li>
      <li><img src="http://faartoft.com/images/white-icons/adobeindesign-white.svg" alt="indesign icon white">InDesign</li>
      <li><img src="http://faartoft.com/images/white-icons/adobeillustrator-white.svg" alt="illustrator icon white">Illustrator</li>
      </ul>
      </div>
      
      </div> 
      </div> 

      `;
    } 
  } 