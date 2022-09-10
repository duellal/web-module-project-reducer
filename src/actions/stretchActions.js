export const CALC_NUM = "CALC_NUM";
export const CREATE_NUM = 'CREATE_NUM'
export const SECOND_NUM = 'SECOND_NUM'
export const DECIMAL = 'DECIMAL'

export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR = 'CLEAR_DISPLAY'
export const CHANGE_MEM = 'CHANGE_MEMORY'
export const CLEAR_MEM = "CLEAR_MEMORY"
export const MEMORY_RECALL = "MEMORY_RECALL"

export const applyCalc = () => {
   return ({ type: CALC_NUM });
}

export const applyDecimal = (dot) => {
   return ({ type: DECIMAL, payload: dot })
}

export const applyCreateNum = (num) => {
   return ({ type: CREATE_NUM, payload: num })
}

export const applySecondNum = (num) => {
   return ({ type: SECOND_NUM, payload: num })
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

export const applyMemoryRecall = (memory) => {
   return ({ type: MEMORY_RECALL, payload: memory })
}