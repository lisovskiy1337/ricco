import React, { useCallback, useEffect, useState } from "react";


const GoTop = () => {

    const [scroll, setScrollY] = useState({height : 0, visible: false });
    
    const handleScrollY = () => {
        setScrollY((prevState) => ({...prevState, height: window.scrollY}));       
    }

    const scrollSetConditions = useCallback((triggerHeight) => {
        if (scroll.height > triggerHeight){
            setScrollY((prevState) => ({...prevState, visible: true}));
        } else {
            setScrollY((prevState) => ({...prevState, visible: false}));
        }
    }, [scroll.height]);

    useEffect(() => {
        document.addEventListener('scroll', handleScrollY, {passive: true});
        if (window.screen.width > 1024){
            scrollSetConditions(750);
        } else {
            scrollSetConditions(850);
        }
        
        return () => document.removeEventListener('scroll', handleScrollY);
    }, [scrollSetConditions]);

    const handleScrollTop = useCallback(() => {
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
          });
    }, []);
   
    return (
        <button 
            onClick={handleScrollTop} 
            className={` ${scroll.visible ? 'visible opacity-100' : 'invisible translate-x-[30rem] opacity-0'} 
                w-12 h-12 fixed right-10 bottom-10 bg-cyan-600 hover:bg-cyan-500 rounded-lg flex justify-center 
                items-center transition-all duration-500 z-50`}
        >
            <img className="rotate-180" src="/assets/images/arrow.svg" width="32px" alt="" />
        </button>

    )
}

export default GoTop;