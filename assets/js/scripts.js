document.addEventListener('DOMContentLoaded', () => {
  const menuIcon = document.getElementById('menuIcon');
  const menu = document.getElementById('navLinks');

  // Toggle menu to display
  menuIcon.addEventListener('click', () => {
      event.stopPropagation() //prevent click from propagating to the documentt.
      menuIcon.classList.toggle('open');
      // menu.style.display = menu.style.display === 'block' ? 'none':'block';
      menu.classList.toggle('active')
  })

  // Hide menu when clicking outside.
  document.addEventListener('click', (event) => {
      if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
          // menu.style.display = 'none';
          // menuIcon.classList.remove('open');
          menu.classList.remove('active');
          menu.classList.remove('open')
      }
  });
});

// Clickable menu bar
// function myFunction(x) {
//     x.classList.toggle("change");
//   }

/* Toggle Menu */
// var navLinks = document.getElementById("navLinks");

// function showMenu() {
//     navLinks.style.right = "0";
// }

// function hideMenu() {
//     navLinks.style.right = "-200px"
// }

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
emailjs.init('your_user_id'); // Replace 'your_user_id' with your EmailJS user ID

document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission behavior

  const serviceID = 'service_1a0t8kg'; // Replace with your EmailJS service ID
  const templateID = 'template_h7xwbdk'; // Replace with your EmailJS template ID

  const formData = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  emailjs.send(serviceID, templateID, formData)
    .then(response => {
      alert('Email sent successfully!');
      document.getElementById('contact-form').reset(); // Clear the form
    })
    .catch(error => {
      alert('Failed to send email. Please try again.');
      console.error('EmailJS Error:', error);
    });
});