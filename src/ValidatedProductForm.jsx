// Copied from NewProductForm.jsx

import { useState } from 'react'
import './NewProductForm.css'

export default function ValidatedProductForm({ addProduct }) {
    const [formData, setFormData] = useState({
        name: "",
        amount: ""
    })

    const [validProduct, setValidProduct] = useState(false);

    const validateName = (name) => {
        if (name.length === 0) {
            setValidProduct(false);
        } else {
            setValidProduct(true);
        }
    };

    const handleInput = (e) => {
        if (e.target.name === "name") {
            validateName(e.target.value);
        }
        setFormData(current => {
            return {
                ...current,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validProduct) {
            addProduct(formData);
            setFormData({ name: "", amount: 0 });
        }
    };

    return (
        <form className="NewProductForm" onSubmit={handleSubmit}>
            <h2>Add Product</h2>

            <label htmlFor="productName">Name</label>
            <input
                type="text"
                name="name"
                id="productName"
                placeholder="product name"
                onChange={handleInput}
                value={formData.name} />
            {!validProduct && <p style={{ color: 'red', textAlign: 'left' }}>Cannot be empty</p>}

            <label htmlFor="productAmount">Amount</label>
            <input
                type="text"
                name="amount"
                id="productAmount"
                placeholder="amount"
                onChange={handleInput}
                value={formData.amount} />

            <button>submit</button>
        </form>
    )
}