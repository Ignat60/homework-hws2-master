import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "./bll/store";
import { loadingAC } from "./bll/loadingReducer";
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton";
import s2 from "../../s1-main/App.module.css";
import { Loader } from "./Loader";
import s from "./HW10.module.css";
/*
 * 1 - в файле loadingReducer.ts дописать типы и логику
 * 2 - получить isLoading из редакса
 * 3 - дописать функцию setLoading
 * 4 - сделать стили в соответствии с дизайном
 * */

const HW10 = () => {
  // useSelector, useDispatch // пишет студент
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector<boolean>((state) => state.loading.isLoading);

  // const isLoading = false;

  const setLoading = () => {
    dispatch(loadingAC(true));
    setTimeout(() => {
      dispatch(loadingAC(false));
    }, 1500);
    // пишет студент // показать крутилку на 1,5 секунд
    // dispatch
    // setTimeout
  };

  return (
    <div id={"hw10"}>
      <div className={s2.hwTitle}>Homework #10</div>

      <div className={s2.hw}>
        {isLoading ? (
          <div id={"hw10-loading"}>
            <Loader />
          </div>
        ) : (
          <SuperButton
            className={s.button}
            id={"hw10-button-start-loading"}
            onClick={setLoading}
            xType={"default"}
          >
            Set loading...
          </SuperButton>
        )}
      </div>
    </div>
  );
};

export default HW10;
function dispatch() {
  throw new Error("Function not implemented.");
}
