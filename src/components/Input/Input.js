import React from "react";

const Input = ({placeholder, inputId, inputName, inputType, handleInput, value}) => {

    return (
        <label className="form__label w-full">
            <input 
                className="form__input w-full" 
                required 
                maxLength={64}
                id={inputId}
                name={inputName}
                type={inputType} 
                placeholder=" "
                onChange={handleInput}
                value={value}
            />
            <span className="placeholder">{placeholder}</span>
        </label>
    )
}


export default Input;