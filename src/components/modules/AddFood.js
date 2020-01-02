import React, { useState, useContext } from 'react';
import FoodContext from '../../context/food/foodContext';


const AddFood = () => {
const foodContext = useContext(FoodContext);
const { addFood } = foodContext;

const [food, setFood] = useState({
             name: '',
            carbs: '',
            fat: ''

});
const{ name, carbs, fat } = food;



const onChange = e=> setFood({ ...food, [e.target.name]: e.target.value });

const onSubmit = e=> {
    e.preventDefault();
    addFood(food);
    console.log('food added');
    setFood({
        name: '',
        carbs: '',
        fat: '',
    });
};


    
    return (
        <form onSubmit = {onSubmit} className = "col-sm">
            <h2 className = "text-primary">
                Add Food
            </h2>
            <input type = "text" 
            placeholder = "Food" 
            name = "name"
            value = {name}
            onChange = {onChange} />
             <input type = "text" 
            placeholder = "Carbs" 
            name = "carbs"
            value = {carbs}
            onChange = {onChange} />g
             <input type = "text" 
            placeholder = "Fat" 
            name = "fat"
            value = {fat}
            onChange = {onChange} />g
            
           
        <div>
            <input type = "submit"
            value = {"Add Food"}
            className = "btn btn-primary btn-block"
            />
        </div>
        </form>

    )
}

export default AddFood
