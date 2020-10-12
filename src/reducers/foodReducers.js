import { ADD_FOOD,EDIT_FOOD,DELETE_FOOD } from '../actions/types';

const initialState = {
    foodList:[]
}

const foodReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FOOD:
            const newFood = {...state,
                foodList: state.foodList.concat({
                    key: Math.random,
                    name:action
                })}            
            return newFood

        case DELETE_FOOD:
            const deleteFood = {...state,
                foodList: state.foodList.filter(item => {
                    item.key !== action.key
                })
            }
            return deleteFood;
            
        default:
            break;
    }
}