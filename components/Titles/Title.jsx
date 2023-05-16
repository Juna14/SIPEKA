import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Title = () => {
  const router = useRouter();
  const hasSquareBrackets = (string) => /\[.*?\]/.test(string);
  let route = router.pathname
    .split("/")
    .filter((x) => x)
    ?.map((part) => {
      const words = part
        .split("-")
        ?.map((part) => part.charAt(0).toUpperCase() + part.slice(1));
      const result = words.join(" ");
      return result;
      // return words;
    });
  let title = route;
  if (route.length == 0) {
    title = "Home";
  } else if (route.length == 2 && hasSquareBrackets(route[1])) {
    title = "Detail" + " " + route[0];
  } else if (route.length > 2) {
    title = route[2] + " " + route[0];
  } else {
    title = route;
  }

  return (
    <Head>
      <title>SIPEKA | {title ? title : ""}</title>
    </Head>
  );
};

export default Title;
