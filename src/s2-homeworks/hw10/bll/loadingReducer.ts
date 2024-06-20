const initState = true;
//  = {
//   isLoading: false,
//   //   blabla: "Victor",
// };

export type LoadingType = boolean;
//  = {
//   isLoading: boolean;
//   //   blabla: string;
// };

export const loadingReducer = (
  state: LoadingType = initState,
  action: LoadingReducerActionType
): LoadingType => {
  // fix any
  switch (action.type) {
    // пишет студент  // need to fix

    case "CHANGE_LOADING": {
      state = action.isLoading;
      return state;
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
