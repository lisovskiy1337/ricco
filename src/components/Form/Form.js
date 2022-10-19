import React from "react";
import Input from "../Input/Input";
import axios from 'axios'
import { useState } from "react";
import { useCallback } from "react";
import PopUp from "../../utils/PopUp";


const Form = () => {

    const [status, setStatus] = useState({
        submitted: false,
        submitting: false, 
        info: {error: false, msg: null}
    });

    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        tel: ''
    });

    const handleInput = useCallback((e) => {
        e.persist();
        setInputs(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
        setStatus({
            submitted: false,
            submitting: false,
            info: {error: false, msg: null}
        })
    }, []);

    const handleServerRespone = useCallback((ok, msg) => {
        if (ok) {
            setStatus({
                submitted: true,
                submitting: false,
                info: {error: false, msg}
            });
            setInputs({
                name: '',
                email: '',
                tel: ''
            });
        } else {
            setStatus({
                submitted: false,
                submitting: false,
                info: {error: true, msg}
            });
        }
    }, []);

    const handleSubmit = useCallback(e => {
        e.preventDefault();
        setStatus(prev => ({...prev, submitting:true}));
        axios({
            method: 'POST',
            url: 'https://formspree.io/f/mjvlnalb',
            data: inputs
        }).then(response => {
            handleServerRespone(true, 'Cool! We`ll contact you ASAP ;)'); 
            setStatus(prev => ({...prev, submitting:false}));
        });

    }, [inputs, handleServerRespone]);

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2 px-8 min-w-full md:min-w-[500px]">
            {status.info.error && (
                <div className="bg-red-100 border-red-400 px-4 py-3 rounded-lg relative" role='alert'>
                    <strong>Error</strong>
                    <p>{status.info.msg}</p>
                </div>
            )}
            {status.submitted && (
                <PopUp children={status.info.msg} cb={status.submitted} bg={`#28bd26`}/>
            )}
                <Input inputId='name' inputName='name' inputType='name' placeholder='Your name' handleInput={handleInput} value={inputs.name}/>
                <Input inputId='email' inputName='email' inputType='email' placeholder='Your email' handleInput={handleInput} value={inputs.email}/>
                <Input inputId='tel' inputName='tel' inputType='tel' placeholder='Your phone' handleInput={handleInput} value={inputs.tel}/>
                <button className="bg-cyan-600 hover:bg-cyan-500 py-2 px-8  rounded-xl mt-6 transition-all duration-500" type="submit">
                    {!status.submitting
                        ? !status.submitted
                            ? 'Submit'
                            : 'Submitted'
                        : 'Submitting...'
                    }
                </button>
        </form>
    )
}


export default Form;