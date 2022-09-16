import { ADD_ONE, APPLY_NUMBER, CHANGE_OPERATION, CLEAR, CHANGE_MEM, CLEAR_MEM, MEMORY_RECALL } from './../actions';

export const initialState = {
    total: 0,
    operation: "+",
    memory: 0
}

const calculateResult = (num1, num2, operation) => {
    switch (operation) {
        case ("+"):
            return num1 + num2;
        case ("*"):
            return num1 * num2;
        case ("-"):
            return num1 - num2;
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case (ADD_ONE):
            return ({
                ...state,
                total: state.total + 1
            });

        case (APPLY_NUMBER):
            return ({
                ...state,
                total: calculateResult(state.total, action.payload, state.operation)
            });

        case (CHANGE_OPERATION):
            return ({
                ...state,
                operation: action.payload
            });

        case (CLEAR):
            return ({
                ...state,
                total: 0
            })

        case (CHANGE_MEM):
            return ({
                ...state,
                memory: state.total
            })

        case (CLEAR_MEM):
            return ({
                ...state,
                memory: 0
            })

        case (MEMORY_RECALL):
            return ({
                ...state,
                total: calculateResult(state.total, action.payload, state.operation)
            })

        default:
            return state;
    }
}

export default reducer;