import React from "react";
import ReactPaginate from "react-paginate";



const Pagination = ({onChangePage}) => {
  return (
    <ReactPaginate
      // className={s.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) =>onChangePage(event.selected + 1)}
      pageRangeDisplayed={10}
      pageCount={10}
      previousLabel="<"
    />
  );
};

export default Pagination;
