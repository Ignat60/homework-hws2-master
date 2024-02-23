import React, { useState } from "react";
import s from "./Stand.module.css";
import SuperInputText from "./common/c1-SuperInputText/SuperInputText";
import SuperCheckbox from "./common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "./common/c2-SuperButton/SuperButton";

const Stand = () => {
  const [stateForAllInputs, setValueForAllInputs] = useState<string>("");
  // const [stateForErrorInputs, setValueForErrorInputs] = useState<string>("");

  const [error, setError] = useState<string>("");
  const [checkboxesHomeTask, setCheckboxesHomeTask] = useState<boolean>(false);
  // const [checkboxesOld, setCheckboxesOld] = useState<boolean>(false);

  return (
    <div id={"hw4-stand"} className={s.stand}>
      <div className={s.inputs}>
        {/*совместим со старым кодом:*/}
        <div>
          <SuperInputText
            id={"hw4-super-input-like-old"}
            value={stateForAllInputs}
            onChange={(e) => setValueForAllInputs(e.currentTarget.value)}
            className={s.superInput}
          />
        </div>
        {/*инпут с ошибкой:*/}
        <div>
          <SuperInputText
            id={"hw4-super-input-with-error"}
            value={stateForAllInputs}
            onChangeText={setValueForAllInputs}
            error={error}
            onEnter={() => {
              setError(stateForAllInputs.trim() ? "" : "Error");
              setValueForAllInputs("");
            }}
          />
        </div>
      </div>

      <div className={s.buttons}>
        {/*обычная кнопка:*/}
        <div>
          <SuperButton
            // className={s.myOwnClass}
            id={"hw4-super-button-default"}
            xType={"default"}
          >
            default
          </SuperButton>
        </div>
        {/*красная кнопка:*/}
        <div>
          <SuperButton id={"hw4-super-button-red"} xType={"red"}>
            red
          </SuperButton>
        </div>
        {/*задизэйбленная кнопка:*/}
        <div>
          <SuperButton id={"hw4-super-button-disabled"} disabled={true}>
            disabled
          </SuperButton>
        </div>
        {/*задизэйбленная кнопка:*/}
        <div>
          <SuperButton id={"hw4-super-button-secondary"} xType={"secondary"}>
            secondary
          </SuperButton>
        </div>
      </div>

      <div className={s.checkboxes}>
        {/*чекбокс с текстом:*/}
        <div>
          <SuperCheckbox
            id={"hw4-super-checkbox-with-text"}
            checked={checkboxesHomeTask}
            // checked={true}
            onChangeChecked={setCheckboxesHomeTask}
          >
            Hometask
          </SuperCheckbox>
        </div>
        {/*совместим со старым кодом:*/}
        <div>
          <SuperCheckbox
            id={"hw4-super-checkbox-like-old"}
            checked={checkboxesHomeTask}
            onChangeChecked={setCheckboxesHomeTask}
            // onChange={(e) => setChecked(e.currentTarget.checked)}
          />
        </div>
      </div>
    </div>
  );
};

export default Stand;
