import Burger from "./burger.jpeg";
import { renderSubpage } from "../renderSubpage";
import menu from "../menu/menu";

const home = {
  pageName: "Home",

  createSubpage: () => {
    const content = document.createElement("div");
    content.classList.add("home");

    // const logoImage = new Image();
    // logoImage.src = Burger;
    // logoImage.classList.add("home-image");
    // content.appendChild(logoImage);

    const homeText = document.createElement("div");
    homeText.classList.add("home-text");
    content.appendChild(homeText);

    const heading1 = document.createElement("h1");
    heading1.textContent = "Home of";
    homeText.appendChild(heading1);

    const heading2 = document.createElement("h1");
    heading2.textContent = "the Crave";
    homeText.appendChild(heading2);

    const menuButton = document.createElement("button");
    menuButton.textContent = "Explore Menu";
    menuButton.addEventListener("click", () => {
      renderSubpage(menu);
    });
    homeText.appendChild(menuButton);

    return content;
  },
};

export default home;
