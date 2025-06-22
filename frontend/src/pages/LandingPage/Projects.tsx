import reactLogo from '../../assets/React-icon.svg';
import pythonLogo from '../../assets/python-logo-only.svg'
import prismaLogo from '../../assets/prisma-svgrepo-com.svg'
import postgresLogo from '../../assets/postgresql-icon.svg'
import expressLogo from '../../assets/Express.svg'
import ProjectCard from "./ProjectCard.tsx";

export default function Projects() {
    return (
        <div className="w-full flex flex-row justify-around">
            <ProjectCard
                title="Pentale"
                description="This project is a Wordle-inspired guessing game themed around League of Legends esports, created out
                    of a passion for competitive gaming and optimization. It fetches Leaguepedia esports data through
                    Python scripts, stores it in PostgreSQL via Node.js and Prisma, and serves it through an Express.js
                    backend. The interactive frontend is built with React, Material UI, and Framer Motion, managing
                    state securely with session cookies."
                githubURL="https://github.com/ZaneLesley/Pentale"
                techStackItems={[
                    {src: reactLogo, url: "https://react.dev/", alt: "react logo"},
                    {src: pythonLogo, url: "https://www.python.org/", alt: "python logo"},
                    {src: postgresLogo, url: "https://www.postgresql.org/", alt: "postgres logo"},
                    {src: prismaLogo, url: "https://www.prisma.io/", alt: "prisma logo"},
                    {src: expressLogo, url: "https://expressjs.com/", alt: "express logo"},
                ]}
            ></ProjectCard>
        </div>
    )
}