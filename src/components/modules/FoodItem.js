import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// import FoodContext from '../context/food/foodContext';

const FoodItem = ({ food }) => {
    // const foodContext  = useContext(FoodContext);
    const { name, carbs, fat} = food;
    return (
        <li>
            <div>Name: {name}</div>
            <div>Carbs: {carbs} </div>
            <div>Fat: {fat}</div>
        </li>
    )
}
FoodItem.propTypes = {
    food: PropTypes.object.isRequired
}


export default FoodItem
