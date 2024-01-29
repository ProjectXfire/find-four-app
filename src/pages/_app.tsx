import "@/styles/globals.css";
import type { AppProps } from "next/app";
// States
import { BoardProvider } from "@/modules/gameboard/states";

const Provider = ({ children }: { children: JSX.Element }) => {
  return <BoardProvider>{children}</BoardProvider>;
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}
