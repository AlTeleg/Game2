import image from "../img/goblin.png";

export default function game() {
  Array.prototype.random = function () {
    return this[Math.floor(Math.random() * this.length)];
  };

  document.addEventListener("DOMContentLoaded", () => {
    const fieldArray = Array.from(document.querySelectorAll(".game_field"));
    let count = 0;
    let misses = 4;
    const counter = document.querySelector(".counter-got");
    const miss = document.querySelector(".counter-misses");
    const container = document.querySelector(".game_container");
    const img = new Image();
    img.src = image;
    img.alt = "goblin";
    fieldArray.random().appendChild(img);
    let speed = 1000;

    function repeat() {
      const next = fieldArray.random();

      if (img.parentElement !== next) {
        next.appendChild(img);
        img.style.display = "inline";
      }
    }

    setInterval(() => {
      clearInterval(repeater);
      img.style.display = "inline";
      speed -= 20;
      if (speed < 300) {
        speed = 300;
      }
      repeater = setInterval(repeat, speed);
    }, 5000);

    let repeater = setInterval(() => {
      repeat();
    }, speed);

    setTimeout(() => {
      setInterval(() => {
        container.style.transform = "rotate(0deg)";
      }, 3000);
    }, 30000);

    setTimeout(() => {
      container.style.transform = "rotate(45deg)";
      img.style.transform = "rotate(-45deg)";
    }, 6000);

    setTimeout(() => {
      container.style.transform = "rotate(0deg)";
      img.style.transform = "rotate(0deg)";
    }, 10000);

    setTimeout(() => {
      container.style.transform = "rotate(-45deg)";
      img.style.transform = "rotate(45deg)";
    }, 13000);

    setTimeout(() => {
      setInterval(() => {
        container.style.transform = "rotate(45deg)";
        img.style.transform = "rotate(-45deg)";
      }, 1500);
    }, 18000);

    setTimeout(() => {
      setInterval(() => {
        container.style.transform = "rotate(0deg)";
        img.style.transform = "rotate(0deg)";
      }, 5000);
    }, 20000);

    setTimeout(() => {
      setInterval(() => {
        container.style.transform = "rotate(-45deg)";
        img.style.transform = "rotate(45deg)";
      }, 2000);
    }, 26000);

    img.addEventListener("click", () => {
      count++;
      misses = 5;
      miss.textContent = `YOU ONLY GOT "${misses}" MISSES LEFT`;
      img.style.display = "none";
      if (count === 1) {
        counter.textContent = "You got me once";
      } else {
        counter.textContent =
          "You got me " + '"' + count.toString() + '" ' + "times";
      }
    });

    container.addEventListener("click", () => {
      misses--;
      if (misses < 0) {
        alert("YOU LOST!");
        window.location.reload();
      }
      miss.textContent = `YOU ONLY GOT "${misses}" MISSES LEFT`;
    });
  });
}
