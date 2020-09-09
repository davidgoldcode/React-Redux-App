import React from 'react';
import TacoRecipe from './TacoRecipe';
import { connect } from 'react-redux';

const Tacos = (props) => {
    
    return(
        <>
        {props.recipes.map((item) => (<TacoRecipe recipe={item}/>))}
        </>
    )
}

function mapStateToProps(state) {
    return {
        recipes: state.recipes,
    }
}

export default connect(mapStateToProps, {})(Tacos);