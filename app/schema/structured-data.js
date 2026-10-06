// app/schema/structured-data.js

const websiteUrl = "https://www.sikarwardentalhospital.com";

const logoUrl =
  "https://www.sikarwardentalhospital.com/_next/static/media/logo1.0dfhv4nd6q87d.png";

export const structuredData = {
  "@context": "https://schema.org",

  "@graph": [
    // =========================================================
    // DENTAL HOSPITAL / LOCAL BUSINESS
    // =========================================================
    {
      "@type": "Dentist",

      "@id": `${websiteUrl}/#dentalhospital`,

      name: "Sikarwar Dental Hospital and Implant Center",

      url: websiteUrl,

      image: logoUrl,

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
    },

    // =========================================================
    // ORGANIZATION
    // =========================================================
    {
      "@type": "Organization",

      "@id": `${websiteUrl}/#organization`,

      name: "Sikarwar Dental Hospital and Implant Center",

      alternateName:
        "Sikarwar Dental Hospital and Implant Center in Raipur",

      url: websiteUrl,

      logo: {
        "@type": "ImageObject",

        "@id": `${websiteUrl}/#logo`,

        url: logoUrl,
      },

      image: logoUrl,

      telephone: "+91-7400656692",

      contactPoint: {
        "@type": "ContactPoint",

        telephone: "+91-7400656692",

        contactType: "customer service",

        areaServed: "IN",

        availableLanguage: ["English", "Hindi"],
      },

      sameAs: [
        "https://www.facebook.com/sikarwardentalhospitalandimplantcenterraipur",
        "https://www.instagram.com/sikarwardentalhospitalraipur",
      ],
    },

    // =========================================================
    // DOCTOR / PERSON
    // =========================================================
    {
      "@type": "Person",

      "@id": `${websiteUrl}/#dr-sunny-sikarwar`,

      name: "Dr. Sunny Sikarwar",

      jobTitle: "Oral and Maxillofacial Surgeon",

      image: logoUrl,

      telephone: "+91-7400656692",

      worksFor: {
        "@id": `${websiteUrl}/#dentalhospital`,
      },
    },

    // =========================================================
    // FAQ
    // =========================================================
    {
      "@type": "FAQPage",

      "@id": `${websiteUrl}/#faq`,

      mainEntity: [
        {
          "@type": "Question",

          name:
            "What dental services do you offer at your dental hospital in Raipur?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "We provide comprehensive dental care in Raipur, including dental check-ups, teeth cleaning, root canal treatment, dental implants, crowns and bridges, tooth extraction, braces, teeth whitening, cosmetic dentistry, and other restorative and preventive dental treatments.",
          },
        },

        {
          "@type": "Question",

          name:
            "How can I book an appointment at your dental clinic in Raipur?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "You can book an appointment at our dental clinic in Raipur by calling us, sending a WhatsApp message, or using our online appointment booking option. We recommend scheduling an appointment in advance for a convenient consultation.",
          },
        },

        {
          "@type": "Question",

          name:
            "What are the clinic timings of your dental hospital in Raipur?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Our dental hospital in Raipur is open Monday to Saturday from 9:30 AM to 9:00 PM. Please contact us before visiting to confirm the latest consultation and appointment timings.",
          },
        },

        {
          "@type": "Question",

          name: "Do you provide emergency dental treatment in Raipur?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Yes, we provide dental care for urgent problems such as severe toothache, dental infection, broken or damaged teeth, swelling, and other dental emergencies. Contact our dental hospital in Raipur to check emergency appointment availability.",
          },
        },

        {
          "@type": "Question",

          name: "Do you offer online dental consultations?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Yes, online dental consultations may be available for suitable dental concerns. Our dentist can discuss your symptoms and recommend whether an in-person examination is required.",
          },
        },

        {
          "@type": "Question",

          name: "What is the cost of a dental consultation?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Our initial consultation fee is affordable and transparent. Total treatment costs depend on the diagnosis and procedure required, which will be thoroughly discussed with you beforehand.",
          },
        },

        {
          "@type": "Question",

          name:
            "Where is your dental hospital located in Raipur?",

          acceptedAnswer: {
            "@type": "Answer",

            text:
              "Our dental hospital is located at Gol Chowk, Beside Deerghayu Hospital, Deendayal Upadhyay Nagar, Raipur, Chhattisgarh. Patients can visit our dental clinic for consultations, treatments, and emergency dental care.",
          },
        },
      ],
    },
  ],
};