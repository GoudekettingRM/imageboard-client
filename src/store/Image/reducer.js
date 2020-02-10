const initialState = [];

export default function imageReducer(state = initialState, action) {
  switch (action.type) {
    case "images/ADD_IMAGE_TO_STORE": {
      return [action.payload, ...state];
    }
    case "images/ALL_IMAGES": {
      return action.payload;
    }
    default:
      return state;
  }
}
