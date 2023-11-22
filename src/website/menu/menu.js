import Slider from "./slider.jpg";

export default function createMenu() {
  const content = document.createElement("div");

  const heading = document.createElement("h1");
  heading.textContent = "This is on the menu:";
  content.appendChild(heading);

  const sliderImage = new Image();
  sliderImage.src = Slider;
  content.appendChild(sliderImage);

  return content;
}
