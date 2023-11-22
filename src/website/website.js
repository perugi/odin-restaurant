import home from "./home/home";
import menu from "./menu/menu";
import locations from "./locations/locations";

export default function generateWebsite() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createNavigation([home, menu, locations]));
  content.appendChild(createSubpage());
  content.appendChild(createFooter());

  renderSubpage(home);
}

function createHeader() {
  const header = document.createElement("header");
  header.textContent = "White Castle Burger";

  return header;
}

function createNavigation(subpageObjs) {
  const nav = document.createElement("nav");

  subpageObjs.forEach((subpageObj) => {
    const subpageElement = document.createElement("div");
    subpageElement.textContent = subpageObj.pageName;
    subpageElement.addEventListener("click", () => {
      renderSubpage(subpageObj);
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

function renderSubpage(subpageObj) {
  const subpage = document.getElementById("subpage");
  subpage.innerHTML = "";
  subpage.appendChild(subpageObj.createSubpage());
}

function createFooter() {
  const footer = document.createElement("footer");
  footer.textContent = "Copyright 2023";

  return footer;
}
