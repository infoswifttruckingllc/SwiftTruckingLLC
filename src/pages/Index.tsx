import { Hero } from '@/components/Hero';
import { SEO } from '@/components/SEO';
import { Services } from '@/components/Services';
import { WhyChooseUs } from '@/components/WhyChooseUs';
// import { Industries } from '@/components/Industries';
import Process from '@/components/Process';
import { Testimonials } from '@/components/Testimonials';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';

const Index = () => {
  return (
    <>
      <SEO
        title="Swift Trucking LLC | Professional Truck Dispatch Services"
        description="Professional truck dispatch for owner-operators and fleets. 24/7 support, high-paying loads, no upfront fees. Dry van, reefer, flatbed, box truck."
        canonical="https://swifttruckingllc.com/"
        keywords={[
          'truck dispatch', 'freight dispatch', 'load booking', 'owner operator', 'flatbed', 'reefer', 'dry van', 'box truck', 'logistics'
        ]}
        ogImage="https://swifttruckingllc.com/og-image.jpg"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Swift Trucking LLC',
          url: 'https://swifttruckingllc.com/',
          telephone: '+13302031165',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '1001 S MAIN ST #704',
            addressLocality: 'Kalispell',
            addressRegion: 'MT',
            postalCode: '59901',
            addressCountry: 'US'
          },
          openingHours: 'Mo-Su 00:00-23:59',
          areaServed: 'US',
          sameAs: []
        }}
      />
      <Hero />
      <Services />
      <WhyChooseUs />
      {/* <Industries /> */}
      <Process />
      <Testimonials />
      <FAQ />
      <ContactForm />
    </>
  );
};

export default Index;
