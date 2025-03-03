"use client"
import { useState } from "react";

export default function InputField({ label, invalid, invalidMessage, type, ...props }) {
    const [textField, setTextField] = useState(
        <input 
            className="rounded shadow border" 
            type={type} 
            name={label} 
            {...props} 
        />
    );

    let labelClasses = "block text-xs font-bold";
    let inputClasses = "rounded shadow border";

    if (invalid) {
        setTextField(
            <>
                <input 
                    className={inputClasses} 
                    type={type} 
                    name={label} 
                    {...props} 
                />
                <p className="w-full text-red-500 bg-red-100 rounded">{invalidMessage}</p>
            </>
        )
         
        inputClasses = " bg-stone-300"
    }
    return (
        <div>   
            <label className={labelClasses} htmlFor={label}>{label}</label><br/>
            {textField}
            {/*<input type={type} name={label} {...props} />*/}
        </div>
    )
}