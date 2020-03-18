// import your pages
import NavPage from "./pages/nav.js";
import BackgroundPage from "./pages/background.js";
import HomePage from "./pages/home.js";
import ProjectsPage from "./pages/projects.js";
import ObjectPage from "./pages/object.js";
////////////////////  

// Declare and init pages
let navPage = new NavPage();   
let backgroundPage = new BackgroundPage();
let homePage = new HomePage();
let projectsPage = new ProjectsPage(); 
let objectPage = new ObjectPage(); 
//////////////////////////


//////////////////// mouse /////////////////////////////////
document.querySelectorAll('.cursor').forEach(function(item) {
    document.addEventListener('mousemove', function(e){
      let x = e.clientX;
      let y = e.clientY; 
      item.style.left = x + "px";
      item.style.top = y + "px";
    })   
  
  });       
//////////////////////////////////////////////////////////


///////////////////////////// nav hover //////////////////
 /* CHANGE COLOR OF BUBBLES ON HOVER ON A LINK */
 let link = document.querySelectorAll("a").forEach(function(item) {
  item.addEventListener("mouseenter", hover);
item.addEventListener("mouseleave", leave); 
});  


/*      document.getElementById("btn").addEventListener("onclick", showAddBar);
 */           
       
           
document.getElementById ("barhunt-btn").addEventListener ("click", showBarhunt);
document.getElementById ("repenso-btn").addEventListener ("click", showRepenso);
document.getElementById ("calcul8r-btn").addEventListener ("click", showCalcul8r);
document.getElementById ("race-btn").addEventListener ("click", showRace); 
  
document.querySelectorAll(".close-detail-view").forEach(function(item) {
  item.addEventListener ("click", hideDetailView);   
});   

  
     function showBarhunt() {   
      document.getElementById("barhunt").classList.add("active");          
     }   
   
     function showRepenso() {   
      document.getElementById("repenso").classList.add("active");          
     }  

     function showCalcul8r() {   
      document.getElementById("calcul8r").classList.add("active");          
     } 

     function showRace() {   
      document.getElementById("race").classList.add("active");          
     } 
 

     function hideDetailView() {
      document.querySelectorAll(".detail-view").forEach(function(item) {
        item.classList.remove("active");  
      }); 
     }
  

 



function hover() {
  let form = document.querySelectorAll(".bubble").forEach(function(item) {
    item.classList.add("active");    
  });    
  document.getElementById("nav-gradient").classList.add("active");
}   

function leave() {
let form = document.querySelectorAll(".bubble").forEach(function(item) {
  item.classList.remove("active");    
});
document.getElementById("nav-gradient").classList.remove("active");    
}   



















/* show / hide detailview */
/* function showDetailView() { 
 document.getElementById("detail-view").classList.add("active");    
}    

function hideDetailView() {
  let form = document.querySelectorAll("#detail-view").forEach(function(item) {
    item.classList.remove("active");    
  });    
  document.getElementById("nav-gradient").classList.add("active");
} 
 */



// shows add bar page by removing CSS class - Mikkel FJ

/* hideAddBar() {
   let form = document.getElementById("form-popup");
   form.classList.remove("active"); 
}  */




/* let bubble = document.querySelectorAll("li").forEach(function(item) {
item.addEventListener("mouseenter", scale);
item.addEventListener("mouseleave", deScale);
}); */

/////////////////////////////////////////////////////////





/*
Fetches json data from the file projects.json
*/
/* fetch('json/projects.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    console.log(json);
    _projects = json
    appendProjects(json);
  });  */

/* function appendProjects(projects) {
  let htmlTemplate = "";
  for (let index = 0; index < projects.length; index++) {
            let project = projects[index]; 
    htmlTemplate += `
    <li class="project">
    <div class="project--content" onclick="return true">
      <div class="poster" style="background-image: url('${project.background}');">
      <div class="poster--gradient"><h2>${project.title}</h2></div> 
      </div>
      <div class="info">
        <header>
          <h1>${project.title}</h1> 
        </header>
        <p>
          ${project.desc}
        </p>
        <div class="project__button--container">
        <button class="learn-more" onclick="showDetailView('${project.id}')">
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
  }
  document.querySelector('#projects__container').innerHTML = htmlTemplate;
} 
 */


////////////////////////////// DETAIL VIEW///////////

/* let _projects = [];
let _selectedProject = ""; 
 */



/*  function showDetailView(projectId) { 
 
  for (let project of _projects) {
      if (project.id === projectId) {
        _selectedProject = project;
      }   
  }    
  document.getElementById("detail-view").innerHTML =  `
  <article class="detailview">  
      <div class="detailview-content">
      <div class="detailview-gradient"><h1>${_selectedProject.title}</h1></div> 
      <div class="detailview-img" style="background-image: url('${_selectedProject.background}');"></div> 
      <p>${_selectedProject.desc}</p>      
  </article>
`;  
  
} 
 */




 
   


 