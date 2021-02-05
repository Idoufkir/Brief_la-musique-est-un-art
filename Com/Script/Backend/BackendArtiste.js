//import required packdges
var remote = window.require("electron").remote;
const lineReader = window.require("line-reader");
const fs = window.require("fs");
const path = window.require("path");

//specfying the file path
let npathNameArtiste = path.join(__dirname, "/../Data/Artistes.txt");

//calling DOM element
var showArtiste = document.getElementById("showArtiste");

//read data from the contact file
window.addEventListener("load", () => {
// console.log(npathNameArtiste);

  fs.readFileSync(npathNameArtiste, "utf8")
    .split(/\r?\n/)
    .forEach(function (line) {
      line = line.split(" ");
      var stringArray = new Array();
      for (var i = 0; i < line.length; i++) {
        stringArray.push(line[i]);
        //console.log(line[i]);
        // if (i != line.length - 1) {
        //   stringArray.push(" ");
        // }

        
      }


       console.log(stringArray[0] + " " + stringArray[1] + " " + stringArray[2]);



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

      var name, titlemusic, uri;

      name.innerHTML = stringArray[0];
      titlemusic.innerHTML = stringArray[1];
      uri.innerHTML = stringArray[2];

      card1.appendChild(container);
      container.appendChild(uri);
      card1.appendChild(name);
      card1.appendChild(titlemusic);

      showArtiste.appendChild(card1);


    });
});
