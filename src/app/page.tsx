// Homepage entry (Hero + Sections)
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import FinalNote from '@/components/sections/FinalNote';
//import Intro from '@/components/sections/Intro';
import MissionList from '@/components/sections/MissionList';
import PortfolioGrid from '@/components/sections/PortfolioGrid';
import PortfolioHighlights from '@/components/sections/PortfolioHighlights';
import Footer from '@/components/layout/Footer';

export default function HomePage() {
    return (
        <main>
            <section id="home">
                <Hero />
            </section>
            <section id="about">
                <About />
            </section>
            <section id="contact">
                <Contact />
            </section>
            <section id="final-note">
                <FinalNote />
            </section>
            {/* <section id="intro">
                <Intro />
            </section> */}
            <section id="mission-list">
                <MissionList />
            </section>
            <section id="portfolio-grid">
                <PortfolioGrid />
            </section>
            <section id="portfolio-highlights">
                <PortfolioHighlights />
            </section>  
            
            {/* <section id="footer">
                <Footer/>
            </section> */}
            

        </main>
    )
}
