console.log("Hey");
let currentSong = new Audio();

let ff;
let songs;

function addingfoldersong(folder_pic, h2, p, song_folder) {
  let html = `
  <div data-folder="${song_folder}" class="card">
  <div class="play">
  <img src="svgs/playbutton.svg" alt="" />
  </div>
  <img
  src="${folder_pic}"
  alt=""
  />
  <h2>${h2}</h2>
  <p>${p}</p>
  </div>`;

  document.querySelector(".cardcontainer").innerHTML =
    document.querySelector(".cardcontainer").innerHTML + html;
}

const playing = (track, folding, pause = true) => {
  // var audio = new Audio("/clones/spotify/songs/" + track);
  // audio.pause();
  playtrack.src = "svgs/play.svg";
  currentSong.src = `${folding}` + track;
  if (!pause) {
    currentSong.play();
    playtrack.src = "svgs/pause.svg";
  }
  document.querySelector(".songinfo").innerHTML = decodeURI(track);
  document.querySelector(".songtime").innerHTML = "00:00";
};

async function getSongs(song_folders) {
  let a = await fetch("" + song_folders);
  // let a = await fetch("http://127.0.0.1:5500/songs");
  let response = await a.text();
  // console.log(response);

  let div = document.createElement("div");
  div.innerHTML = response;
  let as = div.getElementsByTagName("a");
  songs = [];
  // console.log(songs)
  for (let index = 0; index < as.length; index++) {
    const element = as[index];
    if (element.href.endsWith(".mp3")) {
      // songs.push(element.href.split("songs/")[1]);
      songs.push(element.href.split(song_folders)[1]);
    }
  }
  console.log(songs);

  // return songs;
}

// console.log(songs);

async function song_wrap() {
  Array.from(document.getElementsByClassName("card")).forEach((e) => {
    // console.log(e);
    e.addEventListener("click", (f) => {
      // console.log()

      document.querySelector(".songinfo").innerHTML = "";
      currentSong.src = "";
      playing("", "", true)

      playtrack.src = "svgs/play.svg";

      ff = e.dataset.folder;
      console.log(ff);
      songs = [];
      async function fui() {
        // console.log()
        await getSongs(ff);
        // return songs;
        console.log(songs);

        let songUl = document
          .querySelector(".songlist")
          .getElementsByTagName("ul")[0];
        songUl.innerHTML = "";
        for (const song of songs) {
          songUl.innerHTML =
            songUl.innerHTML +
            `<li>
<img class="invert" src="svgs/musci.svg" alt="" />
<div class="info">
<div>${song.replaceAll("%20", " ")}</div>
<div>Nikhil</div>
</div>
<div class="playnow">
<span>Play Now</span>
<img class="invert" src="svgs/play.svg" alt="" />
</div>

</li>`;
        }

        let currr;
        Array.from(
          document.querySelector(".songlist").getElementsByTagName("li")
        ).forEach((e) => {
          // console.log(e.querySelector(".info").firstElementChild.innerHTML)
          e.addEventListener("click", (element) => {
            // console.log(e.querySelector(".info").firstElementChild.innerHTML);
            currr = e.querySelector(".info").firstElementChild.innerHTML;

            try {
              playing(
                e.querySelector(".info").firstElementChild.innerHTML,
                ff + "/",
                false
              );
            } catch (error) {
              playing(
                e
                  .querySelector(".info")
                  .firstElementChild.innerHTML.replaceAll(" ", "%20"),
                ff + "/",
                false
              );
              console.log(
                e
                  .querySelector(".info")
                  .firstElementChild.innerHTML.replaceAll(" ", "%20")
              );
            }
          });
        });

        prev.addEventListener("click", () => {
          // console.log("target " + target);
          let target = "/" + currentSong.src.split("/").slice(-1)[0];
          let index = songs.indexOf(currr);
          console.log("Target " + target);
          console.log(index);
          if (index > 0) {
            playing(songs[index - 1], ff + "/", false);
            currr = songs[index - 1];
          } else {
            alert("Out of range");
          }
        });
        next.addEventListener("click", () => {
          // console.log("target " + target);
          let target = "/" + currentSong.src.split("/").slice(-1)[0];
          let index = songs.indexOf(currr);
          console.log("Target " + target);
          console.log(index);
          if (songs.length - 1 > index) {
            playing(songs[index + 1], ff + "/", false);
            currr = songs[index + 1];
          } else {
            alert("Out of range");
          }
        });
      }
      fui();
    });
  });
}

