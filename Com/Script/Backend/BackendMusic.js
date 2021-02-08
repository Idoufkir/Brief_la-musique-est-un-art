//import required packdges
var remote = window.require("electron").remote;
const lineReader = window.require("line-reader");
const fs = window.require("fs");
const path = window.require("path");



let npathNameMusic = path.join(__dirname, "/../Data/Musiques.txt");

var showMusic = document.getElementById("showMusic");

window.addEventListener("load", () => {

    fs.readFileSync(npathNameMusic, "utf8")
        .split(/\r?\n/)
        .forEach(function (line) {
            line = line.split(" ");
            var stringArray = new Array();
            var name = localStorage.getItem("ArtistName");
            for(var i in window.localStorage){
                val = localStorage.getItem(i); 
                value = val.split(" "); //splitting string inside array to get name
                name[i] = value[1]; // getting name from split string
                console.log(name[i]);
             }


            // console.log(stringArray[0] + " " + stringArray[1] + " " + stringArray[2]);





            var container = document.createElement("div");
            container.className = "container1";



            var name = document.createElement("h3");
            name.className = "details";

            var titlemusic = document.createElement("h3");
            titlemusic.className = "details";

            var music = document.createElement("h1");
            music.className = "details";


            var name, titlemusic, music;

            name.innerHTML = localStorage.getItem("ArtistName");
            titlemusic.innerHTML = stringArray[0];
            music.innerHTML = stringArray[1];

            container.appendChild(name);
            container.appendChild(titlemusic);
            container.appendChild(music);


            showMusic.appendChild(container);


        });

});