export const contactInfo = {
  phone: "+91 9946137111",
  email: "markncheck@gmail.com",
  offices: [
    {
      name: "Kozhikode Office",
      street: "#2221, HiLite Business Park",
      suite: "Phase II, 2nd Floor, HiLite City",
      city: "Kozhikode",
      state: "Kerala",
      zip: "673014",
      country: "India",
      phone: "+91 9946137111"
    },
    {
      name: "Kochi Office",
      street: "1st Floor, Muhammad Haji Building",
      suite: "Railway Station Road Near Lulu Mall Edappally PO",
      city: "Kochi",
      state: "Kerala",
      zip: "682024",
      country: "India",
      phone: "+91 9633776546"
    }
  ],
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