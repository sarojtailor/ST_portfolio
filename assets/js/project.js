/* Project Cards */

const projectcards = document.querySelector(".projectcards");
const projects = [
  {
    title: "Pet Adoption Case Study",
    cardImage: "assets/images/project-page/sa.png",
    description:
      "A quiz app built using basic react.",
    tag:
      "React.js",
    Previewlink: "project_detail.html",
    Githublink: "",
  },
  {
    title: "Chess Engine",
    cardImage: "assets/images/project-page/far-outer.jpg",
    description:
      "A chess engine for a popular game dev engine.",
    tag:
      "Game dev",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Flappy Bird",
    cardImage: "assets/images/project-page/ridesharing_cover.jpg",
    description:
      "Flappy bird game built using React.js",
    tag:
      "React.js",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Exercise Tracker",
    cardImage: "assets/images/project-page/sdfghj.png",
    description:
      "Exercise tracker built using basic redux.",
    tag:
      "Redux",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Recipe Ingredient Parser",
    cardImage: "assets/images/project-page/recipe.jpg",
    description:
      "Recipe Ingredient Parser built using JavaScript.",
    tag:
      "JavaScript",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Poker Game",
    cardImage: "assets/images/project-page/poker.jpg",
    description:
      "Poker game built using typescript.",
    tag:
      "typeScript",
    Previewlink: "",
    Githublink: "",
  },

  
  
];

const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, tag, Previewlink, Githublink }) =>
      (output += `       
    <div class="column skill-card card">
      <a href="${Previewlink}" class="wrapper card_image" style="background: url(${cardImage}) center / cover no-repeat;">
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