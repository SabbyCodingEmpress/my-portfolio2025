// Homepage entry (Hero + Sections)
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
//import Contact from '@/components/sections/Contact';
//import FinalNote from '@/components/sections/FinalNote';
//import Intro from '@/components/sections/Intro';
//import MissionList from '@/components/sections/MissionList';
import PortfolioGrid from '@/components/sections/PortfolioGrid';
//import PortfolioHighlights from '@/components/sections/PortfolioHighlights';
// import Footer from '@/components/layout/Footer';
import Cta from '@/components/sections/Cta';


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
            

        </main>
    )
}
