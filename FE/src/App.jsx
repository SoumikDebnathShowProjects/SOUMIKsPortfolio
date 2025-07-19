import Header from "./components/Header"
import Hero from "./components/Hero"
import WorkExperience from "./components/WorkExperience"
import Projects from "./components/Projects"
import Testimonials from "./components/Testimonials"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"
import "./index.css"

function App() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      <Header />
      <main>
        <Hero />
        <WorkExperience />
        <Projects />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  )
}

export default App
