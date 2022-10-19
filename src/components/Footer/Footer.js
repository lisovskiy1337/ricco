import React from "react";


const footerArr = [
    {text : 'Instagram'},
    {text : 'Twitter'},
    {text : 'YouTube'},
    {text : 'Privacy'}
];

const Footer = () => {
    
    return (
        <footer className="bg-black p-6 flex flex-col sm:flex-row justify-center items-center gap-8">
            <img className="lg:mr-8" src="/assets/images/koala.svg" alt="" height="36" width="36"/>
            {footerArr.map(item => (
                <span key={item.text}><a className="relative pb-0.5 footer-link text-white text-md" href="#">{item.text}</a></span>
            ))}
        </footer>
    )

} 

export default Footer;