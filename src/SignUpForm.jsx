import { useState } from "react";
import "./SignUpForm.css";

export default function SignUpForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''

    });

    const handleChange = (e) => {
        const changedData = e.target.name;
        const newData = e.target.value;

        setFormData(currData => {
            return {
                ...currData,
                [changedData]: newData
            };
        });
    }
    return (
        <form className="SignUpForm">
            <h2>Sign Up With Us!</h2>
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" onChange={handleChange} />

            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" onChange={handleChange} />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={handleChange} />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={handleChange} />
        </form>
    )
}