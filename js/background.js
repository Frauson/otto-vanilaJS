const images = [
  "img_00.jpeg",
  "img_01.jpeg",
  "img_02.jpeg",
  "img_03.jpeg",
  "img_04.jpeg",
  "img_05.jpeg",
  "img_06.jpeg",
  "img_07.jpeg",
  "img_08.jpeg",
  "img_09.jpeg",
  "img_10.jpeg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
