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
    ],
  },
};

export default getInvolved;
