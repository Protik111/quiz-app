import { ActionTypes } from './Quetions.types';

let initialState = {
    question_category: '',
    question_difficulty: '',
    question_amount: 30
}

const questionReducer = (state = initialState, action) => {
    switch(action.type){
        case ActionTypes.CHANGE_CATEGORY :
            return {
                ...state,
                question_category: action.payload
            };
        case ActionTypes.CHANGE_DIFFICULTY :
            return {
                ...state,
                question_difficulty: action.payload
            };
        case ActionTypes.CHANGE_AMOUNT :
            return {
                ...state,
                question_amount: action.payload
            }
        default :
            return state;
    }
}

export default questionReducer;