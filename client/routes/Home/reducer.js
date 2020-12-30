

// The initial state of the App
export const initialState = {
  data: null,
  type: 'user',
  apiCall: false,
  
};

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_RESULTS":
      return {
        data: action.payload.data,
        type: action.payload.type,
        apiCall: true
      };
    default:
      return state;
  }
};