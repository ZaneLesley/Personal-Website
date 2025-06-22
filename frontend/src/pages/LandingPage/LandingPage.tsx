import {useEffect, useState} from "react";

import Header from './Header.tsx'
import Loading from "./Loading.tsx";
import Introduction from "./Introduction.tsx";
import Footer from "./Footer.tsx";
import AboutMe from "./AboutMe.tsx";
import Projects from "./Projects.tsx";


export default function LandingPage() {
    const [isLoading, setIsLoading] = useState(true);


    // Artificial Loading
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 100);
        return () => clearTimeout(timer);
    }, [])

    return (
        <>
            {isLoading ? (
                <div className="flex items-center justify-center min-w-screen min-h-screen">
                    <Loading/>
                </div>
            ) : (
                <div className="flex flex-col min-w-screen min-h-screen justify-between items-center">
                    <Header/>
                    <Introduction/>
                    <AboutMe/>
                    <Projects/>
                    <Footer/>
                </div>
            )}
        </>
    );
}