const initialState = {
  userList: [],
  count: 0,
};

export const useReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AddUser":
      return { ...state, userList: [action.value, ...state.userList] };
    case "DeleteUser":
      const newUsers = state.userList.filter((item) => item.id !== action.id);
      return { ...state, userList: newUsers };
    case "EditUser":
      return {
        ...state,
        userList: state.userList.map((item) =>
          item.id === action.id ? { ...item, ...action.value } : item
        ),
      };

    default:
      return state;
  }
};
