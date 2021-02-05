//import required packdges
var remote = window.require("electron").remote;
const lineReader = window.require("line-reader");
const fs = window.require("fs");
const path = window.require("path");

//specfying the file path
let npathNameArtiste = path.join(__dirname, "/../Data/Artistes.txt");
let npathNameMusic = path.join(__dirname, "/../Data/Musiques.txt");

//calling DOM element
var showArtiste = document.getElementById("showArtiste");
var btnAddArtiste = document.getElementById('addArtiste');

var showMusic = document.getElementById("showMusic");


var nameArtiste = document.getElementById('artistename');
var albumeArtiste = document.getElementById('albumname');
var pathImg = document.getElementById('imgArtist');

// -------------------  btnAddArtist  ------------------- //
btnAddArtiste.addEventListener("click", () => {
  var albumArtisteValue = albumeArtiste.value;
  var nameArtisteValue = nameArtiste.value;
  var pathImgValue = pathImg.value;

  fs.appendFileSync(npathNameArtiste, "\n" + nameArtisteValue + " " + albumArtisteValue + " " + pathImgValue, "UTF-8", { flags: "a+" });
  location.reload();

});

//read data from the artiste file
window.addEventListener("load", () => {
  // console.log(npathNameArtiste);

  fs.readFileSync(npathNameArtiste, "utf8")
    .split(/\r?\n/)
    .forEach(function (line) {
      line = line.split(" ");
      var stringArray = new Array();
      for (var i = 0; i < line.length; i++) {
        stringArray.push(line[i]);
        console.log(line[i]);
        // if (i != line.length - 1) {
        //   stringArray.push(" ");
        // }


      }


      // console.log(stringArray[0] + " " + stringArray[1] + " " + stringArray[2]);



      var card1 = document.createElement("div");
      card1.className = "card1";

      var container = document.createElement("div");
      container.className = "container1";

      var uri = document.createElement("img");
      uri.src = "imgArtist";
      uri.setAttribute('src', stringArray[2]);


      var name = document.createElement("h3");
      name.className = "details";

      var titlemusic = document.createElement("h3");
      titlemusic.className = "details";
      

      var btnPlaylist = document.createElement('button');
      btnPlaylist.className = "playlist-button"; 
      btnPlaylist.onclick = () => { 

        //console.log(stringArray[0]);
        localStorage.setItem("ArtistName", stringArray[0]);
        //console.log(localStorage.getItem("ArtistName"));
        window.location.href = "music.html"
       } 

      var name, titlemusic, uri;

      name.innerHTML = stringArray[0];
      titlemusic.innerHTML = stringArray[1];
      uri.innerHTML = stringArray[2];

      card1.appendChild(container);
      container.appendChild(uri);
      card1.appendChild(name);
      card1.appendChild(titlemusic);
      card1.appendChild(btnPlaylist);

      showArtiste.appendChild(card1);


    });

});


function ToMusicPage(){
  console.log('salut');
}