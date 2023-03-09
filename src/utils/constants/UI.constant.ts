export const LANDING_HEADER_ITEMS = [
  {
    name: "Blog",
    type: "Link",
    path: "/",
  },
  {
    name: "Socials",
    type: "Link",
    path: "/",
  },
  {
    name: "Past Socials",
    type: "Link",
    path: "/",
  },
  {
    name: "Clubs",
    type: "Links",
    options: [
      {
        name: "Yeti",
        path: "/",
      },
      {
        name: "Orange",
        path: "/",
      },
    ],
  },
  {
    name: "Blog",
    type: "Link",
    path: "/",
  },
];

export const CREATE_POST_FORM_SCHEMA = [
  {
    group: "flex w-1/2 gap-4 mb-4",
    inputs: [
      {
        type: "date",
        width: 300,
        height: 40,
        fontSize: 28,
        prefix: "calendar",
        className: "",
        field: "date",
        defaultValue: "",
        validations: {
          required: {
            value: true,
            message: "This input is required!",
          },
        },
      },
      {
        type: "time",
        width: 300,
        height: 40,
        fontSize: 28,
        prefix: "clock",
        className: "",
        field: "time",
        defaultValue: "",
        validations: {
          required: {
            value: true,
            message: "This input is required!",
          },
        },
      },
    ],
  },
  {
    group: false,
    type: "text",
    width: "full",
    prefix: "location",
    placeholder: "Location",
    className: "w-full",
    field: "location",
    validations: {
      required: {
        value: true,
        message: "This input is required!",
      },
    },
  },
  {
    group: "flex w-1/2 gap-8 mt-4",
    inputs: [
      {
        type: "number",
        width: 140,
        prefix: "comunity",
        className: "",
        placeholder: "Max capacity",
        field: "capacity",
        validations: {
          required: {
            value: true,
            message: "This input is required!",
          },
        },
      },
      {
        type: "number",
        width: 140,
        prefix: "dollar",
        className: "",
        placeholder: "Cost per person",
        field: "cost",
        validations: false,
      },
    ],
  },
];

export const INPUT_TAGS = ["Product", "Marketing", "Design", "Engineering"];

export const CREATE_POST_SETTING_FORM_SCHEMA = [
  {
    group: false,
    type: "checkbox",
    name: "I want to approve attendees",
    options: [],
    width: "full",
    prefix: "",
    placeholder: "",
    className: "",
    field: "isManualApprove",
    title: false,
    validations: {
      required: {
        value: true,
        message: "This input is required!",
      },
    },
  },
  {
    group: false,
    type: "radio",
    options: ["public", "audience", "comunity"],
    name: "",
    width: "full",
    prefix: "",
    placeholder: "",
    className: "",
    field: "privacy",
    title: {
      head: "Privacy",
      sub: "",
    },
    validations: {
      required: {
        value: true,
        message: "This input is required!",
      },
    },
  },
  {
    group: false,
    type: "tags",
    name: "",
    options: INPUT_TAGS,
    width: "full",
    prefix: "",
    placeholder: "",
    className: "mt-6 ml-2",
    field: "social",
    title: {
      head: "Tag your social",
      sub: "Pick tags for our curation engine to work its magin",
    },
    validations: {
      required: {
        value: true,
        message: "This input is required!",
      },
    },
  },
];

export const BANNERS = [
  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_1.jpg",

  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_2.jpg",

  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_3.jpg",

  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_4.jpg",

  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_5.jpg",

  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_6.jpg",

  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_7.jpg",

  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_8.jpg",

  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_9.jpg",

  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_10.jpg",
  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_1.jpg",

  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_2.jpg",

  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_3.jpg",

  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_4.jpg",

  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_5.jpg",

  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_6.jpg",

  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_7.jpg",

  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_8.jpg",

  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_9.jpg",

  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_10.jpg",

  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_7.jpg",

  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_8.jpg",

  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_9.jpg",

  "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_10.jpg",
];

export const MOCK_EVENT_DATA = {
  title:
    "Web3 Founders & Designers Mixer + fireside chat with Coinbase Senior Designer & Airfoil founder",
  startAt: "2022-10-11T19:00:00+00:00",
  venue: "Chelsea Market (163 W 20nd Street). Manhattan, NYC",
  capacity: 50,
  price: 30,
  description:
    "Calling all web3 founders and designers for an exciting night of exchanging ideas and making new friends! Make friends with fellow designers and founders in web3. There will also be lots of insights to be gained through an intimate chat\n+Q&A with two giants in the industry: \n\nPhil Hedayatnia, Founder & CEO of Airfoil, a\ngrowth design studio that has designed and built products in web3, the creator economy,\nthe future of work, and much more for 80+ startups since 2018 \n\nJihoon Suh, Senior\nProduct Designer at Coinbase, who was previously Senior Product Designer for Messenger\nfor Meta. \n\nThis will be a curated group with limited spots, so do sign up early!\n\nAbout\nAirfoil: \n\nAirfoil Studio is the design, branding, and engineering team helping web3 take flight. As one of crypto’s first large-scale design firms, we aim to design a friendlier\nfinancial layer for the internet. We’re a team of 85+ creatives, working from Airfoil’s hubs in\nToronto, Singapore, and Seoul, who’ve worked on 100+ projects since 2018, including\nSolana Pay, Drift Protocol, Bonfida Solana Name Service, Utopia Labs, Planetarium,\nLayer3.xyz, MarginFi, Hyperspace, VBA Game, and more.\n\nLearn more about Airfoil and\nour work at airfoil.studio.",
  isManualApprove: true,
  privacy: "Public",
  banner: "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_1.jpg",
  tags: ["Product", "Design"],
};
