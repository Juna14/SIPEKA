import { DarkModeProvider } from "@/helper/context/DarkModeContext";
import NavTogglerProvider from "@/helper/context/NavTogglerContext";
import "@/styles/globals.css";
import "@/styles/webfonts/uicons-regular-rounded.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      router.push("/auth/login");
    }
  }, [router.isReady, router.pathname]);

  return (
    <>
      <DarkModeProvider>
        <QueryClientProvider client={queryClient}>
          <NavTogglerProvider>
            <Component {...pageProps} />
          </NavTogglerProvider>
        </QueryClientProvider>
      </DarkModeProvider>
    </>
  );
}
