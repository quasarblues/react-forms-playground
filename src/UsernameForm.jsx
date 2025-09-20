import { useState } from "react"
import "./UsernameForm.css"

export default function UsernameForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const updateUsername = (e) => {
        setUsername(e.target.value);
    }

    const updateEmail = (e) => {
        setEmail(e.target.value);
    }

    const updatePassword = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="UsernameForm">
            <h2>Complete the Form</h2>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" placeholder="username" value={username} onChange={updateUsername} />

            <label htmlFor="password">Passowrd:</label>
            <input type="password" id="password" placeholder="password" value={password} onChange={updatePassword} />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="email" value={email} onChange={updateEmail} />
            <button>Submit</button>
        </div>
    )
}