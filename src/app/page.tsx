// Homepage entry (Hero + Sections)
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Contact from '@/components/sections/ContactSection';
import PortfolioGrid from '@/components/sections/PortfolioGrid';
// import Footer from '@/components/layout/Footer';
import Cta from '@/components/sections/Cta';
import ContactSection from '@/components/sections/ContactSection';


export default function HomePage() {
    return (
        <main>
            <section id="home">
                <Hero />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="portfolio-grid">
                <PortfolioGrid />
            </section>
            <section id="cta">
                <Cta />
            </section>
            <section id="contact-section">
                <ContactSection />
            </section>
            

        </main>
    )
}
