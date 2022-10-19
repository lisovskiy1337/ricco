import React, { useCallback, useRef} from "react";
import { useContext } from "react";
import UseAnimationFrame from "../hooks/UseAnimationFrame";
import { WidthContext } from "./WidthObserver";


const SliderContainer = ({children, initialOffsetX, className, contentWidth}) => {
    const { innerWidth } = useContext(WidthContext);
    const refScrollX = useRef(initialOffsetX);
    const refContainer = useRef(null);
    const refContent = useRef(null);
    const enabled = innerWidth < contentWidth;

    UseAnimationFrame(
        enabled, 
        useCallback(() => {
            const {current: elContainer} = refContainer;
            const {current: elContent} = refContent;

            if (elContainer && elContent) {
                refScrollX.current += 0.75;
                elContainer.scrollLeft = refScrollX.current;
                if (elContainer.scrollLeft >= elContent.clientWidth){
                    refScrollX.current = 0;
                    elContainer.scrollLeft = 0;
                }
            }
        }, [])
    );

    return (
        <div ref={refContainer} className={`slider-container py-16 overflow-x-hidden whitespace-nowrap max-w-full pointers-events-none ${className}`}>
            <div ref={refContent} className="inline-block">
                {children}
            </div>
            <div className={enabled ? 'inline-block' : 'hidden'}>{children}</div>
        </div>
    )
}

export const SliderItem = ({children, width}) => (
    <div className="inline-flex justify-center items-center mx-4" style={{width}}>
        {children}
    </div>
)


export default SliderContainer;