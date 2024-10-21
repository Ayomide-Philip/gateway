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
  },
};

export default children;
