export default class ContactPage {
    constructor() {
      this.template();
    }
  
    template() {
      document.getElementById('contact').innerHTML += /*html*/ `
      <h2 class="section__h2">Kontakt mig</h2> 
      <p class="section__p">Du kan kontakte mig her ved at udfylde kontaktformularen - jeg vender tilbage til dig, så hurtigt jeg kan!</p> 

      <!-------- contact form goes herer ------------->
      <div id="contact-form--container">
      <div class="contact-form" data-aos="fade-in" data-aos-delay="300">
      <form id="contact-form" method="post" action="contact-form-handler.php"> 
          <input name="name" type="text" class="form-control" placeholder="Navn*" required><br>
          <div class="form-control-purple"></div>
          <input name="email" type="email" class="form-control" placeholder="Email*" required><br>
          <div class="form-control-purple"></div>
          <input name="phone" type="tel" class="form-control" placeholder="Telefonnummer"><br>
          <div class="form-control-purple"></div>
          <textarea name="message" class="form-control" placeholder="Besked*" rows="4" required></textarea><br>
          <div class="form-control-purple"></div>
          <!------------ Google recaptcha goes here---------->
          <!----- makes the recaptchacontainer to define the size of the recaptcha, since it's an iframe it isnt possible to do so by custom css----->
          <div id="form-submit-container">
          <div id="recaptchaContainer">
          <div class="g-recaptcha"  data-sitekey="6LdnSMcUAAAAAIi8RzxGLxzUmgf2HVot8ATE3DfD" data-theme="dark"></div>
          </div> 
              <!------------ Google recaptcha goes here end---------->
              
        <div id="contat-form-button-wrapper">
          <button class="learn-more" type="submit"> 
          <span class="circle" aria-hidden="true"><img src="https://faartoft.com/images/icons/arrow.svg">
            <span class="icon arrow"></span>
          </span> 
          <span class="button--text">send besked</span>
        </button>
        </div> 
        </div>  
      </form>
  </div>
  </div>
      `;
    } 
  } 