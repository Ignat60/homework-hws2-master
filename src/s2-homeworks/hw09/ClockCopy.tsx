import React, { useState } from "react";
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton";
import { restoreState } from "../hw06/localStorage/localStorage";
import s from "./Clock.module.css";

function ClockCopy() {
  const [timerId, setTimerId] = useState<NodeJS.Timeout | number | undefined>(
    undefined
  );
  console.log("timerId : ", timerId);

  // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается

  const [date, setDate] = useState<Date>(
    new Date(restoreState("hw9-date", Date.now()))
  );
  console.log("Test data:", date);
  const [show, setShow] = useState<boolean>(false);
  const [btnDis, setBtnDis] = useState<boolean>(true);

  const func = (f: number) => {
    console.log(f);
  };
  let i = 0;
  const start = () => {
    let timerId = setInterval(() => {
      func(++i);

      setDate(new Date(restoreState("hw9-date", Date.now())));
      console.log(i);
    }, 1000);

    console.log("timerId :", timerId);
    setTimerId(timerId);
    setBtnDis(!btnDis);
    // console.log("Test START");
    // //  let timer = setTimeout(function run() {
    // //     setTimeout(run, 1000);
    // //   }, 1000);
    // //   setDate(date.getSeconds() + 1);
    // let i = 0;
    // let timerId = setTimeout(function tick() {
    //   console.log("timerId : 1", timerId);
    //   func(++i);
    //   timerId = setTimeout(tick, 1000);
    //   console.log("timerId : 2", timerId);
    // }, 1000);
    // setTimerId(timerId);
    // setDate(new Date(Date.now()));
    // console.log(i);
    // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
    // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
  };

  const stop = () => {
    clearTimeout(timerId);
    console.log("Test STOP:", timerId);
    setBtnDis(!btnDis);
    // clearTimeout(secondTimer);
    // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
  };

  const onMouseEnter = () => {
    console.log("HUUUUU");
    setShow(true);

    // пишут студенты // показать дату если наведена мышка
  };
  const onMouseLeave = () => {
    setShow(false);
    console.log("Yoooo");
    // пишут студенты // спрятать дату если мышка не наведена
  };

  const stringTime = date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds() || <br />; // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты
  const stringDate = date.getDate() +
    "." +
    date.getMonth() +
    "." +
    date.getFullYear() || <br />; // день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

  // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)

  let formatterDay = new Intl.DateTimeFormat("en", {
    weekday: "long",
  });
  const stringDay: any = formatterDay.format(date) || <br />; // пишут студенты
  // formatter.format(stringDay);

  let formatterMonth = new Intl.DateTimeFormat("en", {
    month: "long",
  });
  const stringMonth: any = formatterMonth.format(date) || <br />; // пишут студенты
  // formatter = new Intl.DateTimeFormat("ru", {
  //   month: "long",
  // });
  // formatter.format(stringDay);

  // const buttonDis =  {timerId = ? true : false};
  return (
    <div className={s.clock}>
      <div
        id={"hw9-watch"}
        className={s.watch}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <span id={"hw9-day"}>{stringDay}</span>,{" "}
        <span id={"hw9-time"}>
          <strong>{stringTime}</strong>
        </span>
      </div>

      <div id={"hw9-more"}>
        <div className={s.more}>
          {show ? (
            <>
              <span id={"hw9-month"}>{stringMonth}</span>,{" "}
              <span id={"hw9-date"}>{stringDate}</span>
            </>
          ) : (
            <>
              <br />
            </>
          )}
        </div>
      </div>

      <div className={s.buttonsContainer}>
        <SuperButton
          xType={"default"}
          id={"hw9-button-start"}
          disabled={!btnDis} // пишут студенты // задизэйблить если таймер запущен
          onClick={start}
        >
          start
        </SuperButton>
        <SuperButton
          xType={"default"}
          id={"hw9-button-stop"}
          disabled={btnDis} // пишут студенты // задизэйблить если таймер не запущен
          onClick={stop}
        >
          stop
        </SuperButton>
      </div>
    </div>
  );
}

export default ClockCopy;

//-------------------
// let now = new Date();
// alert(now.getDate() + "-" + now.getMonth() + "-" + now.getFullYear());
