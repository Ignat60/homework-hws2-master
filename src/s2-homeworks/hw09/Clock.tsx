import React, { useState } from "react";
import SuperButton from "../hw04/common/c2-SuperButton/SuperButton";
import { restoreState } from "../hw06/localStorage/localStorage";
import s from "./Clock.module.css";

function Clock() {
  const [timerId, setTimerId] = useState<NodeJS.Timeout | number | undefined>(
    undefined
  );
  // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается

  const [date, setDate] = useState<Date>(
    new Date(restoreState("hw9-date", Date.now()))
  );
  const [show, setShow] = useState<boolean>(false);

  let firstTimer: NodeJS.Timeout;
  let secondTimer: NodeJS.Timeout;
  const func = (f: number) => {
    console.log(f);
  };
  const start = () => {
    // console.log("Test START");
    //  let timer = setTimeout(function run() {
    //     setTimeout(run, 1000);
    //   }, 1000);
    //   setDate(date.getSeconds() + 1);
    let i = 1;
    firstTimer = setTimeout(function run() {
      func(++i);
      secondTimer = setTimeout(run, 1000);
    }, 1000);
    // setTimerId(timer);

    // пишут студенты // запустить часы (должно отображаться реальное время, а не +1)
    // сохранить ид таймера (https://learn.javascript.ru/settimeout-setinterval#setinterval)
  };

  const stop = () => {
    console.log("Test STOP");
    clearTimeout(firstTimer);
    clearTimeout(secondTimer);
    // пишут студенты // поставить часы на паузу, обнулить ид таймера (timerId <- undefined)
  };

  const onMouseEnter = () => {
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

  let formatterDay = new Intl.DateTimeFormat("ru", {
    weekday: "long",
  });
  const stringDay: any = formatterDay.format(date) || <br />; // пишут студенты
  // formatter.format(stringDay);

  // let formatterDay = new Intl.DateTimeFormat("ru", {
  //   weekday: "long",
  // });
  const stringMonth: any = formatterDay.format(date.getMonth()) || <br />; // пишут студенты
  // formatter = new Intl.DateTimeFormat("ru", {
  //   month: "long",
  // });
  // formatter.format(stringDay);
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
          id={"hw9-button-start"}
          disabled={false} // пишут студенты // задизэйблить если таймер запущен
          onClick={start}
        >
          start
        </SuperButton>
        <SuperButton
          id={"hw9-button-stop"}
          disabled={false} // пишут студенты // задизэйблить если таймер не запущен
          onClick={stop}
        >
          stop
        </SuperButton>
      </div>
    </div>
  );
}

export default Clock;

//-------------------
// let now = new Date();
// alert(now.getDate() + "-" + now.getMonth() + "-" + now.getFullYear());
