import createHome from "./home/home";
import createMenu from "./menu/menu";
import createLocations from "./locations/locations";

export default function generateWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createNavigation());
  content.appendChild(createSubpage());
  content.appendChild(createFooter());

  renderSubpage(createHome());
}

function createHeader() {
  const header = document.createElement("header");
  header.textContent = "White Castle Burger";

  return header;
}

function createNavigation() {
  const nav = document.createElement("nav");

  const home = document.createElement("div");
  home.textContent = "Home";
  home.addEventListener("click", () => {
    renderSubpage(createHome());
  });

  const menu = document.createElement("div");
  menu.textContent = "Menu";
  menu.addEventListener("click", () => {
    renderSubpage(createMenu());
  });

  const locations = document.createElement("div");
  locations.textContent = "Locations";
  locations.addEventListener("click", () => {
    renderSubpage(createLocations());
  });

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(locations);

  return nav;
}

function createSubpage() {
  const subpage = document.createElement("div");
  subpage.setAttribute("id", "subpage");

  return subpage;
}

function renderSubpage(subpageContent) {
  const suppage = document.getElementById("subpage");
  suppage.innerHTML = "";
  suppage.appendChild(subpageContent);
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.textContent = "Copyright 2023";

  return footer;
}
