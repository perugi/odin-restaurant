import home from "./home/home";
import menu from "./menu/menu";
import locations from "./locations/locations";
import history from "./history/history";
import { renderSubpage } from "./renderSubpage";
import Logo from "./logo.png";
import ghLogo from "./githublogo.png";

export default function generateWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createNavigation([home, menu, locations, history]));
  content.appendChild(createSubpagePlaceholder());
  content.appendChild(createFooter());

  renderSubpage(home);
}

function createNavigation(subpageObjs) {
  const nav = document.createElement("nav");

  subpageObjs.forEach((subpageObj) => {
    const subpageElement = document.createElement("div");
    if (subpageObj.pageName === "Home") {
      const logoImage = document.createElement("img");
      logoImage.classList.add("logo");
      logoImage.src = Logo;
      subpageElement.appendChild(logoImage);
    } else {
      subpageElement.textContent = subpageObj.pageName;
    }
    subpageElement.addEventListener("click", () => {
      renderSubpage(subpageObj);
    });

    nav.appendChild(subpageElement);
  });

  return nav;
}

function createSubpagePlaceholder() {
  const subpage = document.createElement("div");
  subpage.setAttribute("id", "subpage");

  return subpage;
}

function createFooter() {
  const footer = document.createElement("footer");

  const ghLink = document.createElement("a");
  ghLink.href = "https://github.com/perugi/";

  const madeBy = document.createElement("div");
  madeBy.textContent = "Made by";
  ghLink.appendChild(madeBy);

  const ghLogoImage = document.createElement("img");
  ghLogoImage.src = ghLogo;
  ghLink.appendChild(ghLogoImage);

  const name = document.createElement("div");
  name.textContent = "Dominik Perusko";
  ghLink.appendChild(name);

  footer.appendChild(ghLink);

  return footer;
}
