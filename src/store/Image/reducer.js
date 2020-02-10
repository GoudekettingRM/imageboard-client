const initialState = [];

export default function imageReducer(state = initialState, action) {
  switch (action.type) {
    case "images/ALL_IMAGES": {
      return action.payload;
    }
    default:
      return state;
  }
}
