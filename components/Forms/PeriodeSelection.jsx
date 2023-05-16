import { fetchSemester } from "@/helper/api/apiSister";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const PeriodeSelection = ({ onChange, withPendek = true }) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["periode"],
    queryFn: () => fetchSemester(),
  });
  if (isLoading) return <p>Loading...</p>;
  return (
    <div className="flex gap-2 items-center ml-auto">
      <label htmlFor="periode" className="hidden md:block font-semibold">
        Periode
      </label>
      <select
        name="periode"
        id="periode"
        className="py-3 px-4 bg-white dark:bg-slate-700 rounded-md shadow-xl w-full"
        onChange={onChange}
        defaultValue={""}
      >
        <option value="">Semua periode</option>
        {data &&
          data
            ?.filter((item) =>
              withPendek ? item : !item.nama.includes("Pendek")
            )
            .map((item, index) => (
              <option key={item.id} value={item.id}>
                {item.nama}
              </option>
            ))}
      </select>
    </div>
  );
};

export default PeriodeSelection;
