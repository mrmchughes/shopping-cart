import uniqid from "uniqid";

interface Product {
  image: string;
  alt: string;
  name: string;
  price: number;
  quantity: number;
  id: string;
}

const productsArray: Product[] = [
  {
    image: require("../imgs/Players Handbook.png"),
    alt: "Player's Handbook",
    name: "Player's Handbook",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: require("../imgs/Dungeon Masters Guide.png"),
    alt: "Dungeon Master's Guide",
    name: "Dungeon Master's Guide",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: require("../imgs/Monster Manual.png"),
    alt: "Monster Manual",
    name: "Monster Manual",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: require("../imgs/Sword Coast Adventurer's Guide.png"),
    alt: "Sword Coast Adventurer’s Guide",
    name: "Sword Coast Adventurer’s Guide",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: require("../imgs/Volo's Guide to Monsters.png"),
    alt: "Volo’s Guide to Monsters",
    name: "Volo’s Guide to Monsters",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: require("../imgs/Xanathar's Guide to Everything.png"),
    alt: "Xanathar's Guide to Everything",
    name: "Xanathar's Guide to Everything",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: require("../imgs/Mordenkainen's Tome of Foes.png"),
    alt: "Mordenkainen's Tome of Foes",
    name: "Mordenkainen's Tome of Foes",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: require("../imgs/Wayfinder's Guide to Eberron.png"),
    alt: "Wayfinder's Guide to Eberron",
    name: "Wayfinder's Guide to Eberron",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: require("../imgs/Guildmaster's Guide to Ravnica.png"),
    alt: "Guildmaster's Guide to Ravnica",
    name: "Guildmaster's Guide to Ravnica",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: require("../imgs/Acquisitions Incorporated.png"),
    alt: "Acquisitions Incorporated",
    name: "Acquisitions Incorporated",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: require("../imgs/Eberron: Rising from the Last War.png"),
    alt: "Eberron: Rising from the Last War",
    name: "Eberron: Rising from the Last War",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: require("../imgs/Explorer's Guide to Wildemount.png"),
    alt: "Explorer's Guide to Wildemount",
    name: "Explorer's Guide to Wildemount",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: require("../imgs/Mythic Odysseys of Theros.png"),
    alt: "Mythic Odysseys of Theros",
    name: "Mythic Odysseys of Theros",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: require("../imgs/Mordenkainen's Fiendish Folio Volume 1.png"),
    alt: "Mordenkainen's Fiendish Folio Volume 1",
    name: "Mordenkainen's Fiendish Folio Volume 1",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: require("../imgs/One Grung Above.png"),
    alt: "One Grung Above",
    name: "One Grung Above",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: require("../imgs/The Tortle Package.png"),
    alt: "The Tortle Package",
    name: "The Tortle Package",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: require("../imgs/Tasha's Cauldron of Everything.png"),
    alt: "Tasha's Cauldron of Everything",
    name: "Tasha's Cauldron of Everything",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: require("../imgs/Van Richten's Guide to Ravenloft.png"),
    alt: "Van Richten's Guide to Ravenloft",
    name: "Van Richten's Guide to Ravenloft",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: require("../imgs/Fizban's Treasury of Dragons.png"),
    alt: "Fizban's Treasury of Dragons",
    name: "Fizban's Treasury of Dragons",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
  {
    image: require("../imgs/Strixhaven: A Curriculum of Chaos.png"),
    alt: "Strixhaven: A Curriculum of Chaos",
    name: "Strixhaven: A Curriculum of Chaos",
    price: 29.99,
    quantity: 1,
    id: uniqid(),
  },
];

export default productsArray;
