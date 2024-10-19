const service = {
  topHeading: "Usual Church Activites",
  videoBanner: createVideo(
    "Services in our Church",
    "Learn more about the usual service of our Church"
  ),
  sundayService: [
    {
      header: "Sunday Service",
      title: "Teenager's Service",
      text: "Our Teenagers Service offers engaging worship, relevant teachings, and fun  activities. It’s a space where teens can connect, grow in faith, and build lasting  friendships. Join us!",
      footer: " 8:00am - 10:15 am",
    },
    {
      header: "Sunday Service",
      title: "English Service",
      text: "Our English service offers a vibrant worship experience with inspiring  sermons, and a welcoming community. Join us every Sunday to connect, grow, and be spiritually enriched.",
      footer: " 7:00am - 9:00am",
    },
    {
      header: "Sunday Service",
      title: "Sunday School",
      text: "Sunday School nurtures Christian’s faith through engaging lessons, and fun activities. It’s a foundational time to learn about God’s love and build a strong spiritual  base.",
      footer: "9:00am - 10:00am",
    },
    {
      header: "Sunday Service",
      title: "Yoruba Service",
      text: "Our Yoruba service offers enriching worship with traditional hymns, powerful sermons, and a sense of community, all in the beautiful Yoruba language. Celebrate and grow in faith with us.",
      footer: "10:00 am - 12:00 noon",
    },
  ],
  mondayService: [
    {
      header: "Monday Activites",
      title: "Early Morning Prayer",
      text: "Our Early Morning Prayer offers a peaceful start to the day, with communal prayers, worship, and reflection. Join us to seek spiritual renewal and blessings for the day ahead.",
      footer: "6:00am",
    },

    {
      header: "Monday Activites",
      title: "M.M.U Fellowship",
      text: "The M.M.U Fellowship is a dynamic men's ministry fostering spiritual growth, and community service. Join us for engaging discussions, worship, and opportunities to serve and support each other in faith.",
      footer: "5:00 pm",
    },

    {
      header: "Monday Activites",
      title: "W.M.U Fellowship",
      text: "The W.M.U Fellowship is a vibrant women's ministry focused on spiritual growth, and service. Join us for  worship, inspiring discussions, and community outreach, empowering women in their faith journey.",
      footer: "5:00 pm",
    },

    {
      header: "Monday Activites",
      title: "Lydia Fellowship",
      text: "Lydia Fellowship is a nurturing women's group dedicated to spiritual growth, and community service. Join us for enriching discussions,and community activities, empowering girls in their faith journey.",
      footer: "5:00 pm",
    },

    {
      header: "Monday Activites",
      title: "Discipleship Programme",
      text: "Our Discipleship Programme offers in-depth spiritual training, mentorship, and Bible study to nurture and equip believers in their faith journey. Join us to grow in knowledge, character, and service.",
      footer: "5:00 pm",
    },
  ],
  tuesdayService: [
    {
      header: "Tuesday Activities",
      title: "Fellowship Preparatory Class",
      text: "Equipping hearts and minds for deeper fellowship with God and community through study, prayer, and shared growth.",
      footer: "5:00pm - 6:00pm",
    },
    {
      header: "Tuesday Activities",
      title: "Discipleship Programme",
      text: "Discipleship Programme: Journeying together in faith to grow as disciples of Christ through study, service, and spiritual formation.",
      footer: "5:00pm - 6:00pm",
    },
    {
      header: "Tuesday Activities",
      title: "Drama",
      text: "Bringing biblical stories and spiritual truths to life, enriching worship experiences, and community through theatrical expression.",
      footer: "5:00pm - 6:00pm",
    },
  ],
  wednesdayService: [
    {
      header: "Wednesday Activities",
      title: "Mid-Week Service",
      text: "A sanctuary of renewal and connection, offering spiritual nourishment, fellowship, and reflection to strengthen faith throughout the week.",
      footer: "5:00pm - 6:00pm",
    },
  ],
  thursdayService: [
    {
      header: "Thursday Activities",
      title: "Sanctuary Choir",
      text: "Elevating worship with harmonious melodies and heartfelt devotion, uniting voices in praise to uplift congregations and glorify God.",
      footer: "5:00pm - 6:00pm",
    },
  ],
  fridayService: [
    {
      header: "Friday Activities",
      title: "Sunday School Preparatory Class",
      text: "Equipping educators with tools and wisdom to nurture young minds in faith, fostering a vibrant learning environment rooted in love and truth.",
      footer: "5:00pm",
    },
    {
      header: "Friday Activities",
      title: "Baptist Students Fellowship",
      text: "Building community among students through faith, fellowship, and service, empowering young believers to grow spiritually and impact their campus and beyond.",
      footer: "5:30 pm",
    },
    {
      header: "Friday Activities",
      title: "Sanctuary Choir",
      text: "Elevating worship with harmonious melodies and heartfelt devotion, uniting voices in praise to uplift congregations and glorify God.",
      footer: "06:00pm",
    },
  ],
  saturdayService: [
    {
      header: "Saturday Activities",
      title: "Royal Ambassador Fellowship",
      text: "Training boys in faith and service, fostering leadership and missions awareness through activities, equipping them to impact their communities for Christ.",
      footer: "05:00pm",
    },
    {
      header: "Saturday Activities",
      title: "Girls Auxiliary Fellowship",
      text: "Empowering girls in faith and service, cultivating leadership and missions passion through activities that inspire them to impact their world for Christ.",
      footer: "05:30 pm",
    },
    {
      header: "Saturday Activities",
      title: "Sanctuary Choir",
      text: "Elevating worship with harmonious melodies and heartfelt devotion, uniting voices in praise to uplift congregations and glorify God.",
      footer: "06:00pm",
    },
  ],
  monthTopHeading: "Monthly Opportunities.",
  monthlyService: [
    {
      header: "Monthly Opportunities",
      title: "Youth Fellowship",
      text: "Our Youth Fellowship is a dynamic group for young people to grow in faith, connect with peers, and serve the community. Join us for engaging worship, Bible study, and fun activities.",
      footer: "Every 1st sunday of the Month",
    },
    {
      header: "Monthly Opportunities",
      title: "Youth Prayer",
      text: "Youth Prayer provides a dedicated time for young people to connect with God through prayer, worship, and reflection. Join us to deepen your faith, seek guidance, and find spiritual support.",
      footer: "Every 3rd Thursday of the Month",
    },
    {
      header: "Monthly Opportunities",
      title: "Pastor & Deacon Fellowship",
      text: "The Pastor & Deacon Fellowship fosters leadership and spiritual growth among church leaders. It provides a platform for pastors and deacons to pray, share insights, and support each other in their ministry roles.",
      footer: "Monthly",
    },
    {
      header: "Monthly Opportunities",
      title: "Church E.C Meeting",
      text: "The Church E.C. Meeting is a crucial gathering for church leaders to discuss strategic planning, ministry updates, and community initiatives. It fosters collaboration and ensures the smooth functioning of church activities and goals.",
      footer: "Every 3rd Saturday of the Month",
    },
    {
      header: "Monthly Opportunities",
      title: "E.B.A Pastors Fellowship",
      text: "The E.B.A Pastors Fellowship brings together pastors from various churches for mutual encouragement, spiritual growth, and collaboration. It provides a platform for sharing insights, praying together, and fostering unity among church leaders.",
      footer: "Every 2nd Tuesday of the Month",
    },
    {
      header: "Monthly Opportunities",
      title: "Night of Encounter",
      text: "Night of Encounter is a powerful worship event focused on experiencing God's presence through prayer, worship, and spiritual breakthroughs. Join us for a transformative evening of faith and divine encounters.",
      footer: "Every last Friday of the Month",
    },
    {
      header: "Monthly Opportunities",
      title: "Child Dedication",
      text: "Child Dedication is a special ceremony where parents present their child to God, committing to raise them in a faith-filled home. It’s a joyous occasion for the church community to support and pray for the family.",
      footer: "Every 2nd Sunday of the Month",
    },
    {
      header: "Monthly Opportunities",
      title: "Family Thanksgiving",
      text: "Family Thanksgiving is a joyful celebration where families gather to express gratitude for God's blessings. It's a time for communal worship, sharing testimonies, and giving thanks together for the year's blessings and milestones.",
      footer: "Every last Sunday of the Month",
    },
    {
      header: "Monthly Opportunities",
      title: "Single Retreat",
      text: "The Single Retreat is a rejuvenating event designed for singles to grow spiritually, build community, and enjoy enriching activities. Join us for inspiring sessions, fellowship, and personal growth opportunities in a supportive environment.",
      footer: "Every 3rd Saturday of the Month",
    },
  ],
};

export default service;
