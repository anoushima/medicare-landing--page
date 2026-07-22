import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
// import Features from "./components/Features";
// import TrustedBy from "./components/TrustedBy";
// import Consultants from "./components/Consultants";
// import ConsultCTA from "./components/ConsultCTA";
// import MapFeatures from "./components/MapFeatures";
// import BannerCTA from "./components/BannerCTA";
// import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-ink-950">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        {/* <Features />
        <TrustedBy />
        <Consultants />
        <ConsultCTA />
        <MapFeatures />
        <BannerCTA /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}
