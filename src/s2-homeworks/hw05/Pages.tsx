import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Error404 from "./pages/Error404";
import PreJunior from "./pages/PreJunior";
import Junior from "./pages/Junior";
import JuniorPlus from "./pages/JuniorPlus";
import s from "./Pages.module.css";

export const PATH = {
  PRE_JUNIOR: "/pre-junior",
  JUNIOR: "/junior",
  JUNIOR_PLUS: "/junior-plus",
};

function Pages() {
  return (
    <div className={s.pagesAlign}>
      {/*Routes выбирает первый подходящий роут*/}
      <Routes>
        {/*роутинг будут писать студенты*/}
        {/* в начале мы попадаем на страницу '/' и переходим сразу на страницу /pre-junior */}
        <Route path={"/"} element={<Navigate to={"/pre-junior"} />} />
        {/* роуты для /pre-junior, /junior, /junior-plus */}
        <Route path={"/pre-junior"} element={<PreJunior />} />
        <Route path={"/junior-plus"} element={<JuniorPlus />} />
        <Route path={"/junior"} element={<Junior />} />
        <Route path={"/*"} element={<Navigate to={"/pageError404"} />} />
        <Route path={"/pageError404"} element={<Error404 />} />
      </Routes>
    </div>
  );
}

export default Pages;
