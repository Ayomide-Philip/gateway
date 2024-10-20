import createVideo from "./componet/videoBanner.js";

const donate = {
  videoBanner: createVideo(
    "Donate to Gateway Baptist Church",
    "Your generous donations help Gateway Baptist Church fulfill its mission to serve our community"
  ),
  heading: "Donate to Gateway Baptist Church",
  p: "Your generous donations help Gateway Baptist Church fulfill its mission to serve our community, spread the Gospel, and support those in need. Every gift, no matter the size, makes a significant difference in advancing our work and vision. Thank you for partnering with us in this vital ministry.",
  whyDonate: {
    heading: "Why Your Donation Matters",
    p: "At Gateway Baptist Church, we are committed to being a beacon of hope and love in our community and beyond. Your contributions enable us to",
    list: [
      {
        heading: "Support Community Outreach",
        text: "Provide meals, clothing, and essential services to those in need through our various outreach programs.",
      },
      {
        heading: "Enhance Worship Services",
        text: " Ensure that our worship services are vibrant, inclusive, and spiritually enriching for all attendees.",
      },
      {
        heading: "Expand Educational Programs",
        text: "Offer Bible studies, youth programs, and adult education classes that nurture spiritual growth and understanding.",
      },
      {
        heading: "Fund Missionary Work",
        text: "Support missionaries locally and globally, spreading the message of hope and salvation.",
      },
    ],
  },
  waysToDonate:{
    
  }
};

export default donate;
