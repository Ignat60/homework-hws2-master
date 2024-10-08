import React, {
  SelectHTMLAttributes,
  DetailedHTMLProps,
  ChangeEvent,
} from "react";
import s from "./SuperSelect.module.css";

type DefaultSelectPropsType = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
>;

type SuperSelectPropsType = DefaultSelectPropsType & {
  options?: any[];
  onChangeOption?: (option: number) => void;
};

const SuperSelect: React.FC<SuperSelectPropsType> = ({
  options,
  className,
  onChange,
  onChangeOption,
  ...restProps
}) => {
  // debugger;
  const mappedOptions: any[] = options
    ? options.map((o) => (
        <option
          id={"hw7-option-" + o.id}
          className={s.option}
          key={o.id}
          value={o.id}
        >
          {o.value}
        </option>
      ))
    : []; // map options with key
  const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
    // alert("super");
    onChange && onChange(e);
    if (onChangeOption) onChangeOption(Number(e.currentTarget.value));

    // делают студенты
  };

  const finalSelectClassName = s.select + (className ? " " + className : "");

  return (
    <>
      <select
        className={finalSelectClassName}
        onChange={onChangeCallback}
        {...restProps}

        // так работает но не проходит тест, в restProps находится id={"hw7-super-select"}
        // value={Number(restProps.value)}
      >
        {mappedOptions}
      </select>
    </>
  );
};

export default SuperSelect;
