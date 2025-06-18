import {motion} from 'framer-motion'
import introImage from '../../assets/IntroImage.jpg'

export default function Introduction() {
    return (
        <motion.div
            className="flex flex-row w-full justify-center items-center"
        >
            <div className="flex flex-col w-1/2">
                <motion.h2
                    className="text-3xl text-white"
                    initial={{opacity: 0, scale: 0.6}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.8}}
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
                        delay: 0.7
                    }}
                >
                    Zane Lesley
                </motion.h1>
            </div>
            <div className="w-1/2">
                <img
                    className="w-1/2"
                    src={introImage}
                    alt="image"></img>
            </div>
        </motion.div>
    )
}