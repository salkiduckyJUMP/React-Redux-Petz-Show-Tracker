import * as ActionTypes from '../actions/actionTypes';

const initialState = {
    petz: [],
    showPoints: 0,
    showTitle: 'No Title Earned Yet',
    retiredStatus: 'Not Retired'

}

const petzReducer = (state = initialState, action) => {
    // console.log("State in Reducer");
    // console.log(state);
    // console.log(state.petz);


    switch(action.type) {
        case ActionTypes.ADD_PET: 
            let newPetz = state.petz.concat([action.data]);
            return {
                ...state,
                petz: newPetz 
            };
        case ActionTypes.RETIRE_PET:
            let updatedPetsRetired = state.petz.map((pet) => {
                if (pet.id === action.id) {
                    if(pet.showPoints >= 30) {

                        return {
                            ...pet,
                            retiredStatus: 'Retired'
                        }
                        
                    } else return pet;
                   
                } else return pet;
            })
            return { ...state,
                petz: updatedPetsRetired}
            case ActionTypes.ADD_BIS:
                let updatedPetsBIS = state.petz.map((pet) => {
                    if (pet.id === action.id ) {

                    return {
                        ...pet,
                       showPoints: pet.showPoints + 5
                    }
                } else return pet;
            })
            return { ...state,
                 petz: updatedPetsBIS}
            case ActionTypes.ADD_1ST:
                let updatedPets1ST = state.petz.map((pet) => {
                    if (pet.id === action.id ) {
                    return {
                        ...pet,
                        showPoints: pet.showPoints + 4
                    }
                } else return pet;
            })
            return { ...state,
                 petz: updatedPets1ST}
            case ActionTypes.ADD_2ND:
                let updatedPets2ND = state.petz.map((pet) => {
                    if (pet.id === action.id ) {
                    return {
                        ...pet,
                        showPoints: pet.showPoints + 3
                    }
                } else return pet;
            })
            return { ...state,
                 petz: updatedPets2ND}
            case ActionTypes.ADD_3RD:
                let updatedPets3RD = state.petz.map((pet) => {
                    if (pet.id === action.id ) {
                    return {
                        ...pet,
                        showPoints: pet.showPoints + 2
                    }
                } else return pet;
            })
            return { ...state,
                 petz: updatedPets3RD}
            case ActionTypes.ADD_HM:
                let updatedPetsHM = state.petz.map((pet) => {
                    if (pet.id === action.id ) {
                    return {
                        ...pet,
                        showPoints: pet.showPoints + 1
                    }
                } else return pet;
            })
            return { ...state,
                 petz: updatedPetsHM}
            case ActionTypes.UPDATE_TITLE:
                let updatedPets = state.petz.map((pet) => {
                    // console.log('pet.showPoints ' + pet.showPoints);

                    if (pet.id === action.id) {
                        let newShowTitle = pet.showTitle;
                        if (pet.showPoints >= 5 && pet.showPoints <= 9) {
                            newShowTitle = 'Reserved Champion (RCh)';
                        } else if (pet.showPoints >= 10 && pet.showPoints <= 14 ) {
                            newShowTitle = 'Champion (Ch)';
                        } else if (pet.showPoints >= 15 && pet.showPoints <= 19) {
                            newShowTitle = 'Grand Champion (GCh)';
                        } else if (pet.showPoints >= 20 && pet.showPoints <= 29) {
                            newShowTitle = 'Master Grand Champion (MGCh)';
                        } else if (pet.showPoints >= 30 && pet.showPoints <= 49) {
                            newShowTitle = 'Supreme Grand Champion (SGCh)';
                        } else if (pet.showPoints >= 50) {
                            newShowTitle = 'Ultimate Grand Champion (UGCh)';
                        }

                        return {
                            ...pet,
                            showTitle: newShowTitle
                        }
                    } else return pet;
                   
                })
                return { ...state,
                    petz: updatedPets}
           
        default:
            return state;
    }
}

export default petzReducer;