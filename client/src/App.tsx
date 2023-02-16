import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router";
import { BrowserRouter, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { UsersContextProvider } from "./context/UsersContext";
import Users from "./pages/Users/FormUsers/Users";
import ListUsers from "./pages/Users/ListUsers/ListUsers";
import Vehiculo from "./pages/Vehicle/Vehicle";

const App = () => {
  return (
    <>
      <UsersContextProvider>  
        <BrowserRouter>
          <Navbar />
          <div style={{ display: "flex", justifyContent: "center", marginTop: "6rem" }}>
            <Routes>
              <Route path="/" element={<ListUsers/>} />
              <Route path="/usuario" element={<Users />} />
              <Route path="/usuario/edit/:id" element={<Users />} />
              <Route path="/vehiculo" element={<Vehiculo />} />
              <Route path="*" element={<Navigate replace to={"/"} />} />
            </Routes>
          </div>
        </BrowserRouter>
        <Toaster
          position="top-right"
          reverseOrder={true}
        />
      </UsersContextProvider>
    </>
  );
};

export default App;