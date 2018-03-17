const defaultState = {
  width: window.innerWidth,
  height: window.innerHeight
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case "WINDOW_RESIZE":
      return {
        width: action.payload.width || state.width,
        height: action.payload.height || state.height
      };
    default:
      return state;
  }
};