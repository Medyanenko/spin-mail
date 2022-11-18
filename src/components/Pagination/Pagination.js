import React from "react";
import s from "./Pagination.module.css";

const Pagination = ({ onChangePage, onChangePagePrev, changePagePrev }) => {
  if (changePagePrev < 2) {
    return (
      <div className={s.paginationBlock}>
        <button
          className={s.paginationBlockButton}
          onClick={(e) => onChangePage(e)}
        >
          &gt;&gt;
        </button>
      </div>
    );
  } else {
    return (
      <div className={s.paginationBlock}>
        <button
          className={s.paginationBlockButton}
          onClick={(e) => onChangePagePrev(e)}
        >
          &lt;&lt;
        </button>

        <button
          className={s.paginationBlockButton}
          onClick={(e) => onChangePage(e)}
        >
          &gt;&gt;
        </button>
      </div>
    );
  }
};

export default Pagination;
