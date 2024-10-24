import createVideo from "./subcomponet/videoBanner.js";

const history = {
  videoBanner: createVideo(
    "The Church In the Historical Perspective.",
    "Learn more about our church"
  ),
  heading: "Founding and Establishing the Church.",
  background: {
    heading: "Background Initiatives and Steps",
    firstP:
      "In Obedience to God Almighty Father's directive that all Christians should go into the world and preach the gospel, a preaching station of the Union Baptist Church, Ekotedo, in Ibadan city, began in October 1960. The vision to start church planting started with the Late Revd. Theophilus Adedeji Adejumobi became the pastor of the church. In one of his sermons on soul winning, in 1958, many people responded to become soul winners and the RIEL club [Religion In Everyday Life] was inaugurated . Some members of the club included Mr. Oladipo, Mr. A.O Fakorede(now Deacon Fakorede, Former president of Deacons fellowship of the Convection), Mr. A.B Farinde, Miss Bimpe Atanda(now Mrs. Adigun), Mr. Johnson Ogundele, Mr. Afuwape, Mr. D.O Amoo(Now Deacon) and late Dn. S.O Lawore. Members of this club became evangelism team of the church.",
    listP: {
      p: "Mr. Solomon Akintola Aderounmu, a member of the church working with the Ministry of Lands and Survey at the Government Secretariat, Agodi, Ibadan, was assigned responsibilities of mapping out the city of Ibadan and to identify where church could be planted. Places identified were",
      lists: [
        "Agugu",
        "Oba-Oloke",
        "Police College",
        "Eleyele",
        "Sanngo",
        "Agodi Prison",
      ],
    },
  },
};

export default history;
