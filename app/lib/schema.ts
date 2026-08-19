export interface BusinessInfo {
  name: string;
  telephone: string;
  email: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  areasServed: string[];
  credentials: string[];
  priceRange: string;
  url: string;
}

export const defaultBusinessInfo: BusinessInfo = {
  name: "Apex Electrical UK",
  telephone: "+441234567890",
  email: "info@apexelectrical.co.uk",
  url: "https://apexelectrical.co.uk",
  priceRange: "££",
  address: {
    streetAddress: "12 High Street",
    addressLocality: "Guildford",
    postalCode: "GU1 3AJ",
    addressCountry: "GB",
  },
  geo: {
    latitude: 51.2362,
    longitude: -0.5704,
  },
  areasServed: ["Guildford", "Woking", "Surrey", "Farnham", "Godalming", "Aldershot"],
  credentials: [
    "NICEIC Approved Contractor",
    "Part P Registered",
    "City & Guilds 2391 Inspection & Testing",
    "£5M Public Liability Insurance",
  ],
};

export function generateLocalBusinessSchema(info: BusinessInfo = defaultBusinessInfo) {
  return {
    "@context": "https://schema.org",
    "@type": ["Electrician", "LocalBusiness", "EmergencyService"],
    "@id": `${info.url}/#organization`,
    name: info.name,
    url: info.url,
    telephone: info.telephone,
    email: info.email,
    priceRange: info.priceRange,
    image: `${info.url}/og-image.jpg`,
    description: "24/7 Emergency & Residential Electrician in Guildford & Surrey. NICEIC Approved Contractor, Part P Certified, EV Chargers, Fuse Box Upgrades & EICR Certificates.",
    address: {
      "@type": "PostalAddress",
      streetAddress: info.address.streetAddress,
      addressLocality: info.address.addressLocality,
      postalCode: info.address.postalCode,
      addressCountry: info.address.addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: info.geo.latitude,
      longitude: info.geo.longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
    areaServed: info.areasServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    hasCredential: info.credentials,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "148",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

export function generateServiceSchema(serviceName: string, serviceDescription: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: serviceDescription,
    provider: {
      "@type": "Electrician",
      name: defaultBusinessInfo.name,
      telephone: defaultBusinessInfo.telephone,
      url: defaultBusinessInfo.url,
    },
    areaServed: defaultBusinessInfo.areasServed,
    url: url,
  };
}
