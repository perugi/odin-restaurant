import Slider from "./slider.jpg";

const menu = {
  pageName: "Menu",

  createSubpage: () => {
    const content = document.createElement("div");

    const heading = document.createElement("h1");
    heading.textContent = "This is on the menu:";
    content.appendChild(heading);

    const sliderImage = new Image();
    sliderImage.src = Slider;
    content.appendChild(sliderImage);

    return content;
  },
};

export default menu;
