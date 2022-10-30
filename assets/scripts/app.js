"use strict";
console.log("app.js");

let pradinisDataBase = [];

// taikomes ============================================================================
const els = {
  addMovieBtn: document.getElementById("add-movie-btn"),
  addMovieModal: document.getElementById("add-modal"),
  backdrop: document.getElementById("backdrop"),
  cancelMovieBtn: document.querySelector(".btn--passive"),
  addMovieForm: document.getElementById("add-movie-form"),
  moviesContainer: document.getElementById("movie-list"),

  addMovieTitle: document.getElementById("title"),
  addMovieRating: document.getElementById("rating"),
  addMovieUrl: document.getElementById("image-url"),
  addMovieDetails: document.querySelector(".btn--success"),
};

// bendras globalus filmu kintamasis
let mainMoviesArr = [
  {
    id: "1",
    title: "Inception",
    rating: "7.8",
    imageUrl: "https://m.media-amazon.com/images/I/91Rc8cAmnAL._AC_SY679_.jpg",
  },
  {
    id: "2",
    title: "Scott Pilgrim vs. the World",
    rating: "9.5",
    imageUrl: "https://m.media-amazon.com/images/I/719k71fGvhL._AC_SY445_.jpg",
  },
  {
    id: "3",
    title: "The Fountain",
    rating: "8.7",
    imageUrl:
      "https://fr.web.img2.acsta.net/medias/nmedia/18/35/87/06/18686128.jpg",
  },
  {
    id: "4",
    title: "RoboCop 2014",
    rating: "8.3",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjAyOTUzMTcxN15BMl5BanBnXkFtZTgwMjkyOTc1MDE@._V1_.jpg",
  },
  {
    id: "5",
    title: "Maleficent",
    rating: "5.8",
    imageUrl:
      "https://m.media-amazon.com/images/M/MV5BMjAwMzAzMzExOF5BMl5BanBnXkFtZTgwOTcwMDA5MTE@._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: "6",
    title: "DUNE",
    rating: "7.4",
    imageUrl:
      "https://fr.web.img6.acsta.net/pictures/21/08/10/12/20/4633954.jpg",
  },
  {
    id: "7",
    title: "Interstellar",
    rating: "8.9",
    imageUrl:
      "https://fr.web.img6.acsta.net/pictures/14/09/24/12/08/158828.jpg",
  },
  {
    id: "8",
    title: "The Scribbler",
    rating: "5.2",
    imageUrl:
      "https://fr.web.img6.acsta.net/pictures/14/08/25/11/33/110018.jpg",
  },
  {
    id: "9",
    title: "Shutter Island",
    rating: "8.4",
    imageUrl:
      "https://fr.web.img4.acsta.net/medias/nmedia/18/69/96/84/19151192.jpg",
  },
  {
    id: "10",
    title: "Spider-Man: No Way Home",
    rating: "9.6",
    imageUrl:
      "https://fr.web.img5.acsta.net/pictures/22/08/23/09/37/1541299.jpg",
  },
  {
    id: "11",
    title: "Logan",
    rating: "9.8",
    imageUrl:
      "https://fr.web.img4.acsta.net/pictures/17/01/19/16/02/513278.jpg",
  },
];
console.log("els ===", els);

// EVENT LISTENERS =====================================================================
// =====================================================================================
// =====================================================================================

// paspaudimas ant Add Movie Btn
els.addMovieBtn.addEventListener("click", () => {
  // parodyti modala
  els.addMovieModal.classList.add("visible");
  // parodyti backdrop
  els.backdrop.classList.add("visible");
});

// uzdeti paspaudimo pasiklausyma ant backdrop
els.backdrop.addEventListener("click", closeMovieModal);

// uzdeti cancel mygtukui pasiklausyma ir atlikti ta pati ka ir darem su backdrop paspaudus
els.cancelMovieBtn.addEventListener("click", closeMovieModal);

// paspaudus ant ADD (jau pridedant movie)

//====================== preload existing movie array========================

// -------------lets create li for ul based on------------------------------
// <li class="movie-element">
//  <div class="movie-element__image">
//    <img src="https://picsum.photos/id/1003/600/500" alt="element__image">
//  </div>
//  <div class="movie-element__info">
//    <h2>Bambi</h2>
//    <p>4/5 stars</p>
//  </div>
// </li>
//

// -----------Item List creation
// let arrayRating = "5";
// let arrayUrl = "https://picsum.photos/id/1003/600/500";
// let arrayName = "Terminator";

let testRating = "4";
let testUrl = "https://picsum.photos/id/1003/600/500";
let testName = "Avatar";

