"use client"
import { useState } from "react";
import Header from "../header/header"
import InputField from "../inputField/inputField"

export default function SignUp() {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [birthday, setBirthday] = useState("");
    const [referralCode, setReferralCode] = useState("");
    const [country, setCountry] = useState();

    function handleInputChange(identifier, value) {
        if (identifier === "Phone number") {
            setPhoneNumber(value);
        }

        if (identifier === "email") {
            setEmail(value);
        }

        if (identifier === "First name") {
            setFirstName(value);
        }

        if (identifier === "Last name") {
            setLastName(value);
        }

        if (identifier === "Birthday") {
            setBirthday(value);
        }

        if (identifier === "Referral Code") {
            setReferralCode(value);
        }

        if (identifier === "Country") {
            setCountry(value);
        }   
    }

    function handleLogin() {
        setSubmitted(true);
    }

    const phoneNumberNotValid = submitted && (phoneNumber.length < 10);
    const emailNotValid = submitted && !email.includes('@');
    const firstNameNotValid = submitted && !firstName;
    const lastNameNotValid = submitted && !lastName;

    return (
        <>
            <Header />
            <div>
                <h2>Let's get started</h2>
                <p>
                    We just need a bit more information. 
                    Please enter your details to get started.
                </p>
            </div>
            

            <div className="flex">
                <InputField label = "Country" className="w-15" require = "required" />
                <InputField 
                    label = "Phone number" 
                    type="tel" 
                    invalid={phoneNumberNotValid}
                    require = "required" 
                    placeholder="08000000000"
                    onChange={(event) => handleInputChange("Phone number", event.target.value)}
                />
            </div>

            <InputField 
                label="Email address" 
                type ="email" 
                invalid = {emailNotValid}
                require = "required" 
                placeholder="example@email.com"
                onChange={(event) => handleInputChange("email", event.target.value)}
                />

            <div className="flex">

                <InputField 
                    label="First name" 
                    type ="text" 
                    invalid = {firstNameNotValid}
                    require = "required" 
                    placeholder="e.g John"
                    onChange={(event) => handleInputChange("First name", event.target.value)}
                    />

                <InputField 
                    label="Last name" 
                    type ="text" 
                    invalid = {lastNameNotValid}
                    require = "required" 
                    placeholder="e.g Doe"
                    onChange={(event) => handleInputChange("Last name", event.target.value)}
                    />
            </div>
            
            <InputField 
                label="Birthday" 
                type ="month" 
                placeholder="select"
                value={birthday}
                onChange={(event) => handleInputChange("Birthday", event.target.value)}
                />

            <InputField 
                label="Referral code" 
                type ="text" 
                placeholder="Enter a referral code"
                value={referralCode}
                onChange={(event) => handleInputChange("Referral Code", event.target.value)}
                />
            
            <div>
                <button onClick={handleLogin}>Continue</button>
                <p>By signing up, you agree to Chowdeck's <a>Terms of use</a> and <a>Privacy Policy</a></p>
            </div>
            
            
        </>
        
    )
}