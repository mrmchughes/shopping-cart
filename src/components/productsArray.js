import uniqid from "uniqid";
const importAll = (r) => {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

const images = importAll(
  require.context("/src/imgs", false, /\.(png|jpeg|svg)$/)
);

const productsArray = [
  {
    image: images["Handy_Haversack.jpeg"],
    alt: "Handy Haversack",
    name: "Handy Haversack",
    price: 1350,
    id: uniqid(),
  },
  {
    image: images["Periapt_of_Wound_Closure.jpeg"],
    alt: "Periapt of Wound Closure",
    name: "Periapt of Wound Closure",
    price: 150,
    id: uniqid(),
  },
  {
    image: images["Cloak_of_Protection.jpeg"],
    alt: "Cloak of Protection",
    name: "Cloak of Protection",
    price: 800,
    id: uniqid(),
  },
  {
    image: images["Pearl_of_Power.jpeg"],
    alt: "Pearl of Power",
    name: "Pearl of Power",
    price: 350,
    id: uniqid(),
  },
  {
    image: images["Shield.jpeg"],
    alt: "Plus One Shield",
    name: "+1 Shield",
    price: 550,
    id: uniqid(),
  },
  {
    image: images["Bracers_of_Defense.jpeg"],
    alt: "Bracers of Defense",
    name: "Bracers of Defense",
    price: 1200,
    id: uniqid(),
  },
  {
    image: images["Hilt_of_a_broken_longsword.jpeg"],
    alt: "Hilt of a broken Longsword",
    name: "Hilt of a broken Longsword",
    price: 300,
    id: uniqid(),
  },
  {
    image: images["Cloak_of_Elvenkind.jpeg"],
    alt: "Cloak of Elvenkind",
    name: "Cloak of Elvenkind",
    price: 450,
    id: uniqid(),
  },
  {
    image: images["Ioun_Stone_of_Fortitude.jpeg"],
    alt: "Ioun Stone of Fortitude",
    name: "Ioun Stone of Fortitude",
    price: 5500,
    id: uniqid(),
  },
];

export default productsArray;
