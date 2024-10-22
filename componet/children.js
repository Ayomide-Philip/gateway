import createVideo from "./subcomponet/videoBanner.js";

const children = {
  heading: "Meet Our Children’s Ministry Team",
  videoBanner: createVideo(
    "The Children Ministry",
    "Learn more about the Children Ministry"
  ),
  leaders: {
    heading: "Our Leaders",
    p: "At Gateway Baptist Church, our Children’s Ministry is blessed with a dedicated team of leaders who are passionate about nurturing the spiritual growth of our children. Meet the wonderful people who guide and inspire our kids each week",
    leader: {
      name: "Revd Mrs Florence Oluwakemi Adedeji",
      positionHeld: " Children’s Ministry Director",
      bio: "Revd Mrs Florence Oluwakemi Adedeji has been leading our Children’s Ministry for quite long number years. She Worked at Ebenezer High School, Ibadan, Studied at The Nigerian Baptist Theology Seminary Ogb, Went to polytechnic high school ibadan. She is committed to creating a loving and engaging environment for all children.",
    },
  },
  sundaySchool: {
    name: "Sunday School Teachers",
    bio: "Our Sunday School teachers bring a wealth of experience and enthusiasm to their roles, creating a dynamic and engaging learning environment for our children.",
    lists: [
      {
        heading: "Preschool",
        text: "Our preschool teachers have a deep understanding of early childhood education. Their creativity and enthusiasm make learning about Jesus fun for our youngest members. They enjoy and often incorporate their special talents into their lessons to make them more engaging.",
      },
      {
        heading: "Elementary",
        text: "Our elementary teachers have a heart for teaching and a love for God’s Word. They help our elementary students understand and apply biblical truths. Known for their patience and kindness, they are favorites among the kids and are dedicated to fostering a sense of community within the classroom.",
      },
    ],
  },
  volunteer: {
    heading: "Volunteer Coordinators",
    text: "Our volunteer coordinators play a crucial role in ensuring our ministry runs smoothly. They organize and support our wonderful volunteers, connecting with both parents and volunteers alike. With their skills in event planning, they ensure everyone feels welcomed and valued. Outside of church, they enjoy gardening and are passionate about community service initiatives.",
  },
  ourKids: {
    heading: "Our Kids in Action",
    subHeading: "Here Are some of the Video From Our Children Day",
    facebookURL: [
      "https://www.facebook.com/plugins/video.php?height=373&href=https%3A%2F%2Fweb.facebook.com%2Fgatewaybaptist.church.33%2Fvideos%2F789766829797271%2F&show_text=false&width=560&t=0",
      "https://www.facebook.com/plugins/video.php?height=373&href=https%3A%2F%2Fweb.facebook.com%2Fgatewaybaptist.church.33%2Fvideos%2F468138169137353%2F&show_text=false&width=560&t=0",
    ],
    pLead:
      "Our Children’s Ministry is a vibrant community where kids learn, play, and grow together. Here are some snapshots of our children in action",
    youtubeURL: [
      {
        url: "https://www.youtube.com/embed/2l5HE0gHTmY?si=Agz-KQYGVO94QvH9",
        pLead: "Our Children Presenting Drama to the Church",
      },
      {
        url: "https://www.youtube.com/embed/5WMkMhIYPpM?si=kKgMMqrTx2ZU59e8",
        pLead: "Our Children at Christmax Carol",
      },
      {
        url: "https://www.youtube.com/embed/Zd_n7MTK3pE?si=62n4aJ656Sl7vTsS",
        pLead: "Our Chidren in the Bible Chain Competition.",
      },
    ],
  },
  getInvolved: {
    heading: "Get Involved",
  },
};

export default children;
