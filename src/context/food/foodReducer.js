import{
    ADD_FOOD
} from '../types';

export default (state, action)=>{
    switch(action.type){
        case ADD_FOOD:
            return{
                ...state,
                foods: [...state.foods, action.payload]
            }
        default:
            return state;
    }
}