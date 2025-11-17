export const contactInfo = {
  phone: "+91 99467 83111",
  email: "markncheck@gmail.com",
  address: {
    street: "#2221, HiLite Business Park",
    suite: "Phase II, 2nd Floor, HiLite City",
    city: "Kozhikode",
    state: "Kerala 673014",
    zip: "India"
  },
  hours: {
    weekdays: "Monday – Saturday: 9:30 AM – 6:00 PM",
    saturday: "",
    sunday: "Sunday: Closed"
  },
  social: {
    linkedin: "https://linkedin.com/company/youraccounting",
    facebook: "https://facebook.com/youraccounting",
    twitter: "https://twitter.com/youraccounting"
  }
};

export const contactReasons = [
  "General Inquiry",
  "Registration",
  "Corporate Advisory",
  "Compliance & Regulatory",
  "Audit & Assurance",
  "Taxation",
  "Intellectual Property Rights",
  "Drafting & Documentation",
  "Startup & MSME",
  "Other"
];

export function getContactInfo() {
  return contactInfo;
}

export function getContactReasons() {
  return contactReasons;
}