const listCinema = (prevState = { list: [] }, action) => {
  let newState = { ...prevState };

  switch (action.type) {
    case "changeListCinema":
      newState.list = action.value;
      return newState;

    default:
      return prevState;
  }
};

export default listCinema
