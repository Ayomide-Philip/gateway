import createVideo from "./subcomponet/videoBanner.js";

const children = {
  heading: "Meet Our Children’s Ministry Team",
  videoBanner: createVideo(
    "The Children Ministry",
    "Learn more about the Children Ministry"
  ),
};

export default children;
