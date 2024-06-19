const initState = {
  isLoading: false,
};

type LoadingType = {
  isLoading: boolean;
};

export const loadingReducer = (
  state: LoadingType = initState,
  action: LoadingReducerActionType
): any => {
  // fix any
  switch (action.type) {
    // пишет студент  // need to fix

    case "CHANGE_LOADING": {
      return {};
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

export const loadingAC = (isLoading: boolean) =>
  ({
    type: "CHANGE_LOADING",
    isLoading,
  } as const);
