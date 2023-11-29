import Burger from "./burger.jpeg";
import { renderSubpage } from "../renderSubpage";
import menu from "../menu/menu";

const home = {
  pageName: "Home",

  createSubpage: () => {
    const content = document.createElement("div");
    content.classList.add("home");

    const homeContent = document.createElement("div");
    homeContent.classList.add("home-content");
    content.appendChild(homeContent);

    const heading1 = document.createElement("h1");
    heading1.textContent = "Home of";
    homeContent.appendChild(heading1);

    const heading2 = document.createElement("h1");
    heading2.textContent = "the Crave";
    homeContent.appendChild(heading2);

    const menuButton = document.createElement("button");
    menuButton.textContent = "Explore Menu";
    menuButton.addEventListener("click", () => {
      renderSubpage(menu);
    });
    homeContent.appendChild(menuButton);

    return content;
  },
};

export default home;
