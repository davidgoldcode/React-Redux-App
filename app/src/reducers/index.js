
const initialState = {
    recipes: ['recipe 1', 'recipe 2', 'recipe 3'], 
    loadingTacos: true,
    errorMessage: '',
}

export default (state = initialState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}