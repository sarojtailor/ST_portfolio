//common side navbar call

$(document).ready(function () {
  $(".sidenav").sidenav();
});



//Get the top button
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop > 350
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Footer and Navbar

let header = $(`
<nav class="fixed-top">
<div class="nav-wrapper">
    
    <a href="#" data-target="mobile-demo" class="white-text sidenav-trigger" onclick="neww()"><i
            class="material-icons">menu</i></a>
    <ul class=" hide-on-med-and-down">
        
        <li><a  class="white-text font_nav" href="index.html" class="active">Work</a></li>
        <li><a  class="white-text" href="about.html">About</a></li>
        <li><a  class="white-text" href="https://drive.google.com/file/d/1ms0G_7EKf5dallbRaQXvbJ224a2JOkk6/view" target="_blank">Resume</a></li>
        <!--TOGGLE FOR LIGHT/DARK MODE-->

    </ul>
        <div class="right">
                <div class="social-icons">

                    <a class="social-icon behance" href="https://www.behance.net/sarojt" target="_blank" rel="author">
                        <i class="fab fa-behance"></i>
                    </a>

                    <a class="social-icon linkedin" href="https://www.linkedin.com/in/saroj-tailor/" target="_blank" rel="author">
                        <i class="fab fa-linkedin-in"></i>
                    </a>

                    <a class="social-icon medium" href="https://medium.com/@sarojtt" target="_blank" rel="author">
                        <i class="fab fa-medium-m"></i>
                    </a>

                    <a class="social-icon fivehun" href="https://500px.com/p/sarojt" target="_blank" rel="author">
                        <i class="fab fa-500px"></i>
                    </a>

                </div>
            </div>
</div>
</nav>

<!--Side Nav Bar -->
<ul class="sidenav" id="mobile-demo">

<li><a href="index.html">Work</a></li>
<li><a href="about.html">About</a></li>

<li><a href="https://drive.google.com/file/d/1ms0G_7EKf5dallbRaQXvbJ224a2JOkk6/view" target="_blank">Resume</a></li>
  <div class="social-icons">

                    <a class="social-icon behance" href="" target="_blank" rel="author">
                        <i class="fab fa-behance"></i>
                    </a>

                    <a class="social-icon linkedin" href="" target="_blank" rel="author">
                        <i class="fab fa-linkedin-in"></i>
                    </a>

                    <a class="social-icon medium" href="" target="_blank" rel="author">
                        <i class="fab fa-medium-m"></i>
                    </a>

                    <a class="social-icon fivehun" href="" target="_blank" rel="author">
                        <i class="fab fa-500px"></i>
                    </a>

                </div>


</ul>`);

let footer = $(`
<footer class="webintern-footer">
<div class="footer-left">
   <div class="footer-text">
    <p>🧍‍♀️ Designed and built by Saroj Tailor</p>
  </div>
</div>


</footer>`);
let bodyElement = $(`body`);
bodyElement.prepend(header);
bodyElement.append(footer);

/*JavaScript for toggle for light/dark mode*/

// selecting toggler dynamically as their are two separate code sections for the toggler to support both mobile screen and desktop screens
if(window.innerWidth <= 992) {
  var checkbox = document.querySelector("#switch-2");
  var toggler = document.querySelector('.toggle-button-2');
} else {
  var checkbox = document.querySelector("#switch-1");
  var toggler = document.querySelector('.toggle-button-1');
}

if (checkbox) {
  let a = localStorage.getItem("theme");
  document.documentElement.setAttribute("data-theme", a); // setting the initial theme to light

  if (localStorage.getItem("theme") === "dark") {
    checkbox.checked = true;
  }

  // selecting the footer text & footer icons
  const footerText = document.querySelector('.footer-text p');
  const footerIcons = document.querySelectorAll('.sub-footer-icon');
  const emailIcon = document.querySelector('.email-icon');

  // listening for click on toggler
  toggler.addEventListener("click", () => {
    if (checkbox.checked) {
      // if theme is dark then on the toggler click we have to make it light
      trans();
      // changing the color
      toggleDarkColor();

      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else { 
      /*
      if there is click on toggler and if theme is light (initially it will be light) then the theme should convert to dark
      */
      trans();
      // changing the color
      toggleLightColor();

      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
  });

  let trans = () => {
    document.documentElement.classList.add("transition");
    window.setTimeout(() => {
      document.documentElement.classList.remove("transition");
    }, 1000);
  };

  // function for changing color when dark theme is on.
  let toggleDarkColor = () => {
    footerText.style.color = '#fff';
    emailIcon.style.color = '#fff';

    footerIcons.forEach(icon => {
        icon.style.backgroundColor = '#fff';
        icon.style.border = '1px solid #fff';

        // hover effect
        icon.addEventListener('mouseover',  () => {
          icon.style.backgroundColor = '#4d4d4d';
          icon.style.border = '1px solid #4d4d4d';
        });

        icon.addEventListener('mouseleave',  () => {
          icon.style.backgroundColor = '#fff';
          icon.style.border = '1px solid #fff';
        });
    });
  }

  // function for changing color when the light theme is on.
  let toggleLightColor = () => {
    footerText.style.color = '#cccccc';
    emailIcon.style.color = '#cccccc';

    footerIcons.forEach(icon => {
        icon.style.backgroundColor = '#cccccc';
        icon.style.border = '1px solid #cccccc';
        // hover effect
        icon.addEventListener('mouseover',  () => {
          icon.style.backgroundColor = '#000';
          icon.style.border = '1px solid #000';
        });

        icon.addEventListener('mouseleave',  () => {
          icon.style.backgroundColor = '#cccccc';
          icon.style.border = '1px solid #cccccc';
        });
    });
  } 
}

$(document).ready(function() {
    $(window).scroll(function() {
       var startY = $('.nav-wrapper').height() * 2;
       if($(this).scrollTop() > startY) { 
           $('.nav-wrapper').addClass('scrolled');
       } else {
           $('.nav-wrapper').removeClass('scrolled');
       }
    });
});


    $(document).ready(function () {
        var url = window.location;
        $('ul.hide-on-med-and-down a[href="'+ url +'"]').parent().addClass('active');
        $('ul.hide-on-med-and-down a').filter(function() {
             return this.href == url;
        }).parent().addClass('active');
    });


function neww() {
  var x = document.getElementById("mobile-demo");
  var y = document.getElementById("side_overlay");
  if (x.style.display === "block") {
    x.style.display = "none";
       y.style.display = "none";

  } else {
    x.style.display = "block";
    y.style.display = "block";
  }
}