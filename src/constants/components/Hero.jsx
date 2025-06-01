
import { HERO_CONTENT } from "../index";
import { motion } from "framer-motion"
import HeroImg from "../../assets/monu-hero.JPG"

const containerVariants = {
    hidden: {opacity: 0, x: -100},
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChilder: 0.5,
      }
    }
}

const childVariants = {
  hidden: {opacity: 0, x: -100},
  visible: {opacity: 1, x: 0, transition: { duration: 0.5}}
}

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">
            <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:p-8 mb-10">
              <motion.img 
  src={HeroImg} 
  alt="Hero-Monu" 
  className="object-cover w-[90%] h-[520px] rounded-3xl mix-blend-lighten"
  style={{ boxShadow: 'inset 0 -30px 30px -10px rgba(0,0,0,0.5)' }}
  initial={{ x:100, opacity: 0}}
  animate={{ x: 0, opacity: 1}}
  transition={{ duration: 1, delay: 1.5}}
/>
   {/* <Lanyard /> */}
            </div>
            </div>

            <div className="w-full lg:w-1/2">
            <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="flex flex-col items-center lg:items-start mt-10">
                <motion.h2
                variants={childVariants}
                className="pb-2 text-4xl tracking-tighter lg:text-8xl">Monu Kumar</motion.h2>
                <motion.span 
                variants={childVariants}className="whitespace-nowrap bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">
  Full Stack Development
</motion.span>
                <motion.p 
                variants={childVariants}
                className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
                    {HERO_CONTENT}
                </motion.p>
                <motion.a
                variants={childVariants}
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="bg-white rounded-full font-bold p-4 text-sm text-stone-900 mb-10"
                >Download Resume</motion.a>
            </motion.div>
            </div>
        </div>
    </div>
  )
}

export default Hero