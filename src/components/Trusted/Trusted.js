import React from "react";
import WidthObserver from "../../utils/WidthObserver";
import SliderLogos from "../SliderLogos/SliderLogos";



const Trusted = () => {


    return (
        <WidthObserver>
            <section className="min-h-screen bg-white flex flex-col items-center justify-center">
                <h3 className="leading-10 text-2xl md:text-3xl text-center px-8"><b>Companies we're working with</b></h3>
                <SliderLogos/>
                <h3 className="leading-10 text-2xl md:text-3xl text-center max-w-6xl mx-auto px-8">We and our partners always try our to provide the best service in the niche.</h3>
            </section>
        </WidthObserver>
    )
}

export default Trusted