import React from "react";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { createContext } from "react";


export const WidthContext = createContext({
    innerWidth: 0
});

const WidthObserver = ({children}) => {
    const [innerWidth, setInnerWidth] = useState(0);
    const handleResize = useCallback(() => {
        setInnerWidth(window.innerWidth);
    }, []);

    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize, {passive: true});
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    return (
        <WidthContext.Provider value={{innerWidth}}>
            {children}
        </WidthContext.Provider>
    )
}

export default WidthObserver