import React from "react";
import { Toaster } from "react-hot-toast";
import { Route, Routes } from "react-router";
import { BrowserRouter, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { UsersContextProvider } from "./context/UsersContext";
import { VehiclesContextProvider } from "./context/VehiclesContext";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/FormUsers/Users";
import ListUsers from "./pages/Users/ListUsers/ListUsers";
import ListVehicles from "./pages/Vehicle/ListVehicles/ListVehicles";
import Vehiculo from "./pages/Vehicle/Vehicle";

const App = () => {
  return (
    <>
      <VehiclesContextProvider>
        <UsersContextProvider>  
          <BrowserRouter>
            <Navbar />
            <div style={{ display: "flex", justifyContent: "center", marginTop: "6rem" }}>
              <Routes>
                <Route path="/listUser" element={<ListUsers/>} />
                <Route path="/listVehicle" element={<ListVehicles/>} />
                <Route path="/" element={<Home/>} />
                <Route path="/usuario" element={<Users />} />
                <Route path="/usuario/edit/:id" element={<Users />} />
                <Route path="/vehiculo" element={<Vehiculo />} />
                <Route path="/vehiculo/edit/:id" element={<Vehiculo />} />
                <Route path="*" element={<Navigate replace to={"/"} />} />
              </Routes>
            </div>
          </BrowserRouter>
          <Toaster
            position="top-right"
            reverseOrder={true}
          />
        </UsersContextProvider>
      </VehiclesContextProvider>
    </>
  );
};

export default App;