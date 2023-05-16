import { NavTogglerContext } from "@/helper/context/NavTogglerContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";

const Dropdown = ({ index, isOpen, active, onClick, subItem, title, icon }) => {
  const { isNavOpen } = useContext(NavTogglerContext);
  const router = useRouter();
  const handleDropdownClick = () => {
    onClick(index);
  };

  return (
    <div
      className={`relative flex flex-col group w-full transition-all ease-in-out duration-300`}
    >
      <button
        className={`relative flex items-center justify-center gap-2 p-2 w-full shadow-2xl rounded-lg z-10 group-hover:bg-primary group-hover:shadow-2xl group-hover:shadow-primary group-hover:text-white group-hover:scale-105 duration-200 ease-in-out ${
          isOpen || active
            ? `bg-primary shadow-primary text-white`
            : `bg-white dark:bg-slate-800`
        } `}
        onClick={handleDropdownClick}
      >
        <div className="w-8 h-8 rounded-md flex items-center justify-center group-hover:shadow-xl">
          <i className={icon}></i>
        </div>
        <span className={`${isNavOpen ? "lg:block" : "lg:hidden"} text-left`}>
          {title}
        </span>

        {subItem && (
          <i
            className={`${isNavOpen ? "lg:block" : "lg:hidden"} ${
              isOpen ? `fi-rr-angle-small-up` : `fi-rr-angle-small-down`
            } ml-auto`}
          ></i>
        )}
      </button>

      <ul
        className={`mx-2 rounded-b-lg text-left flex flex-col overflow-hidden transition-all ease-in-out duration-400 bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl  ${
          isOpen
            ? `${
                isNavOpen
                  ? "h-full"
                  : "rounded-lg lg:absolute lg:left-16 h-max lg:w-max border-2 border-primary"
              }`
            : `h-0`
        }`}
      >
        {subItem &&
          subItem?.map((item, index) => (
            <Link
              key={index}
              className={` hover:bg-primary dark:hover:bg-primary hover:text-white hover:pl-4 p-2 duration-200 ease-in-out ${
                item.active ? `bg-primary text-white` : ``
              }`}
              href={item.link}
            >
              {item.title}
            </Link>
          ))}
      </ul>
    </div>
  );
};

export default Dropdown;
