const API_URL = process.env.REACT_APP_API_URL;


const setFigurines = figurines => {
    return {
        type: 'GET_FIGURINES_SUCCESS',
        figurines
    }
}

const createFirgurine = figurine => {
    return {
        type: 'CREATE_FIGURINE_SUCCESS',
        figurine
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

export const addFirgurine = figurine => {
    return dispatch => {
        return fetch(`${API_URL}/figurines`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ figurine: figurine })
        })
            .then(response => response.json())
            .then(figurines => dispatch(createFirgurine(figurines)))
            .catch(error => console.log(error))
    }
}