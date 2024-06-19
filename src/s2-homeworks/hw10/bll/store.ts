import { loadingReducer } from "./loadingReducer";
import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  legacy_createStore,
} from "redux";
import { themeReducer } from "../../hw12/bll/themeReducer";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { ThunkDispatch, thunk } from "redux-thunk";

const reducers = combineReducers({
  loading: loadingReducer, // hw10
  theme: themeReducer, // hw12
});

const store = legacy_createStore(reducers, applyMiddleware(thunk));

export default store;
type AppDispatchType = ThunkDispatch<AppStoreType, unknown, AnyAction>;
export type AppStoreType = ReturnType<typeof reducers>;

export const useAppDispatch = useDispatch<AppDispatchType>;
export const useAppSelector: TypedUseSelectorHook<AppStoreType> = useSelector;

// @ts-ignore
window.store = store; // for dev // для того чтобы автотесты видели состояние данных
