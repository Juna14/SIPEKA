import useToggle from "@/helper/hooks/useToggle";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";

const SidebarItem = (props) => {
  const router = useRouter();
  const { toggle, toggler, setToggle } = useToggle();
  return (
    <div
      className={`relative flex flex-col group w-full`}
      tabIndex={0}
      onFocus={() => toggler()}
      onBlur={() => setToggle(toggle ? !toggle : toggle)}
    >
      <button
        className={`relative flex items-center gap-2 p-2 w-full text-left shadow-2xl rounded-lg z-10 group-hover:bg-primary group-hover:shadow-2xl group-hover:shadow-primary group-hover:text-white ${
          toggle || props.active
            ? `bg-primary shadow-primary text-white`
            : `bg-white dark:bg-slate-800`
        } `}
      >
        <div className="w-8 h-8 rounded-md flex items-center justify-center group-hover:shadow-xl">
          <i className={props.icon}></i>
        </div>
        <p>{props.title}</p>
        {props.subitem && (
          <i
            className={`${
              toggle || props.active
                ? `fi-rr-angle-small-up`
                : `fi-rr-angle-small-down`
            } ml-auto`}
          ></i>
        )}
      </button>
      {/* sub-item */}
      <div
        className={`px-2 text-left flex flex-col overflow-hidden w-full transition-all ease-in-out duration-200 ${
          toggle || props.active ? `h-full` : `h-0`
        }`}
      >
        {props.subitem?.map((item) => (
          <Link
            key={item.link}
            href={item.link}
            className={`last:rounded-b-lg  hover:bg-primary hover:text-white hover:pl-4 p-2 duration-200 ease-in-out ${
              item.link === router.pathname
                ? `bg-primary text-white`
                : `bg-white dark:bg-slate-800`
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarItem;
