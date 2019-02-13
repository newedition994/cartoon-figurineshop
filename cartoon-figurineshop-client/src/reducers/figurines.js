export default (state = [], action) => {
    switch (action.type) {
        case 'GET_FIGURINES_SUCCESS':
            return action.figurines;

        case 'CREATE_FIGURINE_SUCCESS':
            return state.concat(action.figurine);

        default:
            return state;
    }
}