import fateImg from "../assets/img/Homepage/Nouveauté/fate-synopsis.jpg";
import loveIsWarImg from "../assets/img/Homepage/Nouveauté/loveiswar-synopsis.jpg";
import demonSlayerImg from "../assets/img/Homepage/Nouveauté/demonslayer-synopsis.jpg";
import saoImg from "../assets/img/Homepage/Nouveauté/sao-synopsis.jpg";

const $synopsis = document.querySelector(".synopsis");
const $cross = document.querySelector(".synopsis__cross");
const $img = document.querySelector(".synopsis__img");
$cross.addEventListener("click", function() {
  $synopsis.style.display = "none";
});

const $synopsisTitle = document.querySelector(".synopsis__title");
const $synopsisText = document.querySelector(".synopsis__body");

const $fate = document.querySelector(".fate");
const $loveIsWar = document.querySelector(".loveIsWar");
const $demonSlayer = document.querySelector(".demonSlayer");
const $sao = document.querySelector(".sao");

// Objets pour fiches films
const synopsisFate = {
  title: "Fate Stay Night",
  synopsis:
    "Depuis des millénaires, la guerre secrète pour la possession du Saint-Graal se poursuit, connue de seuls quelques élus. Rin, une jeune mage, s'y prépare en invoquant son servant Archer, l'incarnation physique et spirituelle d'un héros légendaire qui combattra à ses côtés.",
};
const synopsisLoveIsWar = {
  title: "Love is war",
  synopsis:
    "L'histoire suit le quotidien de Kaguya Shinomiya et de Miyuki Shirogane qui se cherchent mutuellement à faire avouer les sentiments de l'un pour l'autre.",
};
const synopsisDemonSlayer = {
  title: "Demon slayer",
  synopsis:
    "Depuis les temps anciens, il existe des rumeurs concernant des démons mangeurs d'hommes qui se cachent dans les bois. Pour cette raison, les citadins locaux ne s'y aventurent jamais la nuit. La légende raconte aussi qu'un tueur déambule la nuit, chassant ces démons assoiffés de sang. Depuis la mort de son père, Tanjirou a pris sur lui pour subvenir aux besoins de sa famille. Malgré cette tragédie, ils réussissent à trouver un peu de bonheur au quotidien. Cependant, ce peu de bonheur se retrouve détruit le jour où Tanjirou découvre que sa famille s'est fait massacrer et que la seule survivante, sa sœur Nezuko, est devenue un démon. À sa grande surprise, Nezuko montre encore des signes d'émotion et de pensées humaines. Ainsi, commence la dure tâche de Tanjirou, celle de combattre les démons et de faire redevenir sa sœur humaine.",
};
const synopsisSao = {
  title: "Sword Art Online (S.A.O)",
  synopsis:
    "Après avoir été renvoyé dans le monde réel, Kirito apprend que 300 joueurs de SAO, dont Asuna, ne se sont toujours pas réveillés. En suivant une piste indiquant la présence d'un personnage caché lui ressemblant beaucoup dans un autre VRMMORPG appelé ALfheim Online, Kirito décide d'entrer dans le jeu.",
};

// Ouverture dy synopsis selon le film

// synopsis des nouveautés
$fate.addEventListener("click", function() {
  $synopsis.style.display = "flex";
  $img.setAttribute("src", fateImg);
  $synopsisTitle.textContent = synopsisFate.title;
  $synopsisText.textContent = synopsisFate.synopsis;
});
$loveIsWar.addEventListener("click", function() {
  $synopsis.style.display = "flex";
  $img.setAttribute("src", loveIsWarImg);
  $synopsisTitle.textContent = synopsisLoveIsWar.title;
  $synopsisText.textContent = synopsisLoveIsWar.synopsis;
});
$demonSlayer.addEventListener("click", function() {
  $synopsis.style.display = "flex";
  $img.setAttribute("src", demonSlayerImg);
  $synopsisTitle.textContent = synopsisDemonSlayer.title;
  $synopsisText.textContent = synopsisDemonSlayer.synopsis;
});
$sao.addEventListener("click", function() {
  $synopsis.style.display = "flex";
  $img.setAttribute("src", saoImg);
  $synopsisTitle.textContent = synopsisSao.title;
  $synopsisText.textContent = synopsisSao.synopsis;
});
