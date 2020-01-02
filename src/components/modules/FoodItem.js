import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// import FoodContext from '../context/food/foodContext';

const FoodItem = ({ food }) => {
    // const foodContext  = useContext(FoodContext);
    const { name, carbs, fat} = food;
    return (
        <li className = "list-unstyled bg-light px-2 my-2 row border rounded">
            <div className = "p-1 col-sm">Name: {name}</div>
            <div className = "col-med justify-content-end">  
                <div>Carbs: {carbs} </div>
                <div>Fat: {fat}</div>
            </div>
        </li>
    )
}
FoodItem.propTypes = {
    food: PropTypes.object.isRequired
}


export default FoodItem
