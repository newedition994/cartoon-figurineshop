export default (state = [], action) => {
    switch (action.type) {
        case 'GET_FIGURINES_SUCCESS':
            return action.figurines;

        default:
            return state;
    }
}