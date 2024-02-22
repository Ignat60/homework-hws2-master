import React, { useState } from "react";
import s from "./Stand.module.css";
import SuperInputText from "./common/c1-SuperInputText/SuperInputText";
import SuperCheckbox from "./common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "./common/c2-SuperButton/SuperButton";

const Stand = () => {
  const [stateForInputs, setValueForInputs] = useState<string>("");
  const [stateForErrorInputs, setValueForErrorInputs] = useState<string>("");
  const [error, setError] = useState<string>("");
  console.log(error);
  const [checkboxesHomeTask, setCheckboxesHomeTask] = useState<boolean>(false);
  const [checkboxesOld, setCheckboxesOld] = useState<boolean>(false);

  return (
    <div id={"hw4-stand"} className={s.stand}>
      <div className={s.inputs}>
        {/*совместим со старым кодом:*/}
        <div>
          <SuperInputText
            id={"hw4-super-input-like-old"}
            value={stateForInputs}
            onChange={(e) => setValueForInputs(e.currentTarget.value)}
            className={s.superInput}
          />
        </div>
        {/*инпут с ошибкой:*/}
        <div>
          <SuperInputText
            id={"hw4-super-input-with-error"}
            value={stateForErrorInputs}
            onChangeText={setValueForErrorInputs}
            error={error}
            onEnter={() => {
              setError(stateForErrorInputs.trim() ? "" : "Error");
              setValueForErrorInputs("");
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
          <SuperButton id={"hw4-super-button-disabled"} disabled>
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
            checked={checkboxesOld}
            onChangeChecked={setCheckboxesOld}
            // onChange={(e) => setChecked(e.currentTarget.checked)}
          />
        </div>
      </div>
    </div>
  );
};

export default Stand;
