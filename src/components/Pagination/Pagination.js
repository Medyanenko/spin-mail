import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ onChangePage }) => {
  return (
    <div className="pagination-block">
      <button
       onClick={(event) =>console.log(event)}
      >
        &lt;&lt;
      </button>

      <button
       onClick={(event) => onChangePage(event)}
      >
        &gt;&gt;
      </button>
    </div>
    // <ReactPaginate
    //   // className={s.root}
    //   breakLabel="..."
    //   nextLabel=">"
    //   onPageChange={(event) =>onChangePage(event.selected + 1)}
    //   pageRangeDisplayed={10}
    //   pageCount={2}
    //   previousLabel="<"
    // />
  );
};

export default Pagination;
