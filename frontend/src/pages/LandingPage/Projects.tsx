import {techLogos} from "../../utils/techLogos.ts";
import {motion} from "framer-motion";
import ProjectCard from "./ProjectCard.tsx";


export default function Projects() {
    return (
        <motion.div
            className="w-full flex flex-col justify-around items-center gap-8"
        >
            <h2 className="w-1/2 text-4xl m-4">Projects</h2>
            <motion.div
                className="w-full flex flex-col lg:flex-row flex-wrap justify-center items-center lg:items-stretch gap-16"
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
                variants={{show: {transition: {staggerChildren: 0.05}}}}
            >
                <ProjectCard
                    title="Pentale"
                    description="This project is a Wordle-inspired guessing game themed around League of Legends esports, created out
                    of a passion for competitive gaming and optimization. It fetches Leaguepedia esports data through
                    Python scripts, stores it in PostgreSQL via Node.js and Prisma, and serves it through an Express.js
                    backend. The interactive frontend is built with React, Material UI, and Framer Motion, managing
                    state securely with session cookies."
                    linkURL="https://zanelesley.com/pentale/"
                    techStackItems={[
                        {src: techLogos.react, url: "https://react.dev/", alt: "react logo"},
                        {src: techLogos.python, url: "https://www.python.org/", alt: "python logo"},
                        {src: techLogos.postgres, url: "https://www.postgresql.org/", alt: "postgres logo"},
                        {src: techLogos.prisma, url: "https://www.prisma.io/", alt: "prisma logo"},
                        {src: techLogos.express, url: "https://expressjs.com/", alt: "express logo"},
                        {src: techLogos.nginx, url: "https://nginx.org/", alt: "nginx logo"},
                    ]}
                ></ProjectCard>
                <ProjectCard
                    title="Weather Application"
                    description="This project is a minimalist, fast-loading weather application that provides quick and
                clean weather updates. It's built with TypeScript, TailwindCSS, and TanStack Query for efficient
                data fetching. The app is hosted and served using NGINX for reliable performance and domain management."
                    linkURL="https://zanelesley.com/weather/"
                    techStackItems={[
                        {src: techLogos.typescript, url: "https://www.typescriptlang.org/", alt: "typescript logo"},
                        {src: techLogos.react, url: "https://react.dev/", alt: "react logo"},
                        {src: techLogos.tailwind, url: "https://tailwindcss.com/", alt: "tailwind logo"},
                        {src: techLogos.tanStack, url: "https://tanstack.com/query/latest", alt: "tanstack logo"},
                        {src: techLogos.nginx, url: "https://nginx.org/", alt: "nginx logo"},
                    ]}
                ></ProjectCard>
                <ProjectCard
                    title="Personal Website"
                    description="This is the personal website you're currently viewing, built with TypeScript, React, and
                TailwindCSS. It features smooth animations using Framer Motion and is deployed using NGINX for domain
                and server management."
                    linkURL="https://zanelesley.com/"
                    techStackItems={[
                        {src: techLogos.typescript, url: "https://www.typescriptlang.org/", alt: "typescript logo"},
                        {src: techLogos.react, url: "https://react.dev/", alt: "react logo"},
                        {src: techLogos.tailwind, url: "https://tailwindcss.com/", alt: "tailwind logo"},
                        {src: techLogos.nginx, url: "https://nginx.org/", alt: "nginx logo"},
                    ]}
                ></ProjectCard>
            </motion.div>
            <motion.div
                className="w-full flex flex-col lg:flex-row flex-wrap justify-center items-center lg:items-stretch gap-16"
                initial="hidden"
                whileInView="show"
                viewport={{once: true}}
                variants={{
                    show: {
                        transition: {
                            staggerChildren: 0.05,
                            delayChildren: 0.15
                        }
                    }
                }}
            >
                <ProjectCard
                    title="NCATrak Mock System"
                    description="Developed a full-stack Flask application for the University of Oklahoma
                    Health Sciences Center as part of an NIH-funded initiative. Designed a 22-table PostgreSQL
                    database with over 200 interrelated variables and built a custom Python data generator using
                    Faker for realistic mock data. Led a team, managed Git workflows, ensured
                    cross-platform compatibility, and mentored incoming capstone students for long-term project
                    sustainability."
                    linkURL="https://github.com/ZaneLesley/NCATrak-Mock-System"
                    techStackItems={[
                        {src: techLogos.python, url: "https://www.python.org/", alt: "python logo"},
                        {src: techLogos.postgres, url: "https://www.postgresql.org/", alt: "postgres logo"},
                        {
                            src: techLogos.anaconda,
                            url: "https://www.anaconda.com/products/navigator",
                            alt: "anaconda logo"
                        },
                        {
                            src: techLogos.flask,
                            url: "https://flask.palletsprojects.com/en/stable/",
                            alt: "flask logo"
                        },
                    ]}
                ></ProjectCard>
                <ProjectCard
                    title="Coloring and Physics Sandbox App"
                    description="A Java-based coloring and physics sandbox application built with LWJGL and Gradle,
                    allowing users to draw and simulate elements with dynamic physical behaviors. Features custom
                    cellular automata and rule-based interactions, creating emergent, physics-like effects. Utilized
                    Git workflows for clean collaboration and real-time rendering for interactive visuals."
                    linkURL="https://github.com/ZaneLesley/Sandbox-Physics-Application"
                    techStackItems={[
                        {src: techLogos.java, url: "https://www.java.com/en/", alt: "java logo"},
                        {src: techLogos.lwjgl, url: "https://www.lwjgl.org/", alt: "lwjgl logo"},
                        {src: techLogos.gradle, url: "https://gradle.org/", alt: "gradle logo"},
                    ]}
                ></ProjectCard>
            </motion.div>
        </motion.div>
    )
}