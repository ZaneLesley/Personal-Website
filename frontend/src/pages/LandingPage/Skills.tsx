import {motion} from "framer-motion"

export default function Skills() {
    return (
        <motion.div
            className="flex flex-col justify-center w-full items-center mt-16 mb-16"
            initial={{opacity: 0, y: 20}}
            whileInView={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            viewport={{once: true}}
        >
            <h2 className="w-1/2 text-4xl m-4">Skills</h2>
            <div className="flex flex-row justify-center w-1/2 gap-20 sm:gap-80">
                <div className="w-1/3">
                    <h3 className="border-b-2 border-indigo-dye">Languages</h3>
                    <ul>
                        <li>Python</li>
                        <li>TypeScript</li>
                        <li>JavaScript</li>
                        <li>Java</li>
                        <li>C++</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <div className="w-1/3">
                    <h3 className="border-b-2 border-indigo-dye">Frameworks/Libraries</h3>
                    <ul>
                        <li>React</li>
                        <li>Framer Motion</li>
                        <li>Prisma</li>
                        <li>Express.js</li>
                        <li>TanStack Query</li>
                        <li>Material UI</li>
                        <li>Flask</li>
                    </ul>
                </div>
                <div className="w-1/3">
                    <h3 className="border-b-2 border-indigo-dye">Tools</h3>
                    <ul>
                        <li>Docker</li>
                        <li>NGINX</li>
                        <li>Node.js</li>
                        <li>GitHub</li>
                        <li>Postgres</li>
                        <li>Anaconda</li>
                        <li>Vite</li>
                        <li>Linux</li>
                        <li>VPS</li>
                        <li>Cloudflare</li>
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}