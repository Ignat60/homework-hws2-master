import React, { useEffect, useState } from "react";
import s2 from "../../s1-main/App.module.css";
import s from "./HW14.module.css";
import axios from "axios";
import SuperDebouncedInput from "./common/c8-SuperDebouncedInput/SuperDebouncedInput";
import { useSearchParams } from "react-router-dom";

/*
 * 1 - дописать функцию onChangeTextCallback в SuperDebouncedInput
 * 2 - дописать функцию sendQuery в HW14
 * 3 - дописать функцию onChangeText в HW14
 * 4 - сделать стили в соответствии с дизайном
 * 5 - добавить HW14 в HW5/pages/JuniorPlus
 * */

const getTechs = (find: string) => {
  return axios
    .get<{ techs: string[] }>(
      "https://samurai.it-incubator.io/api/3.0/homework/test2",
      { params: { find } }
    )
    .catch((e) => {
      alert(e.response?.data?.errorText || e.message);
    });
};

const HW14 = () => {
  const [find, setFind] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const [techs, setTechs] = useState<string[]>([]);

  // console.log("setFind", find);

  const sendQuery = (value: string) => {
    // console.log("sendQuery", value);
    setLoading(true);

    getTechs(value).then((res) => {
      const r = res?.data.techs;
      // console.log(r);
      setLoading(false);
      setTechs(r || []);
      // setFind(res)
      // делает студент
      // сохранить пришедшие данные
      //
    });
  };

  const onChangeText = (value: string) => {
    setFind(value);
    setSearchParams({ techs });
    // debugger
    // делает студент
    // добавить/заменить значение в квери урла
    // setSearchParams(
  };

  useEffect(() => {
    // debugger;
    const params = Object.fromEntries(searchParams);
    sendQuery(params.find || "");
    setFind(params.find || "");
    // console.log(params);
  }, []);

  const mappedTechs = techs.map((t) => (
    <div key={t} id={"hw14-tech-" + t} className={s.tech}>
      {t}
    </div>
  ));

  return (
    <div id={"hw14"}>
      <div className={s2.hwTitle}>Homework #14</div>

      <div className={s2.hw}>
        <SuperDebouncedInput
          id={"hw14-super-debounced-input"}
          value={find}
          onChangeText={onChangeText}
          onDebouncedChange={sendQuery}
        />
        <div className={s.text}>
          <div id={"hw14-loading"} className={s.loading}>
            {isLoading ? "...ищем" : <br />}
          </div>

          {mappedTechs}
        </div>
      </div>
    </div>
  );
};

export default HW14;
