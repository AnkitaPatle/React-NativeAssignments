const initialState = {
  toDoItemList: [],
  complatedList: []
};
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      var toDoItemListNew = state.toDoItemList.slice();
      toDoItemListNew.unshift({ key: action.payload });
      return Object.assign({}, state, {
        toDoItemList: toDoItemListNew
      });

    case "CHECK_TASK":
      if (action.payload >= "") {
        var complatedListNew = state.complatedList.slice();
        complatedListNew.unshift(action.payload);
        return Object.assign({}, state, {
          toDoItemList: state.toDoItemList.filter(i => i !== action.payload),
          complatedList: complatedListNew
        });
      }

      return state;
    default:
      return state;
  }
};

export default Reducer;
