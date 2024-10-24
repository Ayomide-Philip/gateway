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
    remainingP: [
      "Of the place mapped out, the only place the RIEL Club succeeded in planting a church at that time was Sanngo.The church was the first church to be established at the area Sanngo and environs. The initial church service was held at Late Pa. James Alabis house. The host was popularly known as 'Baba Ikaramu'. Baba Ikaramu house was located opposite the Nigerian Railway line, Bodija Housing Estate, Sanngo-Elewure, Ibadan.",
      "Soon after the church premises got acquired by the Government of Western Region. Thus, the church moved to Baba Ikaramus (Pa. James Alabis) house. The house was near the Railway Staff Headquaters, Sanngo Ibadan. When the number of the worshippers increased significantly, a tent was erected very close to the present church building. However, within three years, a move was made to dispose of the piece of Lands. The entire members contributed money to purchase the land. A small building was erected through communal labour when the Western Nigeria Town Planning Authority approve the proposed building plan for the church.",
      "When the church was growing with increasing number of worshippers, the late Deacon Amos Jolaade Adegun was deployed from the mother church to succeed late Deacon Lawore, as the leader of the church. However, Chief M.O Ogunnowo and other church members worked tirelessly to sustain the the progress achieved then in the church. It would also be necessary here to mention that love had been existing in Gateway Baptist Church for a long time ago.",
    ],
  },
  whyGateway: {
    heading: `Why the name was "Gateway" Baptist Church?`,
    p: `Have you ever wondered why the church was named "Gateway"? As at 1960, there was only an entry point from the northern part of the country. At the site are of the church was the airport. Also, it was and still is the only south-north route for the Nigeria Railway. At that time, hardly could anybody come to visit the Western Region without passing through the Sanngo area of the city. The worshippers, through the divine inspiration as voiced by Deacon Lawore, then leader of the preaching station, then considered "GATEWAY" BAPTIST CHURCH as the name because it was, and still is the Gateway to Heaven, Paradise, Saviour and salvation as well as, break-through, success, miracles, blessings, redemption and long life and prosperity.`,
  },
  Pioneer
};

export default history;
