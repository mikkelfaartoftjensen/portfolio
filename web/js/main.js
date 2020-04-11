// import your pages
import NavPage from "../pages/nav.js";
import BackgroundPage from "../pages/background.js";
import HomePage from "../pages/home.js";
import ProjectsPage from "../pages/projects.js";
import ObjectPage from "../pages/object.js"; 
import ExpierencePage from "../pages/expierence.js";
import ContactPage from "../pages/contact.js";
////////////////////       

// Declare and init pages
let navPage = new NavPage();   
let backgroundPage = new BackgroundPage();
let homePage = new HomePage();
let projectsPage = new ProjectsPage(); 
let objectPage = new ObjectPage(); 
let expierencePage = new ExpierencePage();
let contactPage = new ContactPage();
//////////////////////////


//////////////////// mouse /////////////////////////////////
/* makes bubbles follow the cursor */
document.querySelectorAll('.cursor').forEach(function(item) {
    document.addEventListener('mousemove', function(e){
      let x = e.clientX;
      let y = e.clientY; 
      item.style.left = x + "px";
      item.style.top = y + "px";
    })   
  
  });       
//////////////////////////////////////////////////////////


////////////////////////// recaptcha ///////////////////////
/* makes recaptcha in in the form tag.
since recaptcha is an iframe it is not possible to give it the 
attribute required, neither is it possible to do through css */
window.onload = function() {
  var $recaptcha = document.querySelector('#g-recaptcha-response');
 /*  $recaptcha {} */ 

  if($recaptcha) {
  $recaptcha.setAttribute("required", "");
  }
  };  
/////////////////////////////////////////////////////////////


///////////////////////////// nav hover //////////////////
 let link = document.querySelectorAll(".nav__link").forEach(function(item) {
  item.addEventListener("mouseenter", hover);
  item.addEventListener("mouseleave", leave); 
});   

function hover() {  
document.getElementById("nav-gradient").classList.add("active");
}   

function leave() {
document.getElementById("nav-gradient").classList.remove("active");    
}   
////////////////////////////////////////////////////////////


//////////////////// detailview for projects /////////////////  
/* onclick detail view */          
document.getElementById ("barhunt-btn").addEventListener ("click", showBarhunt);
document.getElementById ("repenso-btn").addEventListener ("click", showRepenso);
document.getElementById ("calcul8r-btn").addEventListener ("click", showCalcul8r);
document.getElementById ("race-btn").addEventListener ("click", showRace); 
  
/* hide detail view */
document.querySelectorAll(".close-detail-view").forEach(function(item) {
  item.addEventListener ("click", hideDetailView);   
});   

/* hide detail view function */
function hideDetailView() {
  document.querySelectorAll(".detail-view").forEach(function(item) {
    item.classList.remove("active");  
  });  
  gradient.classList.remove("active"); 
 }  

let gradient = document.getElementById("nav-gradient");
let header = document.getElementById("main-header");
      gradient.addEventListener ("click", hideDetailView); 
      header.addEventListener ("click", hideDetailView);

/* BrHunt detail view */  
     function showBarhunt() {   
      document.getElementById("barhunt").classList.add("active");    
      document.getElementById("nav-gradient").classList.add("active");      
     }   
   
/* Repenso detail view */     
     function showRepenso() {   
      document.getElementById("repenso").classList.add("active");      
      document.getElementById("nav-gradient").classList.add("active");    
     }  

/* Cakcul8r detail view */     
     function showCalcul8r() {   
      document.getElementById("calcul8r").classList.add("active");          
      document.getElementById("nav-gradient").classList.add("active");
     } 

/* Carlsberg Race detail view */     
     function showRace() {   
      document.getElementById("race").classList.add("active");  
      document.getElementById("nav-gradient").classList.add("active");        
     } 
////////////////////////////////////////////////////////////////////////

 