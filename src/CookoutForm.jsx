import { useState } from "react";
import "./CookoutForm.css"

export default function CookoutForm({ addGuest }) {
    const [formData, setFormData] = useState({ name: "", food: "" });

    const handleChange = (e) => {
        setFormData(currentVal => {
            return {
                ...currentVal,
                [e.target.name]: e.target.value
            };
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addGuest(formData);
        setFormData({ name: "", food: "" });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Unvalidated</h2>
            <label htmlFor="name">Name:</label>
            <input
                type="text"
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
            />

            <label htmlFor="food">Food:</label>
            <input
                type="text"
                name="food"
                id="food"
                value={formData.food}
                onChange={handleChange}
            />
            <button>Submit</button>
        </form>
    )
}