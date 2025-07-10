import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

export default function AboutSection() {
  const headingRef = useRef(null)
  const imageRef = useRef(null)
  const isInView = useInView(imageRef, { once: false, margin: "-100px" })
  const controls = useAnimation()
  const [fixHeading, setFixHeading] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const offset = headingRef.current?.getBoundingClientRect().top
      setFixHeading(offset <= 60)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 1 },
      })
    }
  }, [isInView, controls])

  return (
    <div className="relative min-h-[200vh] bg-gradient-to-b from-purple-200 to-indigo-200 px-6 pt-24">
      {/* Sticky Heading */}
      <h1
        ref={headingRef}
        className={`text-4xl font-bold text-center transition-all duration-500 ${
          fixHeading
            ? "fixed top-10 left-1/2 -translate-x-1/2 bg-white/70 backdrop-blur-md p-2 rounded-xl shadow-md"
            : "relative top-0"
        }`}
      >
        About Us
      </h1>

      {/* Spacer */}
      <div className="h-[100vh]" />

      {/* Image Reveal */}
      <div className="flex justify-center items-center h-[100vh]">
        <motion.img
          ref={imageRef}
          initial={{ opacity: 0, y: 200, scale: 0.6 }}
          animate={controls}
          src="src\assets\webdev.jpg"
          alt="About"
          className="w-full max-w-3xl rounded-xl shadow-xl object-cover"
        />
      </div>
    </div>
  )
}
