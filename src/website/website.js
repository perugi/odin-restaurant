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
  const subpageLinks = document.createElement("div");
  subpageLinks.classList.add("subpage-links");
  nav.appendChild(subpageLinks);

  subpageObjs.forEach((subpageObj) => {
    const subpageElement = document.createElement("a");
    if (subpageObj.pageName === "Home") {
      subpageElement.classList.add("logo");
      const logo = document.createElement("img");
      logo.src = Logo;
      subpageElement.appendChild(logo);
      nav.insertBefore(subpageElement, subpageLinks);
    } else {
      subpageElement.textContent = subpageObj.pageName;
      subpageLinks.appendChild(subpageElement);
    }

    subpageElement.addEventListener("click", (e) => {
      for (let i = 0; i < subpageLinks.childNodes.length; i++) {
        subpageLinks.childNodes[i].classList.remove("active");
      }
      e.target.classList.add("active");
      renderSubpage(subpageObj);
    });
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
  ghLink.id = "gh-link";
  ghLink.href = "https://github.com/perugi/";

  const madeBy = document.createElement("div");
  madeBy.textContent = "Made by";
  ghLink.appendChild(madeBy);

  const ghLogoImage = document.createElement("img");
  ghLogoImage.src = ghLogo;
  ghLogoImage.id = "gh-logo";
  ghLink.appendChild(ghLogoImage);

  const name = document.createElement("div");
  name.textContent = "Dominik Perusko";
  ghLink.appendChild(name);

  footer.appendChild(ghLink);

  return footer;
}
