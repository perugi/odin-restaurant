import Slider from "./slider.jpg";

const content = document.getElementById("content");

const heading = document.createElement("h1");
heading.textContent = "White Castle";
content.appendChild(heading);

const sliderImage = new Image();
sliderImage.src = Slider;
content.appendChild(sliderImage);

const description = document.createElement("p");
description.textContent = "Welcome to our restaurant!";
content.appendChild(description);
