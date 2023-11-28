import Slider from "./slider";
import _1921Slider from "./images/1921-Slider.png";
import ImpossibleSlider from "./images/Impossible-Slider.png";
import OriginalSlider from "./images/Original-Slider.png";
import OriginalCheeseSlider from "./images/Original-Cheese-Slider.png";
import BaconCheeseSlider from "./images/Bacon-Cheese-Slider.png";
import DoubleCheeseSlider from "./images/Double-Cheese-Slider.png";
import CrispyChickenSlider from "./images/Crispy-Chicken-Slider.png";
import ChickenRingSlider from "./images/Chicken-Ring-Slider.png";
import ChickenWaffleSlider from "./images/Chicken-And-Waffle-Slider.png";
import BaconCheddarChickenSlider from "./images/Smoked-Cheddar-Bacon-Chicken.png";
import VeggieSlider from "./images/Veggie-Slider.png";
import PankoBreadedFishSlider from "./images/Panko-Breaded-Fish-Slider.png";

const imageFolder = "./images/";

const sliders = [
  Slider("The 1921 Slider", _1921Slider),
  Slider("The Impossible Slider with Smoked Cheddar Cheese", ImpossibleSlider),
  Slider("The Original Slider", OriginalSlider),
  Slider("Cheese Slider", OriginalCheeseSlider),
  Slider("Bacon Cheese Slider", BaconCheeseSlider),
  Slider("Double Cheese Slider", DoubleCheeseSlider),
  Slider("Crispy Chicken Breast Slider", CrispyChickenSlider),
  Slider("Chicken Ring Slider", ChickenRingSlider),
  Slider("Chicken & Waffles Slider", ChickenWaffleSlider),
  Slider("Bacon & Cheddar Chicken Slider", BaconCheddarChickenSlider),
  Slider("Veggie Slider", VeggieSlider),
  Slider("Panko Breaded Fish Slider", PankoBreadedFishSlider),
];

export default sliders;
