import { useState } from 'react'
import './NewProductForm.css'

export default function NewProductForm({ addProduct }) {
    const [formData, setFormData] = useState({
        name: "",
        amount: ""
    })

    const handleInput = (e) => {
        setFormData(current => {
            return {
                ...current,
                [e.target.name]: e.target.value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(formData);
        setFormData({ product: "", quantity: 0 })
    }

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