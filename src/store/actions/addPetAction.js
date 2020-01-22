import * as ActionTypes from './actionTypes';

export const addPet = (data) => {
    return {
        type: ActionTypes.ADD_PET,
        data: data
    }
}