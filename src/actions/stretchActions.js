export const APPLY_NUMBER = "APPLY_NUMBER";
export const CREATE_NUM = 'CREATE_NUM'

export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR = 'CLEAR_DISPLAY'
export const CHANGE_MEM = 'CHANGE_MEMORY'
export const CLEAR_MEM = "CLEAR_MEMORY"
export const MEMORY_RECALL = "MEMORY_RECALL"

export const applyNumber = (number) => {
   return ({ type: APPLY_NUMBER, payload: number });
}

export const applyCreateNum = (num) => {
   return ({ type: CREATE_NUM, payload: num })
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
   console.log(memory)
   return ({ type: MEMORY_RECALL, payload: memory })
}