import * as ActionTypes from './actionTypes';

export const addBIS = (id) => {
    return {
        type: ActionTypes.ADD_BIS,
        id: id
        }
}

export const add1st = (id) => {
    return {
        type: ActionTypes.ADD_1ST,
        id: id
        }
}

export const add2nd = (id) => {
    return {
        type: ActionTypes.ADD_2ND,
        id: id
    }
}

export const add3rd = (id) => {
    return {
        type: ActionTypes.ADD_3RD,
        id: id
    }
}

export const addHM = (id) => {
    return {
        type: ActionTypes.ADD_HM,
        id: id
    }
}