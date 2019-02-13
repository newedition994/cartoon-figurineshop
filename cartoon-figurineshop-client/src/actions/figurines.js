const API_URL = process.env.REACT_APP_API_URL;


const setFigurines = figurines => {
    return {
        type: 'GET_FIGURINES_SUCCESS',
        figurines
    }
}

export const getFigurines = () => {
    return dispatch => {
        return fetch(`${API_URL}/figurines`)
            .then(response => response.json())
            .then(figurines => dispatch(setFigurines(figurines)))
            .catch(error => console.log(error));
    }
}
