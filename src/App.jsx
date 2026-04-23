import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Marquee from './components/Marquee.jsx'
import About from './components/About.jsx'
import Servers from './components/Servers.jsx'
import Skills from './components/Skills.jsx'
import Timeline from './components/Timeline.jsx'
import Twitch from './components/Twitch.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg text-fg">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[120] focus:px-4 focus:py-2 focus:bg-bmw-blue focus:text-bg focus:tech-label focus:!text-bg"
      >
        Skip to content
      </a>
      <div className="grain" aria-hidden="true" />
      <ScrollProgress />
      <Navbar />
      <main id="main">
        <Hero />
        <Marquee />
        <About />
        <Servers />
        <Skills />
        <Timeline />
        <Twitch />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
