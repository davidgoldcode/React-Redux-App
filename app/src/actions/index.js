import axios from 'axios';

// api link
const apiUrl = 'http://taco-randomizer.herokuapp.com/random/';

// action types
export const FETCH_RECIPE = 'FETCH_RECIPE';
export const FETCH_RECIPE_SUCCESS = 'FETCH_RECIPE_SUCCESS';
export const FETCH_RECIPE_ERROR = 'FETCH_RECIPE_ERROR';

// action creators
export const fetchRecipe = () => (dispatch) => {
    dispatch({ type: FETCH_RECIPE });
    axios 
        .get(apiUrl)
        .then(res => {
            debugger;
            dispatch({ type: FETCH_RECIPE_SUCCESS, payload: res.data.all }); // too fix
        })
        .catch(err => {
            debugger;
            dispatch({ type: FETCH_RECIPE_ERROR, payload: { message: "No tacos for you, friend"} });
        })
    }