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

export default function App() {
  return (
    <div className="relative min-h-screen bg-bg text-fg">
      <div className="grain" aria-hidden="true" />
      <Navbar />
      <main>
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
