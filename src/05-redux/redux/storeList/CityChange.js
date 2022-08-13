const CityChange = (
  prevState = {
    cityName: "北京",
  },
  action
) => {
  let newState = { ...prevState };

  switch (action.type) {
    case "changeCity":
      newState.cityName = action.cityName;
      return newState;


    default:
      return prevState;
  }
};

export default CityChange