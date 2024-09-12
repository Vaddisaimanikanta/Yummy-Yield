import React from 'react';
import '../Styles/Foodcard.css';

export default function FoodCard({ food }) {
    return (
        <div className="food-card" id='foodcard'>
            <img src={food.image} alt={food.name} />
            <div className="food-card-content">
                <h3>{food.name}</h3>
                <p>{food.description}</p>
                <p className="price">₹{food.price *20}</p>
            </div>
        </div>
    );
}
