var initialState = [];
const CartFormation = (state = initialState, action) => {
  // const [data, setData] = useState([])

  switch (action.type) {
    case "ADD":
      let temp2 = [...state, action.payload];
      temp2 = temp2.filter(
        (obj, index, self) => self.findIndex((o) => o._id === obj._id) === index
      );
      console.log(temp2);
      return temp2;
    case "REMOVE":
      // var temp = action.payload;
      // console.log(temp)
      // const updateedState = state.filter(item => item._id !== temp)
      // state = updateedState

      // return updateedState;
      const targetId = action.payload;
      const updatedState = state.filter((item) => item._id !== targetId);

      if (updatedState.length !== state.length) {
        return updatedState;
      } else {
      
        return state;
      }

    default:
      return state;
  }
};
export default CartFormation;
