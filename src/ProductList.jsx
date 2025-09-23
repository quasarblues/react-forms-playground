import { useState } from "react";
// import NewProductForm from "./NewProductForm";
import ValidatedProductForm from "./ValidatedProductForm";
import { v4 as uuidv4 } from 'uuid';

export default function ProductList() {
    const [products, setProducts] = useState([
        { id: uuidv4(), name: 'strings', amount: 10 },
        { id: uuidv4(), name: 'picks', amount: 75 }
    ])

    const addProduct = (product) => {
        setProducts(currentProducts => (
            [...currentProducts, { ...product, id: uuidv4() }]
        ))
    }

    return (
        <div>
            <h2>Instock</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id}>{product.name}- {product.amount}</li>
                ))}
            </ul>
            <ValidatedProductForm addProduct={addProduct} />
        </div>
    )
}