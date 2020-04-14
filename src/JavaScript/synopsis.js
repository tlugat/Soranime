import fateImg from "../assets/img/Homepage/Nouveauté/fate-synopsis.png";
import loveIsWarImg from "../assets/img/Homepage/Nouveauté/loveiswar-synopsis.png";
import demonSlayerImg from "../assets/img/Homepage/Nouveauté/demonslayer-synopsis.png";
import saoImg from "../assets/img/Homepage/Nouveauté/sao-synopsis.png";

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
    "Le Japon, au début du XXe siecle. Un petit marchand de charbon nommé Tanjiro vit une vie sans histoire dans les montagnes. Jusqu'au jour tragique où, après une courte absence, il retrouve son village et sa famille massacrés par un ogre !",
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
