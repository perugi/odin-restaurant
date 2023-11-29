import Location from "./whitecastle.png";

const locations = {
  pageName: "Locations",

  createSubpage: () => {
    const content = document.createElement("div");
    content.classList.add("locations");

    const locationsContent = document.createElement("div");
    locationsContent.classList.add("locations-content");
    content.appendChild(locationsContent);

    const heading = document.createElement("h1");
    let headingText = document.createElement("span");
    headingText.textContent = "The house that";
    heading.appendChild(headingText);

    headingText = document.createElement("span");
    headingText.textContent = "Crave";
    heading.appendChild(headingText);

    headingText = document.createElement("span");
    headingText.textContent = "built";
    heading.appendChild(headingText);

    locationsContent.appendChild(heading);

    const locationForm = document.createElement("form");
    locationForm.addEventListener("submit", (e) => {
      e.preventDefault();
    });
    locationForm.classList.add("locations-form");
    locationsContent.appendChild(locationForm);

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
