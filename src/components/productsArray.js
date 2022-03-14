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
    image: images["Players Handbook.jpeg"],
    alt: "Player's Handbook",
    name: "Player's Handbook",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: images["Dungeon Masters Guide.jpeg"],
    alt: "Dungeon Master's Guide",
    name: "Dungeon Master's Guide",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: images["Monster Manual.jpeg"],
    alt: "Monster Manual",
    name: "Monster Manual",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: images["Sword Coast Adventurer's Guide.jpeg"],
    alt: "Sword Coast Adventurer’s Guide",
    name: "Sword Coast Adventurer’s Guide",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: images["Volo's Guide to Monsters.jpeg"],
    alt: "Volo’s Guide to Monsters",
    name: "Volo’s Guide to Monsters",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: images["Xanathar's Guide to Everything.jpeg"],
    alt: "Xanathar's Guide to Everything",
    name: "Xanathar's Guide to Everything",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: images["Mordenkainen's Tome of Foes.jpeg"],
    alt: "Mordenkainen's Tome of Foes",
    name: "Mordenkainen's Tome of Foes",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: images["Wayfinder's Guide to Eberron.jpeg"],
    alt: "Wayfinder's Guide to Eberron",
    name: "Wayfinder's Guide to Eberron",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: images["Guildmaster's Guide to Ravnica.jpeg"],
    alt: "Guildmaster's Guide to Ravnica",
    name: "Guildmaster's Guide to Ravnica",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: images["Acquisitions Incorporated.jpeg"],
    alt: "Acquisitions Incorporated",
    name: "Acquisitions Incorporated",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: images["Eberron: Rising from the Last War.jpeg"],
    alt: "Eberron: Rising from the Last War",
    name: "Eberron: Rising from the Last War",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: images["Explorer's Guide to Wildemount.jpeg"],
    alt: "Explorer's Guide to Wildemount",
    name: "Explorer's Guide to Wildemount",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: images["Mythic Odysseys of Theros.jpeg"],
    alt: "Mythic Odysseys of Theros",
    name: "Mythic Odysseys of Theros",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: images["Mordenkainen's Fiendish Folio Volume 1.jpeg"],
    alt: "Mordenkainen's Fiendish Folio Volume 1",
    name: "Mordenkainen's Fiendish Folio Volume 1",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: images["One Grung Above.jpeg"],
    alt: "One Grung Above",
    name: "One Grung Above",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: images["The Tortle Package.png"],
    alt: "The Tortle Package",
    name: "The Tortle Package",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: images["Tasha's Cauldron of Everything.jpeg"],
    alt: "Tasha's Cauldron of Everything",
    name: "Tasha's Cauldron of Everything",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: images["Van Richten's Guide to Ravenloft.jpeg"],
    alt: "Van Richten's Guide to Ravenloft",
    name: "Van Richten's Guide to Ravenloft",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: images["Fizban's Treasury of Dragons.jpeg"],
    alt: "Fizban's Treasury of Dragons",
    name: "Fizban's Treasury of Dragons",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: images["Strixhaven: A Curriculum of Chaos.jpeg"],
    alt: "Strixhaven: A Curriculum of Chaos",
    name: "Strixhaven: A Curriculum of Chaos",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
];

export default productsArray;
