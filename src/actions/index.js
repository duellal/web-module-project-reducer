export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR = 'CLEAR_DISPLAY'
export const CHANGE_MEM = 'CHANGE_MEMORY'
export const CLEAR_MEM = "CLEAR_MEMORY"

export const addOne = () => {
    return ({ type: ADD_ONE });
}

export const applyNumber = (number) => {
    return ({ type: APPLY_NUMBER, payload: number });
}

export const applyOperator = (operator) => {
    return ({ type: CHANGE_OPERATION, payload: operator })
}

export const applyClear = () => {
    return ({ type: CLEAR })
}

export const applyChangeMem = () => {
    return ({ type: CHANGE_MEM })
}

export const applyClearMem = () => {
    return ({ type: CLEAR_MEM })
}
