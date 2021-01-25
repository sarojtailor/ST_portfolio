/* Project Cards */

const projectcards = document.querySelector(".projectcards");
const projects = [
  {
    title: "Pet Adoption Case Study",
    cardImage: "assets/images/project-page/sa.png",
    description:
      "",
    tag:
      "",
    Previewlink: "pet-adoption.html",
    Githublink: "",
  },
  {
    title: "AR Menu Solution for food wastage",
    cardImage: "assets/images/project-page/far-outer.jpg",
    description:
      "",
    tag:
      "",
    Previewlink: "ar-menu.html",
    Githublink: "",
  },
  {
    title: "Community based carpooling system",
    cardImage: "assets/images/project-page/ridesharing_cover.jpg",
    description:
      "",
    tag:
      "",
    Previewlink: "ride-sharing.html",
    Githublink: "",
  },
  {
    title: "Movies Data Visualisation",
    cardImage: "assets/images/project-page/movies.png",
    description:
      "",
    tag:
      "",
    Previewlink: "movies-data-viz.html",
    Githublink: "",
  },
  

  
  
];

const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, tag, Previewlink, Githublink }) =>
      (output += `       
    <div class="column skill-card card">
      <a target="_blank" href="${Previewlink}" class="wrapper card_image" style="background: url(${cardImage}) center / cover no-repeat;">
           <div class="data">
            <h1 class="title"><a href="#">${title}</a></h1>
        </div> 
       
      </a>
    </div>`)
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card;
  input = document.getElementById('myInput').value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName('skill-card')
  card = document.getElementsByClassName('card')
  button = document.getElementsByClassName('tagbutton');
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (button[i].innerHTML.toUpperCase().includes(input)) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}