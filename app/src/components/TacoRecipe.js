import React from 'react';
import { connect } from 'react-redux';

const TacoRecipe = (props) => {
    
    return(
        <div>{props.recipe}</div>
    )
}

export default TacoRecipe;