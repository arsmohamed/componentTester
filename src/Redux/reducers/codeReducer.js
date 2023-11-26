import { UPDATE_CODE } from '../actions/codeActions';

const initialState = {
  code: `function add(a, b) {\n  return a + b;\n}`,
};

const codeReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CODE:
      return {
        ...state,
        code: action.payload,
      };
    default:
      return state;
  }
};

export default codeReducer;
