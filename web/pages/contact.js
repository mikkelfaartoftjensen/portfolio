export default class ContactPage {
    constructor() {
      this.template();
    }
  
    template() {
      document.getElementById('contact').innerHTML += /*html*/ `
      <h2 class="section__h2">Contact me</h2> 
      <p class="section__p">Wanna get in touch? Contact me here by filling out the contact form, and I will get back to you as fast as I can!</p> 

      <!-------- contact form goes herer ------------->
      <div id="contact-form--container">
      <div class="contact-form">
      <form id="contact-form" method="post" action="contact-form-handler.php"> 
          <input name="name" type="text" class="form-control" placeholder="Your Name" required><br>
          <div class="form-control-purple"></div>
          <input name="email" type="email" class="form-control" placeholder="Your Email" required><br>
          <div class="form-control-purple"></div>
          <input name="phone" type="tel" class="form-control" placeholder="Your Phonemumber"><br>
          <div class="form-control-purple"></div>
          <textarea name="message" class="form-control" placeholder="Message" rows="4" required></textarea><br>
          <div class="form-control-purple"></div>
          <!------------ Google recaptcha goes here---------->
          <!----- makes the recaptchacontainer to define the size of the recaptcha, since it's an iframe it isnt possible to do so by custom css----->
          <div id="form-submit-container">
          <div id="recaptchaContainer" style="transform:scale(0.7);transform-origin:0 0">
          <div class="g-recaptcha"  data-sitekey="6LdnSMcUAAAAAIi8RzxGLxzUmgf2HVot8ATE3DfD" data-theme="dark"></div>
          </div> 
              <!------------ Google recaptcha goes here end---------->
              
        <div id="contat-form-button-wrapper">
          <button class="learn-more" type="submit"> 
          <span class="circle" aria-hidden="true"><img src="http://faartoft.com/images/icons/arrow.svg">
            <span class="icon arrow"></span>
          </span> 
          <span class="button--text">send besked</span>
        </button>
        </div>
        </div> 
          
          <!--<input type="submit" class="form-control submit" value="SEND MESSAGE">-->
      </form>
  </div>
  </div>
      `;
    } 
  } 