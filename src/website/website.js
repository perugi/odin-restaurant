import Home from "./home/home";
import Menu from "./menu/menu";
import Locations from "./locations/locations";

export default function generateWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createNavigation([Home, Menu, Locations]));
  content.appendChild(createSubpage());
  content.appendChild(createFooter());

  renderSubpage(Home);
}

function createHeader() {
  const header = document.createElement("header");
  header.textContent = "White Castle Burger";

  return header;
}

function createNavigation(subpages) {
  const nav = document.createElement("nav");

  subpages.forEach((subpage) => {
    const subpageElement = document.createElement("div");
    subpageElement.textContent = subpage.name;
    subpageElement.addEventListener("click", () => {
      renderSubpage(subpage);
    });

    nav.appendChild(subpageElement);
  });

  return nav;
}

function createSubpage() {
  const subpage = document.createElement("div");
  subpage.setAttribute("id", "subpage");

  return subpage;
}

function renderSubpage(subpage) {
  const suppage = document.getElementById("subpage");
  suppage.innerHTML = "";
  suppage.appendChild(subpage.createSubpage());
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.textContent = "Copyright 2023";

  return footer;
}
