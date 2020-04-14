const $synopsis = document.querySelector(".synopsis");
const $cross = document.querySelector(".synopsis__cross");
const $img = document.querySelector(".synopsis__img");
$cross.addEventListener("click", function() {
  $synopsis.style.display = "none";
});

const $synopsisTitle = document.querySelector(".synopsis__title");
const $synopsisText = document.querySelector(".synopsis__body");

const $naruto = document.querySelector(".naruto");
const $codeGeass = document.querySelector(".codeGeass");
const $samuraiChamploo = document.querySelector(".samuraiChamploo");
const $chateauAmbulant = document.querySelector(".chateauAmbulant");
const $princesseMononoke = document.querySelector(".princesseMononoke");

const synopsisCodeGeass = {
  title: "Code Geass",
  synopsis:
    "Dans la défaite, le Japon perdit son indépendance et devint la 11ème colonie de l'Empire de Britannia. ... Dans ce contexte géopolitique et social explosif, des groupuscules nationalistes japonais luttent pour redonner l'indépendance à leur pays.",
  url: "assets/img/Homepage/Top10/Code_geass.png",
};

const synopsisNaruto = {
  title: "Naruto",
  synopsis:
    "Naruto est un garçon un peu spécial. Solitaire au caractère <br>fougueux, il n'est pas des plus appréciés dans son village. Malgré <br>cela, il garde au fond de lui une ambition: celle de devenir un<br> \"maître Hokage\", la plus haute distinction dans lordre des ninjas, <br> et ainsi obtenir la reconnaissance de ses pairs mais cela ne sera<br> pas de  tout repos ... Suivez l'éternel farceur dans sa quête du <br>secret de  sa naissance et de la conquête des fruits de son ambition !",
};

const synopsisSamuraiChamploo = {
  title: "Samuraï Champloo",
  synopsis:
    "Une jeune fille, Fuu, recherche le samouraï qui sent le tournesol et se fait accompagner par deux individus originaux, Mugen l'extravagant, ancien pirate devenu vagabond, et Jin le samouraï (rōnin) impassible, à la suite d'un pari qu'elle a « gagné » contre ces deux derniers qui allaient s'entre-tuer.",
};

const synopsisChateauAmbulant = {
  title: "Le château ambulant",
  synopsis:
    "Sophie, une orpheline de 18 ans, travaille dur dans la boutique de chapelier que lui a laissée son père. Un jour, en ville, elle croise Hauru, un magicien très séduisant mais faible de caractère. Une sorcière, se méprenant sur leurs sentiments, change Sophie en une vieille femme de 90 ans. Désespérée, Sophie erre dans la campagne quand elle aperçoit un étrange château qui se déplace sur d'immenses pattes.",
};

const synopsisPrincesseMononoke = {
  title: "Princesse Mononoke",
  synopsis:
    "Ashitaka, un jeune guerrier japonais, affronte un sanglier géant et furieux qui attaque son village. Il tue la bête, mais se retrouve atteint par un mal mystérieux. Sur le conseil des sages, il part vers l'Ouest, à la recherche de ce qui a transformé l'animal en démon. Au cours de son périple, il rencontre San, une jeune fille qui vit avec les loups. Ashitaka apprend que les humains sont à l'origine de tous ces maux, car ils détruisent la forêt, qu'ils exploitent pour alimenter leurs forges.",
};

$codeGeass.addEventListener("click", function() {
  $synopsis.style.display = "flex";
  $img.setAttribute("src", synopsisCodeGeass.url);
  $synopsisTitle.textContent = synopsisCodeGeass.title;
  $synopsisText.textContent = synopsisCodeGeass.synopsis;
});
$naruto.addEventListener("click", function() {
  $synopsis.style.display = "flex";
  $synopsisTitle.textContent = synopsisNaruto.title;
  $synopsisText.textContent = synopsisNaruto.synopsis;
});
$samuraiChamploo.addEventListener("click", function() {
  $synopsis.style.display = "flex";
  $synopsisTitle.textContent = synopsisSamuraiChamploo.title;
  $synopsisText.textContent = synopsisSamuraiChamploo.synopsis;
});
$chateauAmbulant.addEventListener("click", function() {
  $synopsis.style.display = "flex";
  $synopsisTitle.textContent = synopsisChateauAmbulant.title;
  $synopsisText.textContent = synopsisChateauAmbulant.synopsis;
});
$princesseMononoke.addEventListener("click", function() {
  $synopsis.style.display = "flex";
  $synopsisTitle.textContent = synopsisPrincesseMononoke.title;
  $synopsisText.textContent = synopsisPrincesseMononoke.synopsis;
});
