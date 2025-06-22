"use client"

import {motion} from "framer-motion"

const words = (text: string) =>
    text.split(" ").map((word, i) => (
        <motion.span
            key={i}
            initial={{opacity: 0, y: 10}}
            animate={{opacity: 1, y: 0}}
            transition={{
                delay: 2 + (i * 0.05),
                type: "spring",
                bounce: 0,
                duration: 0.6,
            }}
            className="inline-block mr-1"
        >
            {word}
        </motion.span>
    ))

export default function AboutMe() {
    return (
        <motion.div
            className="w-full flex flex-col justify-center items-center text-center"
            initial={{x: -50, opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration: 1.2, ease: "easeOut", delay: 1}}
        >
            <h2 className="w-1/2 text-4xl">About Me</h2>
            <p className="w-1/2">Hello, I'm Zane Lesley</p>
            <h3 className="w-1/4 text-2xl">Full Stack Developer</h3>
            <p className="w-1/2">
                {words(
                    "I'm a Computer Science graduate from the University of Oklahoma and a passionate full-stack " +
                    "developer. I enjoy constantly learning, building, and refining my skills. " +
                    "In my free time, I love creating applications that align with my interests and exploring " +
                    "new technologies through hands-on projects."
                )}
            </p>
        </motion.div>
    )
}
