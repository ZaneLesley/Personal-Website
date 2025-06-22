import TechStackItem from "./TechStackItem.tsx";
import {motion} from "framer-motion";

type Props = {
    title: string,
    description: string,
    githubURL: string,
    techStackItems:
        {
            url: string,
            src: string,
            alt: string,
            size?: number
        }[]
}

export default function ProjectCard({title, description, githubURL, techStackItems}: Props) {
    return (
        <motion.a
            href={githubURL} rel="noopener noreferrer" target="_blank"
            whileHover={{
                scale: 1.05,
                transition: {duration: 0.1}
            }}
        >
            <div className="w-120 flex flex-col gap-8 bg-gunmetal/40 border-2 border-indigo-dye rounded-2xl">
                <h4 className="text-2xl">{title}</h4>
                <p>{description}</p>
                <div className="w-full flex flex-row gap-2 ml-4 mb-2">
                    {techStackItems.map((item, idx) => (
                        <TechStackItem key={idx} {...item} />
                    ))}
                </div>
            </div>
        </motion.a>
    )
}
