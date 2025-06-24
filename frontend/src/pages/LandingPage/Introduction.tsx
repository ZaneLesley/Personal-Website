import {motion} from 'framer-motion'
import introImage from '../../assets/IntroImage.jpg'
import AboutMe from "./AboutMe.tsx";

export default function Introduction() {
    return (
        <div className="w-full flex flex-col sm:min-h-screen justify-around">

            <div
                className="flex sm:flex-row flex-col w-full min-h-screen sm:min-h-0 sm:justify-center justify-around"
            >
                <div className="flex flex-col sm:w-1/2">
                    <motion.h2
                        className="text-3xl text-white"
                        initial={{opacity: 0, scale: 0.6}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.3}}
                    >Hi my name is
                    </motion.h2>

                    <motion.h1
                        className="text-6xl text-citrine"
                        initial={{opacity: 0, scale: 0.6}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{
                            type: "spring",
                            stiffness: 150,
                            damping: 10,
                            delay: 0.3
                        }}
                    >
                        Zane Lesley
                    </motion.h1>
                </div>
                <div className="sm:w-1/2">
                    <motion.img
                        className="sm:w-1/2"
                        src={introImage}
                        alt="image"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{duration: 5}}
                    >
                    </motion.img>
                </div>
            </div>
            <AboutMe/>
        </div>
    )
}
