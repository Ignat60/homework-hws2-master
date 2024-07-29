import { combineReducers, createStore } from "redux";
import { themeReducer } from "./themeReducer";

const rootReducer = combineReducers({
  themeId: themeReducer,
});

export const store = createStore(rootReducer);

export type AppRootstate = ReturnType<typeof rootReducer>;
// @ts-ignore
window.store = store;
