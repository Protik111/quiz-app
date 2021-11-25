import { ActionTypes } from './Quetions.types.js';

export const handleCategoryChange = payload => {
    return {
        type: ActionTypes.CHANGE_CATEGORY,
        payload
    }
}

export const handleDifficultyChange = payload => {
    return {
        type: ActionTypes.CHANGE_DIFFICULTY,
        payload
    }
}

export const handleAmountChange = payload => {
    return {
        type: ActionTypes.CHANGE_AMOUNT,
        payload
    }
}