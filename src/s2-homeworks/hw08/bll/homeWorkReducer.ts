import { UserType } from "../HW8";

type ActionType =
  | { type: "sort"; payload: "up" | "down" }
  | { type: "check"; payload: number };

export const homeWorkReducer = (
  state: UserType[],
  action: ActionType
): UserType[] => {
  // need to fix any
  // debugger;
  switch (action.type) {
    case "sort": {
      const copiedState = [...state];
      copiedState.sort((a: UserType, b: UserType) => {
        // Проверяем направление сортировки
        if (action.payload === "up") {
          // Сортировка в порядке возрастания
          if (a.name > b.name) return 1;
          if (a.name < b.name) return -1;
          return 0;
        } else if (action.payload === "down") {
          // Сортировка в порядке убывания
          if (a.name > b.name) return -1;
          if (a.name < b.name) return 1;
          return 0;
        }
        // Возвращаем 0, если нет направления сортировки
        return 0;
      });
      return copiedState;
    }
    case "check": {
      return state.filter((i) => i.age > action.payload);
      // need to fix
    }

    default:
      // Если action.type не соответствует ни одному из case, возвращаем текущее состояние
      return state;
  }
};
