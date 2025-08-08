import Head from "next/head";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
  noindex?: boolean;
  nofollow?: boolean;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Flourish Flowers UAE | Premium Flower Delivery Dubai & Abu Dhabi",
  description = "Premium flower delivery across UAE. Fresh, hand-picked flowers for all occasions. Same-day delivery in Dubai, Abu Dhabi, Sharjah. Wedding flowers, birthday bouquets, corporate gifts. AED 150+",
  keywords = "flower delivery UAE, Dubai flowers, Abu Dhabi flowers, wedding flowers UAE, birthday flowers, corporate flowers, fresh flowers Dubai, flower shop UAE, online flowers, same day delivery",
  canonical,
  ogImage = "/images/hero-img.png",
  ogType = "website",
  structuredData,
  noindex = false,
  nofollow = false,
}) => {
  const fullTitle = title.includes("Flourish Flowers")
    ? title
    : `${title} | Flourish Flowers UAE`;
  const fullCanonical = canonical
    ? `https://flourishflowers.ae${canonical}`
    : "https://flourishflowers.ae/";
  const fullOgImage = ogImage.startsWith("http")
    ? ogImage
    : `https://flourishflowers.ae${ogImage}`;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Flourish Flowers UAE" />
      <meta
        name="robots"
        content={noindex ? "noindex" : nofollow ? "nofollow" : "index, follow"}
      />

      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Flourish Flowers UAE" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:site" content="@flourishflowersuae" />
      <meta name="twitter:creator" content="@flourishflowersuae" />

      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="AE" />
      <meta name="geo.placename" content="United Arab Emirates" />
      <meta name="geo.position" content="25.2048;55.2708" />
      <meta name="ICBM" content="25.2048, 55.2708" />

      {/* Business Information */}
      <meta name="business:contact_data:street_address" content="Dubai, UAE" />
      <meta name="business:contact_data:locality" content="Dubai" />
      <meta name="business:contact_data:region" content="Dubai" />
      <meta name="business:contact_data:postal_code" content="00000" />
      <meta
        name="business:contact_data:country_name"
        content="United Arab Emirates"
      />
      <meta
        name="business:contact_data:phone_number"
        content="+971-XX-XXX-XXXX"
      />
      <meta
        name="business:contact_data:email"
        content="info@flourishflowers.ae"
      />
      <meta
        name="business:contact_data:website"
        content="https://flourishflowers.ae"
      />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      )}

      {/* Preload Critical Resources */}
      <link rel="preload" href="/images/hero-img.png" as="image" />
      <link rel="preload" href="/images/featured-collection-3.jpg" as="image" />

      {/* DNS Prefetch for External Domains */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />

      {/* Additional Meta Tags for UAE Market */}
      <meta name="currency" content="AED" />
      <meta name="price_range" content="AED 150+" />
      <meta name="service_area" content="Dubai, Abu Dhabi, Sharjah, UAE" />
      <meta name="delivery_time" content="Same day delivery available" />
      <meta
        name="payment_methods"
        content="Cash, Credit Card, Online Payment"
      />
    </Head>
  );
};

export default SEOHead;
