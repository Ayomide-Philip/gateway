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
    opportunities: [
      {
        heading: "Children’s Ministry",
        text: "Help nurture the faith of our youngest members. Opportunities include teaching Sunday School, assisting with Vacation Bible School, and helping with special events.",
      },
      {
        heading: "Teenager Ministry",
        text: "Support our teens as they navigate their faith and life’s challenges. Opportunities include leading small groups, mentoring, and helping with youth events.",
      },
      {
        heading: "Worship Team",
        text: "If you have musical talents, consider joining our worship team. We are always looking for vocalists, instrumentalists, and audio/visual technicians.",
      },
      {
        heading: "Hospitality Team",
        text: "Welcome newcomers and regular attendees with a warm smile. Opportunities include greeting at services, preparing coffee and refreshments, and assisting with church events",
      },
      {
        heading: "Outreach and Missions",
        text: "Get involved in local and international outreach efforts. Opportunities include organizing community service projects, participating in mission trips, and supporting our partner organizations.",
      },
      {
        heading: "Prayer Ministry",
        text: "Join our prayer team to support the church and community through prayer. Opportunities include participating in prayer meetings, leading prayer groups, and praying for specific needs.",
      },
      {
        heading: "Small Groups",
        text: "Facilitate or join a small group to foster deeper connections and spiritual growth. Opportunities include hosting a group in your home, leading discussions, and coordinating activities.",
      },
      {
        heading: "Church Administration",
        text: "Assist with the administrative needs of the church. Opportunities include office support, communications, and event planning.",
      },
    ],
  },
  specialEvent: {
    heading: "Special Events and Programs",
    list: [
      {
        heading: "Community Service Projects",
        text: "Join us in serving our local community through various projects such as food drives, neighborhood clean-ups, and outreach to those in need.",
      },
      {
        heading: "Annual Church Retreat",
        text: "Participate in our annual church retreat, a time of renewal, fellowship, and spiritual growth.",
      },
    ],
  },
};

export default getInvolved;
