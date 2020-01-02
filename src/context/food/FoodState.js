import React, { useReducer } from 'react';
import foodReducer from './foodReducer';
import FoodContext from './foodContext';



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
            
            ]
        
        };
    const [state, dispatch] = useReducer(foodReducer, initialState);
    return (
        <FoodContext.Provider
        value = {{
            foods: state.foods
        }}
        >
            {props.children}
        </FoodContext.Provider>
    )
}

export default FoodState
