const initialState = {
  weather: {
    content: null
  }
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_WEATHER_INFO":
      return {
        ...state,
        weather: {
          ...state.weather,
          content: action.payload
        }
      };

    default:
      return state;
  }
};
export default MainReducer;
