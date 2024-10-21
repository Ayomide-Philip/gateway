import createVideo from "./subcomponet/videoBanner.js";

const getInvolved = {
  videoBanner: createVideo(
    "Get Involved at Gateway Baptist Church",
    "Get involved in our church activities"
  ),
  heading: "Get Involved at Gateway Baptist Church",
  p: "At Gateway Baptist Church, we believe that everyone has a unique role to play in our community. Getting involved is a great way to grow in your faith, build relationships, and make a positive impact. Whether you have a few hours a month or a few hours a week, there are many ways you can get involved.",
  whyInvolved: {
    heading: "Why Get Involved?",
    p: "Getting involved in church activities and ministries helps you to",
    why: [
      {
        heading: "Grow Spiritually",
        text: "Engage in activities that deepen your faith and understanding of God's Word.",
      },
      {
        heading: "Build Community",
        text: "Form meaningful relationships with fellow church members.",
      },
      {
        heading: "Serve Others",
        text: "Use your gifts and talents to serve the church and the wider community.",
      },
      {
        heading: "Make a Difference",
        text: "Contribute to the mission and vision of Gateway Baptist Church.",
      },
    ],
  },
  opportunitiesToServe: {
    heading: "Opportunities to Serve",
  },
};

export default getInvolved;
