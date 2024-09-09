import React, { ChangeEvent } from "react";
import SuperSelect from "../../../hw07/common/c5-SuperSelect/SuperSelect";
import { Pagination } from "@mui/material";
import s from "./SuperPagination.module.css";

export type SuperPaginationPropsType = {
  id?: string;
  page: number;
  itemsCountForPage: number;
  totalCount: number;
  onChange: (page: number, count: number) => void;
};

const SuperPagination: React.FC<SuperPaginationPropsType> = ({
  page,
  itemsCountForPage,
  totalCount,
  onChange,
  id = "hw15",
}) => {
  // пишет студент // вычислить количество страниц

  const lastPage = Math.ceil(totalCount / itemsCountForPage);

  const onChangeCallbackOnPageChange = (event: any, newPage: number) => {
    console.log("totalCount", totalCount);
    console.log("itemsCountForPage", itemsCountForPage);
    // debugger;
    onChange(newPage, itemsCountForPage);
    // console.log(lastPage);
    // debugger;
  };

  // TODO:
  const onChangeCallbaclOnSelectChange = (newValue: number) => {
    // console.log(event.target.value);
    // debugger;
    onChange(page, newValue);
    // пишет студент
  };

  return (
    <div className={s.pagination}>
      <Pagination
        id={id + "-pagination"}
        sx={{
          paddingBottom: "20px",
          //   не применяются
          //   fontWeight: "600",
          //   fontSize: "40px",
          //   color: "red",
          // стили для Pagination // пишет студент
        }}
        page={page}
        count={lastPage}
        onChange={onChangeCallbackOnPageChange}
        hideNextButton
        hidePrevButton
      />

      <span className={s.text1}>показать</span>

      <SuperSelect
        id={id + "-pagination-select"}
        value={itemsCountForPage}
        options={[
          { id: 3, value: 3 },
          { id: 4, value: 4 },
          { id: 7, value: 7 },
          { id: 5, value: 5 },
          { id: 8, value: 8 },
          { id: 10, value: 10 },
          { id: 20, value: 20 },
        ]}
        // onChange={onChangeCallbaclOnSelectChange}
        onChangeOption={onChangeCallbaclOnSelectChange}
      />

      <span className={s.text2}>строк в таблице</span>
    </div>
  );
};

export default SuperPagination;
