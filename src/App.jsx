import { useEffect } from 'react'
import Lenis from '@studio-freight/lenis'

import Navbar from './constants/components/Navbar'
import Hero from './constants/components/Hero'
import SplashCursor from "./customComponents/SplashCursor/SplashCursor"
import Technologies from './constants/components/Technologies'
import Projects from './constants/components/Projects'
import Experience from './constants/components/Experience'
import Contact from './constants/components/Contact'

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    const raf = (time) => {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      {/* 🌌 Background for whole site */}
      <div className="fixed inset-0 -z-20">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
        </div>
      </div>

      {/* 🌐 Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Navbar />
        <Hero />
        <SplashCursor />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  )
}

export default App
