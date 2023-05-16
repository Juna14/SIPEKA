import { useState } from "react";

function List({
  data = [],
  itemsPerPage = 2,
  currentPage = 1,
  setCurrentPage,
}) {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);
  const lastItem = indexOfFirstItem + currentItems.length;

  const totalPages = Math.ceil(data?.length / itemsPerPage);

  const handlePrevClick = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleNextClick = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const pageNumbers = Array.from(
    { length: Math.ceil(data?.length / itemsPerPage) },
    (_, i) => i + 1
  );

  return (
    <div className="flex justify-between items-center">
      <span>{`Showing ${
        data.length > 0 ? indexOfFirstItem + 1 : 0
      } to ${lastItem} entries of ${data.length}`}</span>
      <div>
        {currentItems?.map((item) => (
          <div key={item.id}>{item.title}</div>
        ))}
        <div className="flex gap-2 items-center">
          <button
            className={`disabled:cursor-not-allowed p-2 text-xs rounded-lg border border-slate-400 bg-white dark:bg-slate-700 `}
            disabled={currentPage === 1}
            onClick={handlePrevClick}
          >
            Prev
          </button>
          {pageNumbers?.map((item, index) => (
            <button
              key={`paginationBTN-${item}`}
              className={`p-2 w-8 h-8 text-xs rounded-lg border hover:bg-primary dark:hover:bg-primary hover:text-white hover:shadow-primary  ${
                item === currentPage
                  ? "bg-primary text-white dark:shadow-primary border-primary"
                  : "bg-white dark:bg-slate-700 border-slate-400"
              }`}
              disabled={currentPage === index + 1}
              onClick={() => setCurrentPage(item)}
            >
              {item}
            </button>
          ))}
          <button
            className={`disabled:cursor-not-allowed p-2 text-xs rounded-lg border border-slate-400 bg-white dark:bg-slate-700 `}
            disabled={currentPage === totalPages}
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
      {/* {indexOfFirstItem} {indexOfLastItem} {currentItems.length} {itemsPerPage}{" "}
      {JSON.stringify(currentItems, null, 2)} */}
    </div>
  );
}

export default List;
