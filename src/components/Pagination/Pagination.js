import React from "react";
import s from "./Pagination.module.css"

const Pagination = ({ onChangePage, onChangePagePrev }) => {
  return (
    <div className={s.paginationBlock}>
      <button className={s.paginationBlockButton}
       onClick={(e) => onChangePagePrev(e)}
      >
        &lt;&lt;
      </button>

      <button className={s.paginationBlockButton}
       onClick={(e) => onChangePage(e)}
      >
        &gt;&gt;
      </button>
    </div>
  );
};

export default Pagination;
