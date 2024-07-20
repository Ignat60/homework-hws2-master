import React from "react";
import { Slider, SliderProps } from "@mui/material";

type SliderPropsType = {
  change: (v: number | number[]) => void;
} & SliderProps;

const SuperRange: React.FC<SliderPropsType> = (props) => {
  const handleChange = (e: any) => {
    props.change(e.target.value);
  };

  return (
    <>
      <Slider
        sx={{
          width: 300,
          track: {
            color: "#ff4081", // Цвет полосы слайдера
          },
          // стили для слайдера // пишет студент
        }}
        onChange={handleChange}
        {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
      />
    </>
  );
};

export default SuperRange;
