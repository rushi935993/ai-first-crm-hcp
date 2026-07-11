import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";
import "./index.css";

import App from "./App";
import QueryProvider from "./providers/QueryProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryProvider>
        <App />
        <Toaster
            position="top-right"
            richColors
            closeButton
        />
    </QueryProvider>
  </React.StrictMode>
);