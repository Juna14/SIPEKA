import React, { useState } from "react";

const ListItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);
  return (
    <li className="flex flex-col">
      <div
        onClick={handleClick}
        className={`bg-slate-200 rounded-lg shadow p-2`}
      >
        <i
          className={`${
            isOpen ? "fi-rr-angle-small-up" : "fi-rr-angle-small-down"
          }`}
        ></i>{" "}
        {title}
      </div>
      {isOpen && children && <ul className="ml-2 py-2">{children}</ul>}
    </li>
  );
};

export default ListItem;
