import { ADD_FOOD, EDIT_FOOD, DELETE_FOOD } from '../actions/types';

export const addFood = food => ({
    type: ADD_FOOD,
    data: food
});


export const deleteFood = key => ({
    type: DELETE_FOOD,
    key: key
})