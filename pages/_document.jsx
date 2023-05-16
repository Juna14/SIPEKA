import useDarkMode from "@/helper/hooks/useDarkMode";
import { Html, Head, Main, NextScript } from "next/document";
import { useEffect } from "react";

export default function Document() {
  const [darkMode] = useDarkMode();
  useEffect(() => {}, [darkMode]);

  return (
    <Html lang="en" className={darkMode ? "dark" : ""}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
