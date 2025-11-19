// src/main.tsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// 👈 Isko import karein
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* 👈 App ko iske andar wrap karein */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
