import Logo from "./logo.png";

export default function createHome() {
  const content = document.createElement("div");

  const heading = document.createElement("h1");
  heading.textContent = "Welcome!";
  content.appendChild(heading);

  const logoImage = new Image();
  logoImage.src = Logo;
  content.appendChild(logoImage);

  return content;
}
