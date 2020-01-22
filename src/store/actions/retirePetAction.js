import * as ActionTypes from './actionTypes';

export const retirePet = (id) => {
    return {
        type: ActionTypes.RETIRE_PET,
        id: id
    }
}