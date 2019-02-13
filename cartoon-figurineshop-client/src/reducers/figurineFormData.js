export default (state = {
    name: '',
    price: 0,
    img_url: '',
    size: 0
}, action) => {

    switch (action.type) {
        case 'UPDATED_DATA':
            return action.figurineFormData;

        default:
            return state;

    }
}