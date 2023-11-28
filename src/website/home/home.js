import Burger from "./burger.jpeg";
import { renderSubpage } from "../renderSubpage";
import menu from "../menu/menu";

const home = {
  pageName: "Home",

  createSubpage: () => {
    const content = document.createElement("div");

    const logoImage = new Image();
    logoImage.src = Burger;
    content.appendChild(logoImage);

    const heading = document.createElement("h1");
    heading.textContent = "Home of the Crave";
    content.appendChild(heading);

    const menuButton = document.createElement("button");
    menuButton.textContent = "Explore Menu";
    menuButton.addEventListener("click", () => {
      renderSubpage(menu);
    });
    content.appendChild(menuButton);

    return content;
  },
};

export default home;
