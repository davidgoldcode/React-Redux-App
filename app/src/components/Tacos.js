import React from 'react';
import TacoRecipe from './TacoRecipe';
import { connect } from 'react-redux';

const Tacos = (props) => {
    
    return(
        <div>Tacos go here</div>
    )
}

function mapStateToProps(state) {
    return {
        recipes: state.recipes,
    }
}

export default connect(mapStateToProps, {})(Tacos);