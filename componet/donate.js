import createVideo from "./subcomponet/videoBanner.js";

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
  waysToDonate: {
    heading: "Ways to Give",
    subHeading: "Online Giving",
    p: "We offer a secure and convenient online giving platform where you can make one-time or recurring donations through direct bank transfer. Click the button below to donate now.",
    donateButton: {
      heading: "Donate Now",
      modal: {
        heading: "You Can Pay Directly into the following Accounts.",
        accountName: "Gateway Baptist Church",
        bankAccount: [
          {
            purpose: "Mission Offering",
            bankName: "Sterling Bank",
            accountNumber: "0007288121",
          },
          {
            purpose: "Thithe & Offering",
            bankName: "First Bank",
            accountNumber: "2000101592",
          },
          {
            purpose: "Other Donation",
            bankName: "Polaris Bank",
            accountNumber: "1140088089",
          },
        ],
      },
    },
    inPersonGiving: {
      heading: "In-Person Giving",
      p: "We offer a secure and convenient online giving platform where you can make one-time or recurring donations through direct bank transfer. Click the button below to donate now.",
      mapURL:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.4042328308647!2d3.893266975001243!3d7.42043619259002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10398d2469bd9aa7%3A0xed55e2fa30d60b64!2sGateway%20Baptist%20Church%2C%20Sango%2C%20Ibadan!5e0!3m2!1sen!2sng!4v1720267763211!5m2!1sen!2sng",
    },
  },
  howWeUseDonations: {
    heading: "How We Use Your Donations",
    p: "Your generous donations are utilized in a variety of impactful ways",
    howWeUse: [
      {
        heading: "Community Outreach",
        text: "Feeding the homeless, providing after-school programs, and supporting local missions.",
      },
      {
        heading: "Church Operations",
        text: "Maintaining our beautiful facilities, supporting our dedicated staff, and ensuring the smooth operation of our services.",
      },
      {
        heading: "Global Missions",
        text: "Assisting missionaries worldwide, funding international projects, and spreading the Gospel to the ends of the earth.",
      },
      {
        heading: "Youth and Educational Programs",
        text: "Investing in the next generation through youth groups, educational scholarships, and enrichment programs.",
      },
    ],
  },
  joinUs: {
    heading: "Join Us in Making a Difference.",
    text: "We invite you to join us in making a lasting impact through your financial support. Your generosity enables us to continue our mission of spreading the love of Christ and serving those in need.",
  },
  contactUs: {
    heading: "Contact Us",
    emailAddress: "gateway4054@gmail.com",
    telephoneNumber: "+2347031686966",
  },
};

export default donate;
