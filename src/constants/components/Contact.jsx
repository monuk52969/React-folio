import React from 'react'
import { CONTACT } from '../index'
import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut"
    }
  })
}

const Contact = () => {
  return (
    <motion.div
      className='border-1 border-stone-900 pb-20'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.h2
        className='my-10 text-center text-4xl'
        variants={fadeUp}
        custom={0}
      >
        Get in Touch
      </motion.h2>

      <motion.div
        className='text-center tracking-tighter'
      >
        <motion.p className='my-4' variants={fadeUp} custom={1}>
          {CONTACT.address}
        </motion.p>

        <motion.p className='my-4' variants={fadeUp} custom={2}>
          {CONTACT.phoneNo}
        </motion.p>

        <motion.a
          href={`mailto:${CONTACT.email}`}
          className='border-b inline-block'
          variants={fadeUp}
          custom={3}
        >
          {CONTACT.email}
        </motion.a>
      </motion.div>
    </motion.div>
  )
}

export default Contact
