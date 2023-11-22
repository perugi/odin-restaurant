import Globe from "./globe.png";

export default function createLocations() {
  const content = document.createElement("div");

  const heading = document.createElement("h1");
  heading.textContent = "First, we take Manhattan. Then we take Berlin!";
  content.appendChild(heading);

  const globeImage = new Image();
  globeImage.src = Globe;
  content.appendChild(globeImage);

  return content;
}
