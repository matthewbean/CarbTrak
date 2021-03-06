import React, { useState, useContext } from 'react';
import FoodContext from '../../context/food/foodContext';
import AlertContext from '../../context/alert/alertContext';
import Alerts from '../layout/Alerts'

const AddFood = () => {
const foodContext = useContext(FoodContext);
const alertContext = useContext(AlertContext);
const { addFood, getTotalFat } = foodContext;
const { setAlert } = alertContext;

const [food, setFood] = useState({
             name: '',
            carbs: '',
            fat: ''

});
const{ name, carbs, fat } = food;



const onChange = e=> setFood({ ...food, [e.target.name]: e.target.value });

const onSubmit = e=> {
    e.preventDefault();
    var reg = /^[0-9]+$/;


    if(name === "" || carbs === ""){
        setAlert("Please fill out every field", "danger" )
    }else if(!reg.test(carbs) || !reg.test(fat)){
        setAlert("Please only enter numbers for carbs and fat", "danger")
    }else{
    
    addFood(food);
    setFood({
        name: '',
        carbs: '',
        fat: '',
    });
}

  
};


    
    return (
        
        <form onSubmit = {onSubmit} className = "col-sm">
            <Alerts />
            <h2 className = "text-primary">
                Add Food
            </h2>
            <div className = "input-group">

            <input 
            type = "text" 
            placeholder = "Food" 
            name = "name"
            value = {name}
            onChange = {onChange} />
            </div>

            <div className = "input-group">

             <input
             type = "text" 
            placeholder = "Carbs" 
            name = "carbs"
            value = {carbs}
            onChange = {onChange} />
                <div class="input-group-append">
            <span class="input-group-text">g</span>
                </div>
            </div>

            <div className = "input-group btn-block">


             <input
             type = "text" 
            placeholder = "Fat" 
            name = "fat"
            value = {fat}
            onChange = {onChange} />
                            <div class="input-group-append">
            <span class="input-group-text">g</span>
                </div>
            </div>
            
           
        <div className = "input-group">
            <input type = "submit"
            value = {"Add Food"}
            className = "btn btn-primary"
            />
        </div>
        </form>

    )
}

export default AddFood
