const initialState = {
    order: 'desc'
}

const filter = (state = initialState, action) => {
    if(action.type === 'SET_SORT_BY') {
        return {
            ...state,
            order: action.payload
        }
    }
    return state;
}

export default filter;