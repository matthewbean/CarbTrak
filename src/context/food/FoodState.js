import React, { useReducer } from 'react';
import foodReducer from './foodReducer';
import FoodContext from './foodContext';
import{
    ADD_FOOD
} from '../types'



const FoodState = props => { 




    const initialState = 
        {
            foods:[
                {name: "pizza",
            carbs: "30",
            fat: "20",
            id: 1},
            
            {name: "icecream",
            carbs: "40",
            fat: "10",
            id: 2},
            ],

        
        };
    const [state, dispatch] = useReducer(foodReducer, initialState);
    
    const addFood = (data)=>{
        dispatch({
            type: ADD_FOOD,
            payload:data
        })
    }
    const getTotalCarbs = ()=>{
        let x = 0;
        state.foods.forEach(food => {
            x += parseInt(food.carbs);
        });
        return x
    }


    return (
        <FoodContext.Provider
        value = {{
            foods: state.foods,
            dailyTotal: state.dailyTotal,
            getTotalCarbs,
            addFood
        }}
        >
            {props.children}
        </FoodContext.Provider>
    )
}

export default FoodState
