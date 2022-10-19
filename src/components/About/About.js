import React from "react";

const memberArr = [
    {name: 'John Travolta', job: 'CEO'},
    {name: 'Lisa Simpson', job: 'Director'},
    {name: 'Max Rock', job: 'Chief'},
    {name: 'Dennis McChicken', job: 'Diving Guide'},
    {name: 'Chloie Laurent', job: 'Hotel Manager'},
    {name: 'Jack Wolfskin', job: 'Savanna guide'},
    {name: 'Chris Jameson', job: 'Survival Expert'},
    { name: 'Boris Morisson', job: 'Manager'}
];

const About = ({imgLoaded, handleImageLoaded}) => {
    return (
        <section className="py-20 text-2xl md:text-3xl relative z-30 bg-white">
            <div className="container mx-auto px-8">
                <p className="leading-tight max-w-6xl mx-auto tracking-tight text-center" style={{hyphens: "auto"}}>
                    <strong>
                        We will show you the most fascinating nature wonder ever. 
                    </strong> Our team of experts in Costa Rica tourism will provide the best
                        service in the best places in the country. 
                      
                </p>
                <div className="text-center pt-10 ">
                    <h2 className="text-4xl tracking-wide">Our team</h2>
                    <p className="text-xl">the &ldquo;spec-ops&rdquo; forces</p>
                    <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 lg:gap-10">
                        {memberArr.map((member, i) => {
                            return (
                                <div key={i}>
                                    <img onLoad={handleImageLoaded} src={`/assets/images/member-${i+1}.png`} className={`block max-w-[50%] mx-auto transition-all duration-1000 ${imgLoaded ? 'opacity-100' : 'opacity-0 -translate-y-1'}`} alt="" />
                                    <p className="text-xl pt-2 font-semibold">{member.name}</p>
                                    <span className="text-xl">{member.job}</span>
                                </div>
                            )
                            
                           
                        })}
                    </div>
                </div>
            </div>
            
        </section>
    )
}


export default About;