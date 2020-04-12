
//contenu au click
let synopsis = document.getElementById('synopsis');console.log('synopsis');


//image au click
let film = document.getElementById('film');
console.log('film');


film.addEventListener('click', function(){
  synopsis.classList.toggle("close");
});


