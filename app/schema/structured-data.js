// app/schema/structured-data.js

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",

  "@id": "https://www.sikarwardentalhospital.com/#dentalhospital",

  name: "Sikarwar Dental Hospital and Implant Center",

  url: "https://www.sikarwardentalhospital.com",

  image:
    "https://www.sikarwardentalhospital.com/_next/static/media/logo1.0dfhv4nd6q87d.png",

  telephone: "+91-7400656692",

  address: {
    "@type": "PostalAddress",
    streetAddress:
      "Gol Chowk, Beside Deerghayu Hospital, Deendayal Upadhyay Nagar",
    addressLocality: "Raipur",
    addressRegion: "Chhattisgarh",
    postalCode: "492001",
    addressCountry: "IN",
  },

  geo: {
    "@type": "GeoCoordinates",
    latitude: 21.2371836,
    longitude: 81.5939132,
  },

  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:30",
      closes: "21:00",
    },
  ],

  sameAs: [
    "https://www.facebook.com/sikarwardentalhospitalandimplantcenterraipur",
    "https://www.instagram.com/sikarwardentalhospitalraipur",
  ],
};