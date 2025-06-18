import Header from './Header.tsx'
import Loading from "./Loading.tsx";

import {useEffect, useState} from "react";

export default function LandingPage() {
    const [isLoading, setIsLoading] = useState(true);


    // Artificial Loading
    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 3000);
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
                    <Header/><>
                    {/* Add more content here */}</>
                </div>
            )}
        </>
    );
}