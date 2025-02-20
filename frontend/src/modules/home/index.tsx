import FooterComponent from "@/modules/home/footer-component";
import HeroSection from "@/modules/home/hero-section";
import NavbarComponent from "@/modules/home/navbar-component";

export const HomeComponent: React.FC = () => {
  return (
    <>
      <NavbarComponent />
      <HeroSection />
      <FooterComponent />
    </>
  );
};
