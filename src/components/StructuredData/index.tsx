import React from 'react';

const StructuredData: React.FC = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "AutomotiveSchool",
    "name": "Автошкола Формула водіння",
    "alternateName": "Формула водіння",
    "description": "Професійна автошкола в Києві з досвідченими інструкторами та сучасними автомобілями",
    "url": "https://formula-vodinnya.com",
    "logo": "https://formula-vodinnya.com/logo/logo-red.png",
    "image": "https://formula-vodinnya.com/images/og-image.jpg",
    "telephone": "+380992011683",
    "email": "info@formula-vodinnya.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "вул. Прикладна, 123",
      "addressLocality": "Київ",
      "postalCode": "01001",
      "addressCountry": "UA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.4501,
      "longitude": 30.5234
    },
    "openingHours": [
      "Mo-Fr 08:00-20:00",
      "Sa 09:00-18:00", 
      "Su 10:00-16:00"
    ],
    "priceRange": "600-3000 UAH",
    "paymentAccepted": "Cash, Card, Bank Transfer",
    "currenciesAccepted": "UAH",
    "areaServed": {
      "@type": "City",
      "name": "Київ"
    },
    "serviceType": "Driving School",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Олена Петренко"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5"
        },
        "reviewBody": "Дуже задоволена навчанням! Інструктор терпляво пояснював всі нюанси. Склала іспит з першого разу завдяки якісній підготовці."
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Курси водіння",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Онлайн-курс ПДР",
            "description": "Теоретичні заняття з живим спілкуванням з викладачем у Zoom",
            "provider": {
              "@type": "Organization",
              "name": "Формула водіння"
            }
          },
          "price": "3000",
          "priceCurrency": "UAH"
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "Course",
            "name": "Практичне навчання - Механічна КПП",
            "description": "Навчання водінню на автомобілях з механічною коробкою передач",
            "provider": {
              "@type": "Organization", 
              "name": "Формула водіння"
            }
          },
          "price": "600",
          "priceCurrency": "UAH",
          "unitText": "за годину"
        }
      ]
    },
    "sameAs": [
      "https://instagram.com/formula_vodinnya",
      "https://facebook.com/formula_vodinnya",
      "https://t.me/formulamessage_bot"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://formula-vodinnya.com/#organization",
    "name": "Автошкола Формула водіння",
    "image": "https://formula-vodinnya.com/images/og-image.jpg",
    "telephone": "+380992011683",
    "email": "info@formula-vodinnya.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "вул. Прикладна, 123",
      "addressLocality": "Київ",
      "postalCode": "01001",
      "addressCountry": "UA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 50.4501,
      "longitude": 30.5234
    },
    "url": "https://formula-vodinnya.com",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification", 
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday", 
        "opens": "10:00",
        "closes": "16:00"
      }
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Автошкола Формула водіння",
    "url": "https://formula-vodinnya.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://formula-vodinnya.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
};

export default StructuredData;
