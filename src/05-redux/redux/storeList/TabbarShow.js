const TabbarShow = (
    prevState = {
      show: true,
    },
    action
  ) => {
    let newState = { ...prevState };

    switch (action.type) {
      case "kerwinhide-tabbar":
        newState.show = false;
        return newState;
      case "kerwinshow-tabbar":
        newState.show = true;
        return newState;

      default:
        return prevState;
    }
  };

export default TabbarShow