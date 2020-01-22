import * as ActionTypes from './actionTypes';

export const updateTitle = (id) => {
    return {
        type: ActionTypes.UPDATE_TITLE,
        id: id
    }
}