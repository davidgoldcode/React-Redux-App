import axios from 'axios';

// api link
const apiUrl = 'http://taco-randomizer.herokuapp.com/random/';

// action types
export const FETCH_RECIPE = 'FETCH_RECIPE';
export const FETCH_RECIPE_SUCCESS = 'FETCH_RECIPE_SUCCESS';
export const FETCH_RECIPE_ERROR = 'FETCH_RECIPE_ERROR';

// action creators
export const fetchRecipe = () => {
 return dispatch => {
    dispatch({ type: FETCH_RECIPE });
        axios 
        .get(apiUrl)
        .then(res => {
            let data = Object.keys(res.data).map((item) => res.data[item].name);
            data = data[Math.ceil(Math.random(5))]
            dispatch({ type: FETCH_RECIPE_SUCCESS, payload: data }); // too fix
        })
        .catch(err => {
            debugger;
            dispatch({ type: FETCH_RECIPE_ERROR, payload: { message: "No tacos for you, friend"} });
        })
}
 }
 