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
      list: [
        "To bring people to jesus and membership in his family.",
        "To develop them to Christ like maturity.",
        "To equip them for ministry in the church and for life mission in the world, and to magnify Gods name as a result.",
      ],
    },
  },
  departements: {
    heading:
      "To organize and maintain the following programmes and departments.",
    list: [
      "Sunday School",
      "Church Traning Programme",
      "Women Missionary Union",
      "Men Missionary Union",
      "House Fellowship / Cell Groups",
      "And any other programmes and departments as may be approved by the Nigerian Baptist Convention",
    ],
  },
  list: [
    "To encourage group activities for enhancing the growth of the church.",
    "To establish and maintain School(s) where children shall be educated under Christian influence.",
    "To co-operate with the (Emmanuel) Baptist Association, Ibadan Baptist Conference, and the Nigeria Baptist Convention in carrying out their aims and objectives as setout in their respective constitution and bye-laws.",
    ""
  ],
};

export default mission;
