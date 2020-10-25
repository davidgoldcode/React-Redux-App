import React from 'react';
import { connect } from 'react-redux';

const TacoRecipe = (props) => {
    
    return(
        <div>{props.name}</div>
    )
}

export default TacoRecipe;