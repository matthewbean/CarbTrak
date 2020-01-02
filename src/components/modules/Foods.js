import React, { useContext } from 'react'
import FoodItem from './FoodItem';
import FoodContext from '../../context/food/foodContext'


const Foods = () => {

    const foodContext = useContext(FoodContext);
    
    const { foods } = foodContext

    return (
        <ul>
            {foods.map(food=>(
                <FoodItem food = {food} />
            ))}

        </ul>
    )
        }
export default Foods
