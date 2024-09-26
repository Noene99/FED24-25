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