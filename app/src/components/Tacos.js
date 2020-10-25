import React from 'react';
import TacoRecipe from './TacoRecipe';
import { connect, useDispatch } from 'react-redux';
import { fetchRecipe } from '../actions/index'

const Tacos = (props) => {

    const dispatch = useDispatch();

    const getNewRecipe = e =>{
        e.preventDefault();
        dispatch(fetchRecipe())
    }
    
    return(
        <>
        {props.recipes.map((item) => (<TacoRecipe name={item}/>))}
        <button onClick={ getNewRecipe }> Get new recipe </button>
        </>
    )
}

function mapStateToProps(state) {
    return {
        recipes: state.recipes,
    }
}

export default connect(mapStateToProps, {})(Tacos);