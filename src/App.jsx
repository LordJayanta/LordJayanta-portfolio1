import Navbar from "./components/Navbar"
import CaseStudiesSection from "./components/sections/CaseStudiesSection";
import HeroSection from "./components/sections/HeroSection"
import styled, { ThemeProvider } from "styled-components"
import TestimonialSection from "./components/sections/TestimonialSection";
import RecentWorkSection from "./components/sections/RecentWorkSection";
import ContactSection from "./components/sections/ContactSection";
import Footer from "./components/Footer";
import Header from "./components/sections/Header";



function App() {
  const theme = {
    color: {
      green: '#62BA1B',
      darkgray: '#1B1B1B',
    },
    media: {
      mobile: "768px",
      tab: "998px"
    }
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <main>
          <HeroSection />
          <CaseStudiesSection />
          <TestimonialSection />
          <RecentWorkSection />
          <ContactSection />
        </main>
        <Footer />
      </ThemeProvider>
    </>
  )
}



export default App
