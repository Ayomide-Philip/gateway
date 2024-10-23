import createVideo from "./subcomponet/videoBanner.js";

const mission = {
  heading: "Our Purpose Statement | Our Mission and Vision as a Church.",
  videoBanner: createVideo(
    "The Mission and Vision of the Church",
    "Learn more about the vision and mission of our Church"
  ),
  greatCommission: {
    heading:
      "The Gateway Baptist Church (Community of Grace) exists to fulfill the Great Commandment and the great Commission.",
    figure: [
      {
        blockQuote:
          "Love the Lord your God with all your heart and with your soul and with all your mind... Love your neighbour as yourself. All the law Prophets hang on these two commandement...",
        blockQuoteFooter: "Matthew 22:37-40",
      },
      {
        blockQuote:
          "Go and make disciples of all nation baptizing them in the name of the Father and the Son and the Holy Spirit, and teaching them to obey everything i have commanded you.",
        blockQuoteFooter: "Matthew 28:9-20",
      },
    ],
    mission: {
      heading: "The following is then Our Mission Statement",
    },
  },
};

export default mission;
