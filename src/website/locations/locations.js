import Location from "./whitecastle.png";

const locations = {
  pageName: "Locations",

  createSubpage: () => {
    const content = document.createElement("div");

    const locationImage = new Image();
    locationImage.src = Location;
    content.appendChild(locationImage);

    const heading = document.createElement("h1");
    heading.textContent = "The house that Crave built.";
    content.appendChild(heading);

    const locationForm = document.createElement("form");
    locationForm.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    content.appendChild(locationForm);

    const locationInput = document.createElement("input");
    locationInput.type = "text";
    locationInput.placeholder = "Enter location";
    locationForm.appendChild(locationInput);

    const findButton = document.createElement("input");
    findButton.type = "submit";
    findButton.value = "Find a Castle";
    locationForm.appendChild(findButton);

    return content;
  },
};

export default locations;
