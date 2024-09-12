import React from 'react';
import Foodcard from './Foodcard';
import '../Styles/FoodList.css';
import { food_list } from '../assets/frontend_assets/assets';

const groupByCategory = (items) => {
    return items.reduce((acc, item) => {
        if (!acc[item.category]) {
            acc[item.category] = [];
        }
        acc[item.category].push(item);
        return acc;
    }, {});
};

export default function FoodList() {
    const groupedFoodList = groupByCategory(food_list);

    return (
        <div className="food-list-container" >
            {Object.keys(groupedFoodList).map((category) => (
                <div key={category} className="category-section">
                    <h2 className="category-heading">{category}</h2>
                    <div className="food-cards-container">
                        {groupedFoodList[category].map((food) => (
                            <Foodcard key={food._id} food={food} />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
