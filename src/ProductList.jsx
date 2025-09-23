import { useState } from "react";
import NewProductForm from "./NewProductForm";

export default function ProductList() {
    const [products, setProducts] = useState([
        { id: 1, name: 'strings', amount: 10 },
        { id: 2, name: 'picks', amount: 75 }
    ])

    const addProduct = (product) => {
        setProducts(currentProducts => (
            [...currentProducts, { ...product, id: 3 }]
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
            <NewProductForm addProduct={addProduct} />
        </div>
    )
}