import React from "react";
import { useEffect } from "react";
import { useState } from "react";


const PopUp = ({children, bg, cb}) => {
    const [showPopUp, setShowPopUp] = useState(false);

    useEffect(() => {
        setShowPopUp(true)
        const timer = setTimeout(() => {
            setShowPopUp(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, [cb]);

    return (
        <div className={`fixed left-[50%] -translate-x-[50%] transition-all duration-600 ${showPopUp ? 'top-2 translate-y-0' : '-translate-y-6'} z-50 rounded-xl  min-w-[250px] p-2 text-white text-md text-center`} style={{background : bg ? bg : '#2fcc46'}}>
            {children}
        </div>
    )
}


export default PopUp;