export const servicesData = [
  {
    id: 'registration',
    title: "Registration",
    shortDescription: "Complete business registration services to establish your legal entity.",
    fullDescription: "We provide comprehensive registration services for all types of business entities, ensuring proper legal setup and compliance from day one.",
    image: "/img/services/registration.jpg",
    features: [
      "Incorporation of Companies, LLPs & other Legal entities in India & Abroad",
      "Corporatization of Partnerships & Sole Proprietary firms",
      "Conversion of existing companies, partnership firms to LLP in cost & tax efficient manner & vis versa",
      "Registration of MSME, Startups and other business entities",
      "Establishment & Registration of Trust, NGOs & Societies",
      "Import Export Code Registration",
      "GST Registration",
      "RERA Registration"
    ],
    benefits: [
      "Legal entity establishment",
      "Proper documentation",
      "Regulatory compliance"
    ]
  },
  {
    id: 'corporate-advisory',
    title: "Corporate Advisory",
    shortDescription: "Corporate secretarial and advisory support to keep your company compliant, well‑structured and investor‑ready.",
    fullDescription: "We provide end‑to‑end corporate secretarial and advisory services covering company law, SEBI and labour law compliances. From day‑to‑day board support to complex transactions such as fund raising, capital structuring and related party dealings, we help you stay compliant while enabling growth.",
    image: "/img/services/corporateadvisoru.jpg",
    features: [
      "Corporate Secretarial Services",
      "Due Diligence Services",
      "Advisory Services on: Corporate laws | SEBI | Labour laws and Other allied laws",
      "Fund Raising Options",
      "Capital Structuring FEMA – FCGPR, FCTRS, FLA return filing",
      "Investment planning",
      "Private Placement, Buyback, Employee Stock Option (ESOP), Issue of Sweat Equity & Other Securities",
      "Related Party Transaction"
    ],
    benefits: [
      "Informed decision making",
      "Optimized corporate structure",
      "Enhanced business value"
    ]
  },
  {
    id: 'compliance-regulatory',
    title: "Compliance & Regulatory",
    shortDescription: "Comprehensive compliance and regulatory services to keep your business on track.",
    fullDescription: "We ensure your business stays compliant with all applicable laws, regulations, and statutory requirements, minimizing legal risks.",
    image: "/img/services/compliance.png",
    features: [
      "Holding & convening statutory meetings",
      "Statutory records & filing with ROC for Companies & LLPs",
      "FEMA/ RBI return filing",
      "ECB filing",
      "Updating clients with regulatory framework",
      "Procedural compliance required towards merger, demerger, acquisition, amalgamation, takeover, slump sale, etc.",
      "Procedure for compromise & arrangements",
      "Company closure compliances – winding-up, strike off, etc."
    ],
    benefits: [
      "Reduced legal risks",
      "Timely compliance",
      "Peace of mind"
    ]
  },
  {
    id: 'audit-assurance',
    title: "Audit & Assurance",
    shortDescription: "Independent audit and assurance services to enhance trust and transparency.",
    fullDescription: "We provide comprehensive auditing and assurance services that strengthen stakeholder confidence, ensure regulatory compliance, and give you a clear view of your financial position.",
    image: "/img/services/audit and assurance.jpg",
    features: [
      "Secretarial Audit",
      "Compliance Audit",
      "Process Audit",
      "System Audit"
    ],
    benefits: [
      "Enhanced financial credibility",
      "Improved internal controls",
      "Better compliance and governance"
    ]
  },
  {
    id: 'taxation',
    title: "Taxation",
    shortDescription: "End‑to‑end direct and indirect tax support to keep your business compliant and tax‑efficient.",
    fullDescription: "We provide practical, up‑to‑date tax advisory and compliance support so you can focus on running your business. From planning and structuring to filing and representation, our team helps you manage both direct and indirect tax obligations smoothly.",
    image: "/img/services/taxation.jpg",
    features: [
      "Tax planning & management",
      "Corporate & business taxation",
      "International taxation",
      "Indirect taxation",
      "Transfer Pricing",
      "Tax return filing"
    ],
    benefits: [
      "Reduced risk of tax disputes",
      "Better visibility over tax outflows",
      "Optimized tax structure"
    ]
  },
  {
    id: 'intellectual-property-rights',
    title: "Intellectual Property Rights",
    shortDescription: "Comprehensive IP protection services for your trademarks, patents, and copyrights.",
    fullDescription: "We help you secure and safeguard your intellectual property through complete support for trademark, copyright, and patent registrations and enforcement.",
    image: "/img/services/IP.jpg",
    features: [
      "Registration of Trademarks and Brands, Copyrights, and Patents in India and abroad",
      "Representation before trademark authorities, handling oppositions",
      "Consultancy and legal representation against infringement, passing off of trademarks and copyrights",
      "Drafting contracts, agreements for lease, assignment and acquisition of trademarks, copyrights"
    ],
    benefits: [
      "Protected brand identity",
      "Secured intellectual assets",
      "Stronger competitive advantage"
    ]
  },
  {
    id: 'drafting-documentation',
    title: "Drafting & Documentation",
    shortDescription: "Legally sound drafting and documentation support for your business needs.",
    fullDescription: "Clear, well‑drafted documents reduce disputes and protect your interests. We help you prepare, review, and refine commercial agreements, policies, and internal documentation.",
    image: "/img/services/draftanddocumentation.jpg",
    features: [
      "Charter Regulatory documents",
      "Loan/Debt raising documents",
      "Non-Disclosure Agreement",
      "Memorandum of Understanding",
      "Joint Venture Agreement",
      "Share Purchase Agreement",
      "Commercial Agreements",
      "Lease/Rent Agreement"
    ],
    benefits: [
      "Lower risk of disputes",
      "Clarity for all parties",
      "Stronger legal posture"
    ]
  },
  {
    id: 'startup-msme',
    title: "Startup & MSME",
    shortDescription: "Specialised support for startups and MSMEs across registration, compliance and growth phases.",
    fullDescription: "We work closely with founders and MSME owners to set up the right structure, access registrations and benefits, and stay compliant as the business grows.",
    image: "/img/services/msme.jpg",
    features: [
      "Business idea formation & mentoring",
      "SME listing & Compliance services",
      "MSME Registration & compliance",
      "Startup registration",
      "Business modelling & forecasting"
    ],
    benefits: [
      "Access to MSME benefits",
      "Lower compliance friction",
      "Better investor readiness"
    ]
  }
];

export function getServiceById(id) {
  return servicesData.find(service => service.id === id);
}

export function getAllServices() {
  return servicesData;
}