async function main() {
  addingfoldersong(
    "https://i.scdn.co/image/ab67616d00001e021e63de6489803c2b39e7f8e5",
    "Love Hotel",
    "Nikhil Banswal",
    "songs/songs1"
  );
  addingfoldersong(
    "https://i.scdn.co/image/ab67616d00001e021e63de6489803c2b39e7f8e5",
    "Love Hotel",
    "Nikhil Banswal",
    "songs/songs2"
  );
  addingfoldersong(
    "https://i.scdn.co/image/ab67616d00001e021e63de6489803c2b39e7f8e5",
    "Love Hotel",
    "Nikhil Banswal",
    "songs/songs2"
  );
  addingfoldersong(
    "https://i.scdn.co/image/ab67616d00001e021e63de6489803c2b39e7f8e5",
    "Love Hotel",
    "Nikhil Banswal",
    "songs/songs2"
  );
  addingfoldersong(
    "https://i.scdn.co/image/ab67616d00001e021e63de6489803c2b39e7f8e5",
    "Love Hotel",
    "Nikhil Banswal",
    "songs/songs2"
  );
  addingfoldersong(
    "https://i.scdn.co/image/ab67616d00001e021e63de6489803c2b39e7f8e5",
    "Love Hotel",
    "Nikhil Banswal",
    "songs/songs2"
  );
  addingfoldersong(
    "https://i.scdn.co/image/ab67616d00001e021e63de6489803c2b39e7f8e5",
    "Love Hotel",
    "Nikhil Banswal",
    "songs/songs2"
  );
  addingfoldersong(
    "https://i.scdn.co/image/ab67616d00001e021e63de6489803c2b39e7f8e5",
    "Love Hotel",
    "Nikhil Banswal",
    "songs/songs2"
  );
  await song_wrap();

  // console.log(songs);
  // playtrack.src = songs[0]

  // console.log(ff)

  playtrack.addEventListener("click", () => {
    if (currentSong.paused) {
      currentSong.play();
      playtrack.src = "svgs/pause.svg";
    } else {
      currentSong.pause();
      playtrack.src = "svgs/play.svg";
    }
  });

  function convertSecondsToMinSec(seconds) {
    // let num = 4.567;
    if (isNaN(seconds) || seconds < 0) {
      return "00:00";
    }
    let withoutDecimals = Math.floor(seconds); // 4
    const minutes = Math.floor(withoutDecimals / 60);
    const remainingSeconds = withoutDecimals % 60;
    // Pad single digit seconds with a leading zero
    const formattedSeconds =
      remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds;
    return minutes + ":" + formattedSeconds;
  }

  currentSong.addEventListener("timeupdate", () => {
    // console.log(currentSong.currentTime, currentSong.duration);

    document.querySelector(".songtime").innerHTML = `${convertSecondsToMinSec(
      currentSong.currentTime
    )}/${convertSecondsToMinSec(currentSong.duration)}`;

    document.querySelector(".circle").style.left =
      (currentSong.currentTime / currentSong.duration) * 100 + "%";
  });

  document.querySelector(".seekbar").addEventListener("click", (e) => {
    console.log(e.target.getBoundingClientRect().width, e.offsetX);
    let percent = (e.offsetX / e.target.getBoundingClientRect().width) * 100;
    document.querySelector(".circle").style.left = percent + "%";
    currentSong.currentTime = (currentSong.duration * percent) / 100;
  });

  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0%";
  });
  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-200%";
  });

  document
    .querySelector(".range")
    .getElementsByTagName("input")[0]
    .addEventListener("change", (e) => {
      console.log(e.target.value);
      currentSong.volume = parseInt(e.target.value) / 100;
      let vol = parseInt(e.target.value) / 100;
      if(currentSong.volume > 0){
        document.querySelector(".volume>img").target.src = document.querySelector(".volume>img").target.src.replace("svgs/mute.svg", "svgs/volume.svg")
      }
      // currentSong.setVolume(vol);
    });


    //Add event Listener to mute the track
    document.querySelector(".volume>img").addEventListener("click", (e)=>{
      console.log(e.target)
      if(e.target.src.includes("svgs/volume.svg")){
        e.target.src = e.target.src.replace("svgs/volume.svg", "svgs/mute.svg")
        currentSong.volume = 0;
        document.querySelector(".range").getElementsByTagName("input")[0].value = 0;
      }
      else if(e.target.src.includes("svgs/mute.svg")){
        e.target.src = e.target.src.replace("svgs/mute.svg", "svgs/volume.svg")
        currentSong.volume = .10;
        
        document.querySelector(".range").getElementsByTagName("input")[0].value = 10;
      }
    })
}
main();
