  console.log("Welcome to CSP-S");
const cursor = document.querySelector(".cursor");


document.addEventListener("mousemove", (e)=>{

cursor.style.left = e.clientX + "px";

cursor.style.top = e.clientY + "px";

});
window.onload = function(){

    const button = document.getElementById("mode-toggle");

    button.onclick = function(){

        document.body.classList.toggle("light-mode");

    };

};
document.querySelectorAll("a, button").forEach(item => {

    item.addEventListener("mouseenter", () => {

        cursor.style.width = "30px";
        cursor.style.height = "30px";

    });


    item.addEventListener("mouseleave", () => {

        cursor.style.width = "20px";
        cursor.style.height = "20px";

    });

});
particlesJS("particles-js", {
  particles: {
    number: {
      value: 55,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: "#ff2a2a"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.4,
      random: true
    },
    size: {
      value: 2.5,
      random: true
    },
    line_linked: {
      enable: false
    },
    move: {
      enable: true,
      speed: 1.2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out"
    }
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: false
      },
      onclick: {
        enable: false
      },
      resize: true
    }
  },
  retina_detect: true
});
document.addEventListener("DOMContentLoaded", () => {

    const music = document.getElementById("bgMusic");
    const button = document.getElementById("musicToggle");

    button.onclick = function () {

        if (music.paused) {

            music.play();

            button.classList.add("playing");
            document.body.classList.add("music-playing");

        } else {

            music.pause();

            button.classList.remove("playing");
            document.body.classList.remove("music-playing");

        }

    };

});

