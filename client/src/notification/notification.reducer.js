const notificationReducer = (state,action) => {
    switch(action.type) {
        case "ADD_NOTIFICATION": 
            return [...state, {...action.payload}];
        case "REMOVE_NOTIFICATION":
            return state.filter(n => n.id !== action.id);
        default:
            return state;
        }
}

export default notificationReducer;