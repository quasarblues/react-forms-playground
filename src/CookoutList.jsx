import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import CookoutForm from "./CookoutForm";

export default function CookoutList() {

    const [guests, setGuests] = useState([
        { id: uuidv4(), name: 'Todd', food: 'pizza' },
        { id: uuidv4(), name: 'Randy', food: 'donuts' }
    ])

    const addGuest = (guest) => {
        setGuests(currGuest => {
            return [...currGuest, { ...guest, id: uuidv4() }];
        });
    };

    return (
        <div>
            <h2>Todd's Cookout</h2>
            <ul>
                {guests.map(g => (
                    <li key={g.id} style={{ listStyle: 'none', textAlign: 'left' }}>{g.name} will bring {g.food}</li>
                ))}
            </ul>
            <CookoutForm addGuest={addGuest} />
        </div>
    )
}