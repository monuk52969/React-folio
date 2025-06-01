import Navbar from './constants/components/Navbar'
import Hero from './constants/components/Hero'
import Technologies from './constants/components/Technologies'
import Projects from './constants/components/Projects'
import Experience from './constants/components/Experience'
import Contact from './constants/components/Contact'
import SplashCursor from "./customComponents/SplashCursor/SplashCursor"

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden text-stone-300 antialiased">
      {/* 🌌 Background for whole site */}
      <div className="fixed inset-0 -z-20">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
        </div>
      </div>

      {/* 🌐 Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SplashCursor />
        <Navbar />
        <Hero />
        
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  )
}

export default App
