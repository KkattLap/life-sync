import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App";
import Home from "./components/Home/Home";
import Calendar from "./components/Calendar/Calendar";
import ToDo from "./components/ToDo/ToDo";
import "./index.css";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <App>
            <Home />
          </App>
        }
      />
      <Route
        path="/calendar"
        element={
          <App>
            <Calendar />
          </App>
        }
      />
      <Route
        path="/todo"
        element={
          <App>
            <ToDo />
          </App>
        }
      />
    </Routes>
  </BrowserRouter>
);
