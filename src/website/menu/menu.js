import Slider from "./slider.jpg";

export default class Menu {
  pageName = "Menu";

  static createSubpage() {
    const subpage = document.createElement("div");

    const heading = document.createElement("h1");
    heading.textContent = "This is on the menu:";
    subpage.appendChild(heading);

    const sliderImage = new Image();
    sliderImage.src = Slider;
    subpage.appendChild(sliderImage);

    return subpage;
  }
}
