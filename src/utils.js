import {React , useState, useCallback, useEffect} from "react";


export const ScrollContext = React.createContext({
    scrollY: 0
});

const ScrollObserver = ({children}) => {
    

    return (
        <ScrollContext.Provider value={scrollY}>
            {children}
        </ScrollContext.Provider>
    )
}

export default ScrollObserver;