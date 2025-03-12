// Define the initial state
const initialState = {
  close: false,
  add:false,
};

// Define the root reducer
export default function RootReducer1(state = initialState, action) {
  switch (action.type) {
    case "CLOSED":
      return { ...state, close: true };
    case "CREATE":
    return { ...state, close: false };
    case "ADD":
  return { ...state, add: true };
  case "CLOSE_ADD":
    return { ...state, add: false };
    default:
      return state;
  }
}
