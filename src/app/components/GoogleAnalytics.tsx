import Script from "next/script";

const GoogleAnalytics = () => {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
            custom_map: {
              'custom_parameter_1': 'business_type',
              'custom_parameter_2': 'service_area',
              'custom_parameter_3': 'currency'
            }
          });
          
          // Enhanced E-commerce tracking
          gtag('config', '${GA_MEASUREMENT_ID}', {
            'custom_map': {
              'dimension1': 'business_type',
              'dimension2': 'service_area',
              'dimension3': 'currency'
            }
          });
          
          // Track custom events
          gtag('event', 'business_type', {
            'business_type': 'florist',
            'service_area': 'UAE',
            'currency': 'AED'
          });
          
          // Track page views with enhanced parameters
          gtag('event', 'page_view', {
            'page_title': document.title,
            'page_location': window.location.href,
            'business_type': 'florist',
            'service_area': 'UAE',
            'currency': 'AED'
          });
        `}
      </Script>
    </>
  );
};

export default GoogleAnalytics;
