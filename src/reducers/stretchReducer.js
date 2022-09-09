import { APPLY_NUMBER, CREATE_NUM, CHANGE_OPERATION, CLEAR, CHANGE_MEM, CLEAR_MEM, MEMORY_RECALL, SECOND_NUM } from './../actions/stretchActions';

export const initialState = {
   displayValue: 0,
   operator: null,
   secondNum: null,
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
      case ('/'):
         return num1 / num2
   }
}

const reducer = (state, action) => {
   switch (action.type) {
      case (CREATE_NUM):
         return ({
            ...state,
            displayValue: parseInt(state.displayValue + action.payload),
         });

      case (APPLY_NUMBER):
         return ({
            ...state,
            displayValue: calculateResult(state.displayValue, state.secondNum, state.operator)
         })

      case (CHANGE_OPERATION):
         return ({
            ...state,
            operator: action.payload,
            secondNum: state.displayValue
         });

      case (CLEAR):
         return ({
            ...state,
            displayValue: 0,
            operator: null,
            secondNum: null
         })

      case (CHANGE_MEM):
         return ({
            ...state,
            memory: state.displayValue
         })

      case (CLEAR_MEM):
         return ({
            ...state,
            memory: 0
         })

      case (MEMORY_RECALL):
         return ({
            ...state,
            total: calculateResult(state.displayValue, action.payload, state.operator)
         })

      default:
         return state;
   }
}

export default reducer;