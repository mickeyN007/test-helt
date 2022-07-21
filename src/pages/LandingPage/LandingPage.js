import Faq from "../../components/Faq/Faq";
import Feature from "../../components/Feature/Feature";
import Footer from "../../components/Footer/Footer";

import Hero from "../../components/Hero/Hero";
import Nav from "../../components/Nav/Nav";
import Network from "../../components/Network/Network";
import Testimonials from "../../components/Testimonials/Testimonials";

export default function LandingPage() {
  return (
    <>
      <Nav />
      <Hero />
      <Feature />
      <Testimonials />
      <Faq />
      <Network />
      <Footer />
    </>
  );
}
