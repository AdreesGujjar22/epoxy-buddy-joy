export type Review = {
  name: string;
  location: string;
  text: string;
  rating: number;
  relativeTime: string;
  verified: boolean;
};

export const reviews: Review[] = [
  {
    name: "Pavan",
    location: "White Rock, BC",
    text: "The team was professional from start to finish — on time, well organized, and clearly experienced in what they do. They took the time to explain the process and answered all my questions, and made sure everything was done right.",
    rating: 5,
    relativeTime: "Google customer review",
    verified: true,
  },
  {
    name: "Jag D.",
    location: "Surrey, BC",
    text: "Top-notch service. Had my garage floor done by Pacific Floors and Coatings and it exceeded my expectations. Professional crew, high-quality materials, and amazing attention to detail.",
    rating: 5,
    relativeTime: "Google customer review",
    verified: true,
  },
  {
    name: "Aman Kang",
    location: "Surrey, BC",
    text: "Great communication throughout the project. The prep work was thorough and the finished floor looks better than I imagined. Would recommend them to anyone.",
    rating: 5,
    relativeTime: "Google customer review",
    verified: true,
  },
  {
    name: "Kirmana Allen",
    location: "Surrey, BC",
    text: "They did a fantastic job on the floors in our unit. Knowledgeable, tidy, and finished right on schedule. I'd use them again without hesitation.",
    rating: 5,
    relativeTime: "Google customer review",
    verified: true,
  },
  {
    name: "Kevin Buell",
    location: "Surrey, BC",
    text: "Fair pricing and a floor that still looks brand new. The crew clearly cares about doing the job properly rather than quickly.",
    rating: 5,
    relativeTime: "Google customer review",
    verified: true,
  },
  {
    name: "Jay Chuhan",
    location: "Richmond, BC",
    text: "These guys were incredibly friendly and professional. The whole process went smoothly and the result speaks for itself.",
    rating: 5,
    relativeTime: "Google customer review",
    verified: true,
  },
  {
    name: "Paul Gomes",
    location: "Coquitlam, BC",
    text: "Honest, on time and easy to work with. Highly recommended to anyone looking for a professional coating on a shop or garage floor.",
    rating: 5,
    relativeTime: "Google customer review",
    verified: true,
  },
  {
    name: "Felipe Painting & Reno",
    location: "Surrey, BC",
    text: "Great communication, clean work, and consistently high standards. We'll keep recommending them to our clients.",
    rating: 5,
    relativeTime: "Google customer review",
    verified: true,
  },
];
