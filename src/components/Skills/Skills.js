import React, { useCallback, useEffect} from "react";
import { useMemo } from "react";
import { useRef } from "react";


const skillsArr = [
    {text: 'We know our main goals inside out.'},
    {text: 'Over 5,000 satisfied clients.'},
    {text: 'Our team will serve from the first to the last second of your stay with us.'}
];

const Skills = () => {

    const refContainer = useRef(null);
  
    const callbackF = useCallback((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('active');
                
            } else {
                entry.target.classList.remove('active');
            }     
        })     
    }, [])

    const options = useMemo(() =>{
        return {
            root: null,
            rootMargin: '0px',
            threshold: 0.7
        }
    }, []);
    

    useEffect(() =>{
        const observer = new IntersectionObserver(callbackF, options);
        const children = [...refContainer.current.children];
        if(children){
            children.forEach((element, i) => {
            
                
                observer.observe(element);
                return () => {
                    if (element) observer.unobserve(element);
                }
            });
        } 
       
    }, [refContainer, options, callbackF]);

    return (
        <section className='min-h-screen skills grayscale '>
           <div className="container mx-auto px-8">
            <div ref={refContainer} className="max-w-6xl mx-auto tracking-tight px-10 lg:px-20 py-20 md:py-24 lg:py-32 text-white" style={{hyphens: "auto"}}>
                {skillsArr.map((item, i) => {
                    return (
                        <p key={i} className="moving-text text-6xl xl:text-7xl mb-7">{item.text}</p>
                    )
                })}
            </div>
           </div>
        </section>
    )
} 

export default Skills;