// // JavaScript Document
// console.log("hi");


// // Navigatie Button
// const button = document.querySelector("button");
// const header = document.querySelector("header");

// button.onclick = toggleMenu;

// function toggleMenu (){
//   header.classList.toggle("toonMenu")
// }




// /* MENU */

// // stap 1: zoek de menu-button op en sla die op in een variabele
// let hamburgerMenu = document.querySelector("header button");
// let deUl = document.querySelector("header nav");

// // stap 2: laat de menu-button luisteren naar kliks en voer dan een functie uit
// hamburgerMenu.onclick = toggleMenu;

// // stap 3: voeg in de functie een class toe aan de nav
// function toggleMenu() {
//   deUl.classList.toggle("toonMenu");
// }


// JavaScript voor het toggelen van het menu
const menuButton = document.querySelector('button');
const header = document.querySelector('header'); // Kies de header

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
  header.classList.toggle('toonMenu'); // Toggle de klasse op de header
}

// https://chatgpt.com/c/66fd1caf-6334-8005-9600-de51e11fbe7c
// Functie om de afbeelding te veranderen op basis van media query
function updateImage(mediaQuery) {
  var img = document.getElementById('responsiveImage');
  if (mediaQuery.matches) { // Schermbreedte kleiner dan 600px
      img.src = "images/honest-mobile.jpg"; 
  } else {
      img.src ="images/promo-jb-honest-landscape.jpg"; 
  }
}

// Media query voor schermbreedte kleiner dan 600px
var mediaQuery = window.matchMedia("(max-width: 46.875em)");



// Pas de afbeelding aan bij het laden van de pagina en wanneer de schermgrootte verandert
updateImage(mediaQuery);
mediaQuery.addEventListener('change', updateImage); // Luister naar veranderingen in schermgrootte