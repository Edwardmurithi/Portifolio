document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menuIcon');
  const menu = document.getElementById('navLinks');

  // Toggle menu to display
  menuIcon.addEventListener('click', () => {
      event.stopPropagation(); //prevent click from propagating to the document.
      menu.classList.toggle('active');
      menuIcon.classList.toggle('open');
  });

  // Hide menu when clicking outside.
  document.addEventListener('click', (event) => {
      if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
          menu.classList.remove('active');
          menu.classList.remove('open');
      }
  });
});


// about tablinks
var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")

function openlink(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link")
    }

    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link")
    }

    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}


// Initialize EmailJS with your user ID
const contactForm = document.getElementById('contact-form'),
  contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();

  //serviceID - templateID - #form - publicKey
  emailjs.sendEmail('service_1a0t8kg','template_h7xwbdk','#contact-form','3G2osv0MQjHFyMLBu')

  .then(() => {
    // Show message sent
    contactMessage.textContent = 'Message sent successfully.'

    // remove message after five seconds
    setTimeout(() => {
      contactMessage.textContent = ''
    }, 5000)

    // clear input fields
    // contactForm
  })
}