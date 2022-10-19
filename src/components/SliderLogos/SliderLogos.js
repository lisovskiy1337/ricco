import React from "react";
import SliderContainer, { SliderItem } from "../../utils/Slider";

const logosArr = [
    {imgUrl: 'wizz.svg'},
    {imgUrl: 'tui.svg'},
    {imgUrl: 'raddison.svg'},
    {imgUrl: 'ryanair.svg'},
    {imgUrl: 'avianca.svg'},
    {imgUrl: 'backwoods.svg'},
    {imgUrl: 'hurley.png'},

]

const SliderLogos = () => (
    <>
        <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
            {logosArr.map(logo => (
                <SliderItem width={150} key={logo.imgUrl}>
                    <img 
                        src={`/assets/images/logos/${logo.imgUrl}`} 
                        alt=""
                        width={150}
                        height={50}
                        className="object-contain"
                    />
                </SliderItem>               
            ))}
        
        </SliderContainer>
    </>
)


export default SliderLogos;