function createMovieListItem(arrayRating, arrayUrl, arrayName) {
  let listItemCreated = document.createElement("li");
  // => <li></li>
  listItemCreated.classList.add("movie-element");
  // => <li class="movie-element"></li>

  let divForListImg = document.createElement("div");
  // => <div></div>
  divForListImg.classList.add("movie-element__image");
  // =>  <div class="movie-element__image"></div>

  // xxxxxxxxxxxxxxxxxxxxxxxx
  // let imageElement = `<img src="https://picsum.photos/id/1003/600/500" alt="element__image"></img>`;
  // =>    <img src="https://picsum.photos/id/1003/600/500" alt="element__image">

  let imageElement = document.createElement("img");
  imageElement.src = arrayUrl;
  imageElement.alt = "element__image";
  // =>    <img src="https://picsum.photos/id/1003/600/500" alt="element__image">

  // xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

  divForListImg.append(imageElement);
  // =>  <div class="movie-element__image">
  // <img src="https://picsum.photos/id/1003/600/500" alt="element__image"></img>
  // </div>

  let divForListText = document.createElement("div");
  // => <div></div>
  divForListText.classList.add("movie-element__info");
  // =>  <div class="movie-element__image"></div>

  let h2Element = document.createElement("h2");
  // =>     <h2></h2>

  let pElement = document.createElement("p");
  // =>     <p></p>

  divForListText.append(h2Element);
  //  <div class="movie-element__info">
  //    <h2>Bambi</h2>
  //  </div>

  divForListText.append(pElement);
  //  <div class="movie-element__info">
  //    <h2>Bambi</h2>
  //    <p>4/5 stars</p>
  //  </div>

  listItemCreated.append(divForListImg, divForListText);
  // =>  <li class="movie-element">
  //  <div class="movie-element__image">
  //    <img src="https://picsum.photos/id/1003/600/500" alt="element__image">
  //  </div>
  //  <div class="movie-element__info">
  //    <h2>Bambi</h2>
  //    <p>4/5 stars</p>
  //  </div>
  // </li>

  console.log("listItemCreated ===", listItemCreated);

  pElement.textContent = arrayRating;
  h2Element.textContent = arrayName;

  document.getElementById("movie-list").append(listItemCreated);
}
// end -----------Item List creation

// pagal turimus duomenis (array) generuojam list itemus
// esamas aray i lista
mainMoviesArr.forEach((element) => {
  createMovieListItem(element.rating, element.imageUrl, element.title);
});
// end esamas aray i lista

// Filmo pridejimas
els.addMovieDetails.addEventListener("click", (event) => {
  event.preventDefault();
  let newTitle = els.addMovieTitle.value;
  let newRating = els.addMovieRating.value;
  let newUrl = els.addMovieUrl.value;
  createMovieListItem(newRating, newUrl, newTitle);
  closeMovieModal();
  console.log("pridejau filma");
});

console.log("addMovieDetails ===", els.addMovieDetails);

// end Filmo pridejimas

//
//
//
//
//
//
//
//
//
//
//
//
//
//

// // klausomes formos issiuntimo ir stabdom perkrovima
// els.addMovieForm.addEventListener("submit", (event) => {
//   // stabdom perkrovima
//   event.preventDefault();
//   console.log("add movie");
//   // gauti input reiksmes ====================================================
//   const newMovieDetails = {
//     title: els.addMovieForm.elements.title.value.trim(),
//     imageUrl: els.addMovieForm.elements["image-url"].value.trim(),
//     rating: els.addMovieForm.elements.rating.value.trim(),
//   };
//   console.log("newMovieDetails ===", newMovieDetails);
//   // mini validacija =========================================================
//   // jei nors vienas laukas neivestas
//   if (
//     newMovieDetails.title === "" ||
//     newMovieDetails.imageUrl === "" ||
//     newMovieDetails.rating === ""
//   ) {
//     // stabdom tolimesni filmo pridejo vygdyma
//     console.log("stop nes ne viskas ivesta");
//     return;
//   }

//   // jei viskas nera tusciu lauku ================================================
//   addNewMovieHandler(newMovieDetails);

//   // const newMovieHtmlEl = makeOneMovieHtmlEl(newMovieDetails);

//   // // talpinam ta movie i dom
//   // console.log('talpinam movie');
//   // els.moviesContainer.append(newMovieHtmlEl);
// });

// // kai pridedam sekmingai filma isvalyti forma ir paslepti modala ir backdrop

// // MAIN FUNCTIONS =====================================================================
// // =====================================================================================
// // =====================================================================================

// function addNewMovieHandler(newMovieObj) {
//   // jei viskas gerai pridedam ta filma i mainMoviesArr
//   mainMoviesArr.push(newMovieObj);

//   // sukti cikla per visa mainMoviesArr. sugeneruoti naujus movies html elementus is masyvo
//   mainMoviesArr.forEach((mObj) => {
//     // jei viskas gerai sukuriam html vieno movie
//     const newMovieHtmlEl = makeOneMovieHtmlEl(mObj);
//     // talpinam ta movie i dom
//     els.moviesContainer.append(newMovieHtmlEl);
//   });
// }

function closeMovieModal() {
  console.log("closeMovieModal fn");
  // paslepti modala
  els.addMovieModal.classList.remove("visible");
  // paslepti backdrop
  els.backdrop.classList.remove("visible");
}

// /**
//  * Sukuria ir grazina li elmenta is argumetu gauto objekto reiksmiu
//  * @param {*} newMovieObj
//  *
//  */

// /*
// <li class="movie-element">
//   <div class="movie-element__image">
//     <img src="https://picsum.photos/id/1003/600/500" alt="element__image">
//   </div>
//   <div class="movie-element__info">
//     <h2>Title</h2>
//     <p>rating/5 stars</p>
//   </div>
// </li>
// */

// function makeOneMovieHtmlEl(newMovieObj) {
//   console.log("newMovieObj ===", newMovieObj);
//   // isorini el sukuriam su createElement
//   const liEl = document.createElement("li");
//   liEl.className = "movie-element";
//   // vidinius elementus su string (veliau reiktu perdaryti i createElement)
//   const liInsideHtml = `
//   <div class="movie-element__image">
//     <img src="${newMovieObj.imageUrl}" alt="element__image">
//   </div>
//   <div class="movie-element__info">
//     <h2>${newMovieObj.title}</h2>
//     <p>${newMovieObj.rating}/5 stars</p>
//   </div>
//   `;
//   // dedam string elementu i li elementa
//   liEl.insertAdjacentHTML("afterbegin", liInsideHtml);
//   // console.log(liEl);
//   return liEl;
// }
