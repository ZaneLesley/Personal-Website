import {motion} from 'framer-motion'
import AboutMe from "./AboutMe.tsx";
import introImage from '../../assets/IntroImage.png'

export default function Introduction() {
    return (
        <div className="w-full flex flex-col min-h-screen justify-around items-center">

            <div
                className="flex flex-col w-11/12 md:w-1/2 md:min-h-0 min-h-screen justify-start  lg:mt-0 lg:justify-around items-center md:gap-7"
            >
                <div className="flex flex-col lg:w-full">
                    <motion.h2
                        className="text-3xl text-white"
                        initial={{opacity: 0, scale: 0.6}}
                        animate={{opacity: 1, scale: 1}}
                        transition={{duration: 0.3}}
                    >Hi my name is
                    </motion.h2>

                    <motion.h1
                        className="text-6xl text-citrine font-bold"
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
                <div className="w-full max-w-100 mt-30 lg:mt-0 mb-15 lg:mb-0">
                    <motion.img
                        className="rounded-full border-2 border-indigo-dye"
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
