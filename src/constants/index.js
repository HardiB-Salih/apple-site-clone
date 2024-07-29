import {
  blackImg,
  blueImg,
  highlightFirstVideo,
  highlightFourthVideo,
  highlightSecondVideo,
  highlightThirdVideo,
  whiteImg,
  yellowImg,
} from "../utils";

export const navLists = ["Store", "Mac", "iPhone", "Support"];

export const hightlightsSlides = [
  {
    id: 1,
    textLists: [
      "Enter A17 Pro.",
      "Game‑changing chip.",
      "Groundbreaking performance.",
    ],
    video: highlightFirstVideo,
    videoDuration: 4,
  },
  {
    id: 2,
    textLists: ["Titanium.", "So strong. So light. So Pro."],
    video: highlightSecondVideo,
    videoDuration: 5,
  },
  {
    id: 3,
    textLists: [
      "iPhone 15 Pro Max has the",
      "longest optical zoom in",
      "iPhone ever. Far out.",
    ],
    video: highlightThirdVideo,
    videoDuration: 2,
  },
  {
    id: 4,
    textLists: ["All-new Action button.", "What will yours do?."],
    video: highlightFourthVideo,
    videoDuration: 3.63,
  },
];

export const models = [
  {
    id: 1,
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  },
  {
    id: 2,
    title: "iPhone 15 Pro in Blue Titanium",
    color: ["#53596E", "#6395ff", "#21242e"],
    img: blueImg,
  },
  {
    id: 3,
    title: "iPhone 15 Pro in White Titanium",
    color: ["#C9C8C2", "#ffffff", "#C9C8C2"],
    img: whiteImg,
  },
  {
    id: 4,
    title: "iPhone 15 Pro in Black Titanium",
    color: ["#454749", "#3b3b3b", "#181819"],
    img: blackImg,
  },
];

export const sizes = [
  { label: '6.1"', value: "small" },
  { label: '6.7"', value: "large" },
];

export const footerLinks = [
  "Privacy Policy",
  "Terms of Use",
  "Sales Policy",
  "Legal",
  "Site Map",
];

export const imageSlides = [
  {
    id: 1,
    image:
      "https://i.pinimg.com/564x/fb/7a/c4/fb7ac44c0dab640b1b45467f67e783b0.jpg",
    alt: "First Slide",
    textLists: ["First Slide Text 1", "First Slide Text 2"],
  },
  {
    id: 2,
    image:
      "https://i.pinimg.com/564x/2a/20/0d/2a200d050d9d8695b981b95c2e70f6aa.jpg",
    alt: "Second Slide",
    textLists: ["Second Slide Text 1", "Second Slide Text 2"],
  },
  {
    id: 3,
    image:
      "https://i.pinimg.com/564x/88/ab/f3/88abf3e2a6a9952db3bf0e42ceb755b6.jpg",
    alt: "Third Slide",
    textLists: ["Third Slide Text 1", "Third Slide Text 2"],
  },
  {
    id: 4,
    image:
      "https://i.pinimg.com/564x/99/be/e8/99bee84d62270117a829482d6796aa99.jpg",
    alt: "Fourth Slide",
    textLists: ["Fourth Slide Text 1", "Fourth Slide Text 2"],
  },
];
