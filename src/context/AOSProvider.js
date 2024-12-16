"use client";

import { createContext, useContext, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOSContext = createContext();

export function AOSProvider({ children }) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return <AOSContext.Provider value={{}}>{children}</AOSContext.Provider>;
}

export const useAOS = () => useContext(AOSContext);
