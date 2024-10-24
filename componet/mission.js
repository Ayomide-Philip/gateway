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
    "To carry out the financial duties laid down in the 'Accounting Regulations and procedure' as may be formulated for the church.",
    "To worship God in Spirit and truth.",
    "To observe the ordinances of Baptism by immersion and the Lord's supper.",
    "To obeserve all other functions as laid down by the Nigerian Baptist Convention.",
    "To do all such other lawful things as are incidental or conducive to the attainment of the above objects.",
  ],
  missionPDF: {
    heading: "Download To access our church Mission, aims and goal Everytime.",
    card: {
      title: "Mission, aims and goal of Gateway Baptist Church",
      text: "If you want to be able to access the Mission, aims and goal of our church on your phone at anytime you can down load the church PDF, to get it at your comfort.",
      date: new Date().toUTCString(),
      pdfURL: "gatwaybaptistaimsandgoals",
      imageURL: "missinpdfpic",
    },
  },
};

export default mission;
