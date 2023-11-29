import sliderItems from "./slider_items";

const menu = {
  pageName: "Menu",

  createSubpage: () => {
    const content = document.createElement("div");
    content.classList.add("menu");

    const heading = document.createElement("h1");
    heading.textContent = "Slider experts since 1921";
    content.appendChild(heading);

    const sliderBackground = document.createElement("div");
    sliderBackground.classList.add("slider-background");
    content.appendChild(sliderBackground);

    const sliderGrid = document.createElement("div");
    sliderGrid.classList.add("slider-grid");
    sliderBackground.appendChild(sliderGrid);

    sliderItems.forEach((slider) => {
      const sliderCard = document.createElement("div");
      sliderCard.classList.add("slider-card");

      const sliderImage = document.createElement("img");
      sliderImage.src = slider.image;
      console.log(sliderImage);
      sliderImage.classList.add("slider-image");
      sliderCard.appendChild(sliderImage);

      const sliderName = document.createElement("div");
      sliderName.classList.add("slider-name");
      sliderName.textContent = slider.name;
      sliderCard.appendChild(sliderName);

      sliderGrid.appendChild(sliderCard);
    });

    return content;
  },
};

export default menu;
