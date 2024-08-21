let text = $("#hero-text");
let sky = $("#sky");
let mountain = $("#mountain");
let person = $("#person");
let forest1 = $("#forest1");
let birds1 = $("#birds1");
let birds2 = $("#birds2");
let birds3 = $("#birds3");
let birds4 = $("#birds4");
let birdsUpper = $("#birds-upper");
let offert1 = $("#offert1");
let offert2 = $("#offert2");
let offert3 = $("#offert3");
let info1 = $("#info-1");

const notes = [
  "1. Pack all stuff to suitcase and backpack.",
  "2. Go to airport and fly to Etiopia.",
  "3. Go to the hotel.",
  "4. Meet organizators and other members.",
  "5. Take fun!",
];

const mapCode = `
<div id="map" class="dual-item">
  <img src="./img/map/exclamation-1.png" 
        alt="exclamation mark" 
        class="map-upper" 
        style="animation: exclamation 1.5s infinite;">
  <img src="./img/map/exclamation-2.png" 
       alt="exclamation mark" 
       class="map-upper"
       style="animation: exclamation 1.5s .75s infinite;">
  <img src="./img/map/map.png" alt="pirat map">
</div>
`;

const info1Code = `
<div class="info-text dual-item">
  <h1>Journey of your life!</h1>
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dignissimos ipsam fugit fugiat ex, repudiandae in minima placeat similique dicta, vel saepe corrupti voluptatum dolore, ad possimus illum. Eveniet repudiandae officiis, tempora quasi necessitatibus in dolor quibusdam aliquid animi nulla velit alias qui eius ex fuga et labore numquam doloremque voluptatibus excepturi delectus maiores eos assumenda corporis! Harum, nesciunt? Sit dignissimos pariatur, accusamus in natus omnis repellat dolores nesciunt, ducimus optio dolorum aliquid ipsa? Suscipit, minima quisquam. Illo, eius corporis?
  </p>
</div>
`;

$(document).ready(() => {
  let width = window.innerWidth;

  if (width <= 1380) {
    info1.append(info1Code);
    info1.append(mapCode);
  } else {
    info1.append(mapCode);
    info1.append(info1Code);
  }

  let map = $("#map");

  let i = 0;
  let isWriting = false;
  function write() {
    var typed = new Typed(`#note-text-${i}`, {
      strings: [notes[i]],
      typeSpeed: 75,
      showCursor: false,
    });
    let interval = notes[i].length * 140;
    i++;
    if (i !== 5) setTimeout(write, interval);
  }

  let j = 24;
  let isAnimating = false;

  function mapAnimation() {
    let number;
    if (j.toString().length === 2) number = "0" + j.toString();
    else number = "00" + j.toString();
    const img = `<img src="./img/map/road/${number}.png" alt="${
      j === 0 ? "map x" : "map-road"
    }"
    class="map-upper map-road">`;
    map.append(img);
    if (j !== 0) setTimeout(mapAnimation, 200);
    j--;
  }

  $(window).scroll(function () {
    let value = window.scrollY;
    text.css("margin-top", value * 0.4 + "px");
    mountain.css("margin-top", value * 0.6 + "px");
    forest1.css("margin-top", value * 0.6 + "px");
    birds1.css("margin-top", value * 0.6 + "px");
    birds2.css("margin-top", value * 0.6 + "px");
    birds3.css("margin-top", value * 0.6 + "px");
    birds4.css("margin-top", value * 0.6 + "px");
    person.css("margin-top", value * 0.3 + "px");
    birdsUpper.css("margin-left", value * 0.3 + "px");
    sky.css("margin-top", value * 1 + "px");

    if (value > 540 && value < 900) {
      offert1.css("opacity", (value - 540) * 0.005);
      offert2.css("opacity", (value - 540) * 0.005);
      offert3.css("opacity", (value - 540) * 0.005);
      if (width > 1380) {
        offert2.css("margin-top", (value - 540) * 0.3 + "px");
        offert3.css("margin-top", (value - 540) * 0.6 + "px");
      }
    }
    if (value > (width > 1380 ? 1600 : 2600) && !isAnimating) {
      isAnimating = true;
      mapAnimation();
    }

    if (value > (width > 1380 ? 2200 : 3600) && !isWriting) {
      isWriting = true;
      write();
    }
  });
});

function navToggle() {
  $("nav").toggleClass("active");
  $(".nav-toggle-btn").toggleClass("active");
  const scrollAble = $(".nav-toggle-btn").hasClass("active")
    ? "hidden"
    : "visible";
  $("body").css("overflow", scrollAble);
}
