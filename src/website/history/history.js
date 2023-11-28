import First from "./first_wc.jpeg";

const history = {
  pageName: "History",

  createSubpage: () => {
    const content = document.createElement("div");

    const heading = document.createElement("h1");
    heading.textContent = "It began with an idea.";
    content.appendChild(heading);

    const history = document.createElement("p");
    history.textContent =
      "In 1921, Billy Ingram launched a family-owned business with $700 and an idea, selling five-cent, small, square hamburgers so easy to eat, they were dubbed Sliders and sold by the sack. In 2014, Time® Magazine declared our iconic Original Slider® the most influential burger of all time. Today our family-owned business sells the same humble, 100 percent USDA beef patty with onions and pickle, creating memorable moments for Craver generations everywhere. The only thing better than polishing off a Sack of Sliders alone, is doing it with friends. Could it get any better than that? White Castle. Because The Crave Is A Powerful Thing®.";
    content.appendChild(history);

    const firstImage = new Image();
    firstImage.src = First;
    content.appendChild(firstImage);

    return content;
  },
};

export default history;
