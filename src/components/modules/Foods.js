import React, { useContext } from 'react';
import FoodItem from './FoodItem';
import FoodContext from '../../context/food/foodContext';
import DailyTotalCarbs from './DailyTotalCarbs';
import DailyTotalFat from './DailyTotalFat'


const Foods = () => {

    const foodContext = useContext(FoodContext);
    
    const { foods } = foodContext

    return (
        <ul className = "col-sm container">
            {foods.map(food=>(
                <FoodItem food = {food} />
            ))}
        <DailyTotalCarbs />
        <DailyTotalFat />
        </ul>
    )
        }
export default Foods
