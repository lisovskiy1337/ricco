import React from "react";
import Form from "../Form/Form";

const ContactUs = () => {
    return (
        <section className="bg-black min-h-screen py-20 text-white flex flex-col justify-center items-center">
            <img src="/assets/images/koala.svg" alt="" height="52" width="52"/>
            <h3 className="leading-10 text-2xl md:text-3xl m-6">Contact Us</h3>
            <Form/>
        </section>
    )
}


export default ContactUs;