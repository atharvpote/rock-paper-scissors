import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import GlobalContextProvider from "./context/GlobalContextProvider";
import App from "./App";

createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <GlobalContextProvider>
      <App />
    </GlobalContextProvider>
  </StrictMode>
);
