import {mdiEmail, mdiGithub, mdiLinkedin} from '@mdi/js';
import Icon from "@mdi/react";

export default function Header() {
    return (
        <div
            className="w-full flex lg:flex-row flex-col justify-around items-center bg-gunmetal border-b-2 border-indigo-dye mb-4">
            <div className="w-1/6 lg:p-4"></div>
            <div className="w-full"></div>
            <div className="w-1/6 flex flex-row justify-center p-4 gap-8 lg:border-l-2 border-indigo-dye mr-4">
                <a href="https://github.com/ZaneLesley" rel="noreferrer noopener" target="_blank">
                    <Icon path={mdiGithub} size={1.5}></Icon></a>
                <a href="https://www.linkedin.com/in/zanelesley/" rel="noreferrer noopener" target="_blank">
                    <Icon path={mdiLinkedin} size={1.5}></Icon>
                </a>
                <a href={"mailto:zanelesley@outlook.com"} target="_blank" rel="noopener noreferrer">
                    <Icon path={mdiEmail} size={1.5}></Icon></a>
            </div>
        </div>
    )
}