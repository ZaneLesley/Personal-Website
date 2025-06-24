import TechStackItem from "./TechStackItem.tsx";
import {motion} from "framer-motion";

type Props = {
    title: string,
    description: string,
    linkURL: string,
    techStackItems:
        {
            url: string,
            src: string,
            alt: string,
            size?: number
        }[]
}

const cardVariants = {
    hidden: {opacity: 0, y: 20},
    show: {opacity: 1, y: 0, transition: {duration: 1}},
};

export default function ProjectCard({title, description, linkURL, techStackItems}: Props) {
    return (
        <motion.div variants={cardVariants}
                    whileHover={{
                        scale: 1.05,
                        transition: {duration: 0.1}
                    }}>
            <a
                href={linkURL} rel="noopener noreferrer" target="_blank"
            >
                <div
                    className="w-120 flex flex-col justify-between h-full gap-8 p-2 bg-gunmetal/40 border-2 border-indigo-dye rounded-2xl">
                    <h4 className="text-2xl mt-2">{title}</h4>
                    <p>{description}</p>
                    <div className="w-full flex flex-row gap-2 ml-2">
                        {techStackItems.map((item, idx) => (
                            <TechStackItem key={idx} {...item} />
                        ))}
                    </div>
                </div>
            </a>
        </motion.div>
    )
}
