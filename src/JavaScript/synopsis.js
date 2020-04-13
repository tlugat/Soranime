
//contenu au click
let synopsis = document.getElementById('synopsis');
console.log("synopsis");


//image au click
let film = document.getElementById('film');
console.log('film');

let cross = document.getElementById('cross');
console.log('cross');

//fermeture au click avec la croix
film.addEventListener('click', function(){
  synopsis.classList.toggle("close");
});

cross.addEventListener('click', function(){
  synopsis.classList.add("close");
});