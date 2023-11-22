import Logo from "./logo.png";

const home = {
  pageName: "Home",

  createSubpage: () => {
    const content = document.createElement("div");

    const heading = document.createElement("h1");
    heading.textContent = "Welcome!";
    content.appendChild(heading);

    const logoImage = new Image();
    logoImage.src = Logo;
    content.appendChild(logoImage);

    return content;
  },
};

export default home;
