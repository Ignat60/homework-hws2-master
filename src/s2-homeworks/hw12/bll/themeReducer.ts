const initState: InitStateType = {
  themeId: 1,
};
export type InitStateType = {
  themeId: number;
};

export const themeReducer = (
  state: InitStateType = initState,
  action: ActionType
): InitStateType => {
  // fix any
  switch (action.type) {
    case "SET_THEME_ID":
      console.log("case: ", action.id);
      // debugger;
      return {
        ...state,
        themeId: action.id,
      };
    // дописать

    default:
      return state;
  }
};

type ActionType = ChangeThemeIdType;
type ChangeThemeIdType = ReturnType<typeof changeThemeId>;
export const changeThemeId = (id: number) =>
  ({ type: "SET_THEME_ID", id } as const); // fix any
