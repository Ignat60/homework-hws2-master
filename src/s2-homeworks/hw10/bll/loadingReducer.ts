const initState = {
  isLoading: false,
};

type InitialStateType = typeof initState;

export const loadingReducer = (
  state: InitialStateType = initState,
  action: LoadingReducerActionType
): InitialStateType => {
  // fix any
  switch (action.type) {
    // пишет студент  // need to fix

    case "CHANGE_LOADING": {
      return { ...state, isLoading: action.value };
    }
    default:
      return state;
  }
};

// type LoadingActionType = {
//     type: 'CHANGE_LOADING'
//     isLoading: boolean
// }
type LoadingReducerActionType = LoadingActionType;
type LoadingActionType = ReturnType<typeof loadingAC>;

export const loadingAC = (value: boolean) =>
  ({
    type: "CHANGE_LOADING",
    value,
  } as const);
