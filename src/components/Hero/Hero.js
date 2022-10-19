import React from "react";
import { useContext } from "react";
import { useRef } from "react";
import ScrollObserver, { ScrollContext } from "../../utils/ScrollObserver";

const Hero = ({imgLoaded, handleImageLoaded}) => {

    const refContainer = useRef(null);
    const { scrollY } = useContext(ScrollContext);
    const { current: elContainer } = refContainer;
    let progress = 0;

    if(elContainer) {
        progress = Math.min(1, scrollY / elContainer.clientHeight);
    }

    return (
        <ScrollObserver>
            <div 
                ref={refContainer} 
                className="min-h-screen flex flex-col items-center justify-center bg-[a2a2a4] sticky top-0 overflow-hidden -z-10"
                style={{transform: `translateY(-${progress * 20}vh)`}}
            >
                <video autoPlay loop muted playsInline className={`absolute w-full h-full object-cover overflow-hidden -z-99`}>
                    <source src="/assets/videos/hero.mp4"/>
                </video>
                <img  onLoad={handleImageLoaded} className={`m-4 transition-all duration-1000 ${imgLoaded ? 'opacity-100' : 'opacity-0 -translate-y-10'} z-20`} src="/assets/images/koala.svg" alt="" height="56" width="56"/>
                <div className="p-12 font-bold z-10 text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] text-center flex-1 flex items-center justify-center flex-col">
                    <h1 className="mb-6 text-4xl xl:text-6xl tracking-wide">Ricco</h1>
                    <span className="mb-2 text-2xl xl:text-3xl tracking-normal">Feel true life.</span>
                </div>
                <div onLoad={handleImageLoaded} className={`mb-2 transition-all duration-1000 ${imgLoaded ? 'opacity-100' : 'opacity-0 translate-y-10'} z-20`}>
                    <img src="/assets/images/arrow.svg" alt="" height="44" width="44"/>
                </div>
            </div>
        </ScrollObserver>
    )
}

export default Hero;