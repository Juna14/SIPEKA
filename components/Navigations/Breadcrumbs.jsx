import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Breadcrumbs = () => {
  const router = useRouter();
  const path = router.pathname.split("/").filter((x) => x);
  const hasSquareBrackets = (string) => /\[.*?\]/.test(string);
  return (
    <ul className="flex gap-2 items-center text-xs">
      <li>
        <Link href="/">Home</Link>
      </li>
      {path?.map((part, index) => {
        const url = `/${path.slice(0, index + 1).join("/")}`;
        const words = part
          .split("-")
          ?.map((part) => part.charAt(0).toUpperCase() + part.slice(1));
        const result = words.join(" ");
        let label = result;

        if (path.length == 2 && hasSquareBrackets(part)) {
          label = "Detail";
        } else if (path.length > 2 && hasSquareBrackets(part)) {
          return;
        }

        return (
          <div key={url} className="flex items-center gap-2">
            <i className="pt-1 fi-rr-angle-small-right"></i>
            <button
              className=" disabled:cursor-not-allowed truncate sm:w-max"
              disabled={path.length == index + 1}
              key={url}
              onClick={() => router.push(url)}
            >
              {label}
            </button>
          </div>
        );
      })}
    </ul>
  );
};
// const hasNumber = (part) => /\d/.test(part);
// const path = router.asPath
//   .split("/")
//   .filter((x) => x)
//   ?.map((part, index) => {
//     const words = part
//       .split("-")
//       ?.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
//       // .filter((part) => (hasNumber(part) ? "Ada" : ""));
//     const result = words.join(" ");

//     return `${result} `;
//   });

export default Breadcrumbs;
