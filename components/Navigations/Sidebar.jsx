import { DarkModeContext } from "@/helper/context/DarkModeContext";
import useDarkMode from "@/helper/hooks/useDarkMode";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react";
import { Dropdown, SidebarItem } from "..";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { fetchProfil } from "@/helper/api/apiSister";
import { id } from "@/helper/constant";
import { NavTogglerContext } from "@/helper/context/NavTogglerContext";

const Sidebar = () => {
  const router = useRouter();
  const [activeDropdown, setActiveDropdown] = useState(null);
  const ref = useRef(null);

  const { data } = useQuery({
    queryKey: ["profil", id],
    queryFn: async () => await fetchProfil(id),
  });

  const handleDropdownClick = (index) => {
    index === activeDropdown
      ? setActiveDropdown(null)
      : setActiveDropdown(index);
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setActiveDropdown(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const { isNavOpen, toggleNav } = useContext(NavTogglerContext);

  return (
    <>
      <div
        onClick={() => toggleNav()}
        className={`fixed inset-0 z-30 bg-black/20 backdrop-blur-sm ${
          isNavOpen ? "block lg:hidden" : "hidden"
        }`}
      ></div>
      <aside
        className={`
        ${
          isNavOpen
            ? "lg:w-[320px] overflow-y-auto"
            : "w-3/4 lg:w-20 -translate-x-full lg:translate-x-0"
        }
        fixed z-30 lg:relative p-2 pl-4 pr-4 max-h-screen h-screen flex flex-col items-center gap-4 bg-slate-200 dark:bg-slate-900 bg-opacity-50 backdrop-blur-2xl dark:bg-opacity-50 dark:backdrop-blur-2xl
        transition-all ease-in-out duration-200
        `}
        ref={ref}
      >
        <button
          onClick={() => toggleNav()}
          className="lg:hidden absolute left-2 flex items-center justify-center w-10 h-10 text-sm font-light z-50"
        >
          <i className={`${"fi-rr-cross"}`}></i>
        </button>
        <Link href={"/"}>
          <Image alt="" src={"/logo itk png.png"} width={300} height={200} />
        </Link>
        <div className="flex flex-col itemc-center justify-center text-center text-sm md:text-md uppercase md:capitalize">
          <h1
            className={`font-poppins leading-tight ${
              isNavOpen ? "text-base" : "text-[10px]"
            }`}
          >
            Sistem Informasi Kepegawaian
          </h1>
          {/* <h1 className="font-quicksand font-semibold text-primary dark:text-blue-400">
            Sister
          </h1> */}
        </div>

        <Dropdown
          index={1}
          isOpen={activeDropdown === 1}
          onClick={handleDropdownClick}
          active={[
            "/data-pribadi",
            "/data-pribadi/edit-alamat",
            "/data-pribadi/edit-bidang-keilmuan",
            "/data-pribadi/edit-biodata",
            "/data-pribadi/edit-keleuarga",
            "/data-pribadi/edit-kepegawaian",
            "/data-pribadi/edit-kependudukan",
            "/data-pribadi/edit-lain",
            "/inpassing",
            "/inpassing/create",
            "/inpassing/[id]",
            "/inpassing/[id]/edit",
            "/jabatan-fungsional",
            "/jabatan-fungsional/create",
            "/jabatan-fungsional/[id]",
            "/jabatan-fungsional/[id]/edit",
            "/kepangkatan",
            "/kepangkatan/create",
            "/kepangkatan/[id]",
            "/kepangkatan/[id]/edit",
            "/penempatan",
            "/penempatan/create",
            "/penempatan/[id]",
            "/penempatan/[id]/edit",
          ].includes(router.pathname)}
          title="Profile"
          href="/"
          icon={"fi-rr-user"}
          subItem={[
            {
              link: "/data-pribadi",
              title: "Data Pribadi",
              active: router.pathname.includes("data-pribadi"),
            },
            {
              link: "/inpassing",
              title: "Inpassing",
              active: router.pathname.includes("inpassing"),
            },
            {
              link: "/jabatan-fungsional",
              title: "Jabatan Fungsional",
              active: router.pathname.includes("jabatan-fungsional"),
            },
            {
              link: "/kepangkatan",
              title: "Kepangkatan",
              active: [
                "/kepangkatan",
                "/kepangkatan/create",
                "/kepangkatan/[id]",
                "/kepangkatan/[id]/edit",
              ].includes(router.pathname),
            },
            {
              link: "/penempatan",
              title: "Penempatan",
              active: router.pathname.includes("penempatan"),
            },
          ]}
        />
        <Dropdown
          index={2}
          isOpen={activeDropdown === 2}
          onClick={handleDropdownClick}
          active={[
            "/pengajaran",
            "/pengajaran/create",
            "/pengajaran/list-data",
            "/pengajaran/[id]",
            "/pengajaran/[id]/edit",
            "/bimbingan-mahasiswa",
            "/bimbingan-mahasiswa/create",
            "/bimbingan-mahasiswa/list-data",
            "/bimbingan-mahasiswa/[id]",
            "/bimbingan-mahasiswa/[id]/edit",
            "/pengujian-mahasiswa",
            "/pengujian-mahasiswa/create",
            "/pengujian-mahasiswa/list-data",
            "/pengujian-mahasiswa/[id]",
            "/pengujian-mahasiswa/[id]/edit",
            "/visiting-scientist",
            "/visiting-scientist/create",
            "/visiting-scientist/[id]",
            "/visiting-scientist/[id]/edit",
            "/pembinaan-mahasiswa",
            "/pembinaan-mahasiswa/create",
            "/pembinaan-mahasiswa/[id]",
            "/pembinaan-mahasiswa/[id]/edit",
            "/bahan-ajar",
            "/bahan-ajar/create",
            "/bahan-ajar/[id]",
            "/bahan-ajar/[id]/edit",
            "/detasering",
            "/detasering/create",
            "/detasering/[id]",
            "/detasering/[id]/edit",
            "/orasi-ilmiah",
            "/orasi-ilmiah/create",
            "/orasi-ilmiah/[id]",
            "/orasi-ilmiah/[id]/edit",
            "/pembimbing-dosen",
            "/pembimbing-dosen/create",
            "/pembimbing-dosen/[id]",
            "/pembimbing-dosen/[id]/edit",
            "/tugas-tambahan",
            "/tugas-tambahan/create",
            "/tugas-tambahan/[id]",
            "/tugas-tambahan/[id]/edit",
          ].includes(router.pathname)}
          title="Pelaks. Pendidikan"
          href="/"
          icon={"fi-rr-books"}
          subItem={[
            {
              link: "/pengajaran",
              title: "Pengajaran",
              active: [
                "/pengajaran",
                "/pengajaran/create",
                "/pengajaran/[id]",
                "/pengajaran/[id]/edit",
              ].includes(router.pathname),
            },
            {
              link: "/bimbingan-mahasiswa",
              title: "Bimbingan Mahasiswa",
              active: [
                "/bimbingan-mahasiswa",
                "/bimbingan-mahasiswa/create",
                "/bimbingan-mahasiswa/[id]",
                "/bimbingan-mahasiswa/[id]/edit",
              ].includes(router.pathname),
            },
            {
              link: "/pengujian-mahasiswa",
              title: "Pengujian Mahasiswa",
              active: [
                "/pengujian-mahasiswa",
                "/pengujian-mahasiswa/create",
                "/pengujian-mahasiswa/[id]",
                "/pengujian-mahasiswa/[id]/edit",
              ].includes(router.pathname),
            },
            {
              link: "/visiting-scientist",
              title: "Visiting Scientist",
              active: [
                "/visiting-scientist",
                "/visiting-scientist/create",
                "/visiting-scientist/[id]",
                "/visiting-scientist/[id]/edit",
              ].includes(router.pathname),
            },
            {
              link: "/pembinaan-mahasiswa",
              title: "Pembinaan Mahasiswa",
              active: [
                "/pembinaan-mahasiswa",
                "/pembinaan-mahasiswa/create",
                "/pembinaan-mahasiswa/[id]",
                "/pembinaan-mahasiswa/[id]/edit",
              ].includes(router.pathname),
            },
            {
              link: "/bahan-ajar",
              title: "Bahan Ajar",
              active: [
                "/bahan-ajar",
                "/bahan-ajar/create",
                "/bahan-ajar/[id]",
                "/bahan-ajar/[id]/edit",
              ].includes(router.pathname),
            },
            {
              link: "/detasering",
              title: "Detasering",
              active: [
                "/detasering",
                "/detasering/create",
                "/detasering/[id]",
                "/detasering/[id]/edit",
              ].includes(router.pathname),
            },
            {
              link: "/orasi-ilmiah",
              title: "Orasi Ilmiah",
              active: [
                "/orasi-ilmiah",
                "/orasi-ilmiah/create",
                "/orasi-ilmiah/[id]",
                "/orasi-ilmiah/[id]/edit",
              ].includes(router.pathname),
            },
            {
              link: "/pembimbing-dosen",
              title: "Pembimbing Dosen",
              active: [
                "/pembimbing-dosen",
                "/pembimbing-dosen/create",
                "/pembimbing-dosen/[id]",
                "/pembimbing-dosen/[id]/edit",
              ].includes(router.pathname),
            },
            {
              link: "/tugas-tambahan",
              title: "Tugas Tambahan",
              active: [
                "/tugas-tambahan",
                "/tugas-tambahan/create",
                "/tugas-tambahan/[id]",
                "/tugas-tambahan/[id]/edit",
              ].includes(router.pathname),
            },
          ]}
        />
        <Dropdown
          index={3}
          isOpen={activeDropdown === 3}
          onClick={handleDropdownClick}
          active={[
            "/penelitian",
            "/penelitian/create",
            "/penelitian/[id]",
            "/penelitian/[id]/edit",
            "/publikasi",
            "/publikasi/create",
            "/publikasi/[id]",
            "/publikasi/[id]/edit",
            "/paten",
            "/paten/create",
            "/paten/[id]",
            "/paten/[id]/edit",
          ].includes(router.pathname)}
          title="Pelaks. Penelitian"
          href="/"
          icon={"fi-rr-test-tube"}
          subItem={[
            {
              link: "/penelitian",
              title: "Penelitian",
              active: [
                "/penelitian",
                "/penelitian/create",
                "/penelitian/[id]",
                "/penelitian/[id]/edit",
              ].includes(router.pathname),
            },
            {
              link: "/publikasi",
              title: "Publikasi Karya",
              active: [
                "/publikasi",
                "/publikasi/create",
                "/publikasi/[id]",
                "/publikasi/[id]/edit",
              ].includes(router.pathname),
            },
            {
              link: "/paten",
              title: "Paten/HKI",
              active: [
                "/paten",
                "/paten/create",
                "/paten/[id]",
                "/paten/[id]/edit",
              ].includes(router.pathname),
            },
          ]}
        />
        <Dropdown
          index={4}
          isOpen={activeDropdown === 4}
          onClick={handleDropdownClick}
          active={[
            "/pengabdian",
            "/pengabdian/create",
            "/pengabdian/[id]",
            "/pengabdian/[id]/edit",
            "/pengelola-jurnal",
            "/pengelola-jurnal/create",
            "/pengelola-jurnal/[id]",
            "/pengelola-jurnal/[id]/edit",
            "/pembicara",
            "/pembicara/create",
            "/pembicara/[id]",
            "/pembicara/[id]/edit",
            "/jabatan-struktural",
            "/jabatan-struktural/create",
            "/jabatan-struktural/[id]",
            "/jabatan-struktural/[id]/edit",
          ].includes(router.pathname)}
          title="Pelaks. Pengabdian"
          href="/"
          icon={"fi-rr-link-alt"}
          subItem={[
            {
              link: "/pengabdian",
              title: "Pengabdian",
              active: [
                "/pengabdian",
                "/pengabdian/create",
                "/pengabdian/[id]",
                "/pengabdian/[id]/edit",
              ].includes(router.pathname),
            },
            {
              link: "/pengelola-jurnal",
              title: "Pengelola Jurnal",
              active: [
                "/pengelola-jurnal",
                "/pengelola-jurnal/create",
                "/pengelola-jurnal/[id]",
                "/pengelola-jurnal/[id]/edit",
              ].includes(router.pathname),
            },
            {
              link: "/pembicara",
              title: "Pembicara",
              active: [
                "/pembicara",
                "/pembicara/create",
                "/pembicara/[id]",
                "/pembicara/[id]/edit",
              ].includes(router.pathname),
            },
            {
              link: "/jabatan-struktural",
              title: "Jabatan Struktural",
              active: [
                "/jabatan-struktural",
                "/jabatan-struktural/create",
                "/jabatan-struktural/[id]",
                "/jabatan-struktural/[id]/edit",
              ].includes(router.pathname),
            },
          ]}
        />
        <Dropdown
          index={5}
          isOpen={activeDropdown === 5}
          onClick={handleDropdownClick}
          active={[
            "/anggota-profesi",
            "/anggota-profesi/create",
            "/anggota-profesi/[id]",
            "/anggota-profesi/[id]/edit",
            "/penghargaan",
            "/penghargaan/create",
            "/penghargaan/[id]",
            "/penghargaan/[id]/edit",
            "/penunjang-lain",
            "/penunjang-lain/create",
            "/penunjang-lain/[id]",
            "/penunjang-lain/[id]/edit",
          ].includes(router.pathname)}
          title="Penunjang"
          href="/"
          icon={"fi-rr-diploma"}
          subItem={[
            {
              link: "/anggota-profesi",
              title: "Anggota Profesi",
              active: [
                "/anggota-profesi",
                "/anggota-profesi/create",
                "/anggota-profesi/[id]",
                "/anggota-profesi/[id]/edit",
              ].includes(router.pathname),
            },
            {
              link: "/penghargaan",
              title: "Penghargaan",
              active: [
                "/penghargaan",
                "/penghargaan/create",
                "/penghargaan/[id]",
                "/penghargaan/[id]/edit",
              ].includes(router.pathname),
            },
            {
              link: "/penunjang-lain",
              title: "Penunjang Lain",
              active: [
                "/penunjang-lain",
                "/penunjang-lain/create",
                "/penunjang-lain/[id]",
                "/penunjang-lain/[id]/edit",
              ].includes(router.pathname),
            },
          ]}
        />
        <div
          className={`w-full flex ${
            isNavOpen ? "flex-row" : "flex-col"
          } justify-around items-center gap-2 p-4 mt-auto rounded-lg shadow-2xl dark:shadow-primary bg-primary dark:bg-opacity-80 backdrop-blur-lg text-white font-semibold`}
        >
          {!data ? (
            <Link
              href={"/auth/login"}
              className="flex gap-2 justify-center items-center"
            >
              <i className="fi-rr-sign-in-alt mt-1"></i>
              Login
            </Link>
          ) : (
            <button
              onClick={() => {
                localStorage.removeItem("token");
                localStorage.removeItem("role");
                router.push("/auth/login");
              }}
              className="flex gap-2 justify-center items-center"
            >
              <i className="fi-rr-sign-out-alt mt-1"></i>
              {isNavOpen && <span>Logout</span>}
            </button>
          )}
          <button
            className="flex gap-2 items-center"
            onClick={() => toggleDarkMode()}
          >
            <i className={`mt-1 ${darkMode ? "fi-rr-moon" : "fi-rr-sun"}`}></i>
            {isNavOpen && <span>{darkMode ? "Dark" : "Light"}</span>}
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
