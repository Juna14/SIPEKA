import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Breadcrumbs } from "..";
import { useQuery } from "@tanstack/react-query";
import { fetchProfil } from "@/helper/api/apiSister";
import { id } from "@/helper/constant";
import { NavTogglerContext } from "@/helper/context/NavTogglerContext";

const Nav = ({ title }) => {
  const { isNavOpen, toggleNav } = useContext(NavTogglerContext);
  const { data } = useQuery({
    queryKey: ["profil", id],
    queryFn: async () => await fetchProfil(id),
  });
  return (
    <nav className="w-full flex items-start md:items-center gap-4 h-14">
      {/* <i className="fi-rr-menu-burger"></i>
        <button className='ml-auto'>Pengaturan</button>
        <button>Pengaturan</button> */}
      <button
        onClick={() => toggleNav()}
        className="flex items-center justify-center w-10 h-10 text-2xl font-light z-50"
      >
        <i className={`${"fi-rr-menu-burger"}`}></i>
      </button>
      <div className="flex flex-col ">
        <h1 className="text-xs lg:text-3xl font-bold capitalize ">{title}</h1>
        <Breadcrumbs />
      </div>

      <h1 className="ml-auto text-xs lg:text-xl capitalize font-bold whitespace-nowrap text-ellipsis">
        {data && data.nama.toLowerCase()}
      </h1>
    </nav>
  );
};

export default Nav;
