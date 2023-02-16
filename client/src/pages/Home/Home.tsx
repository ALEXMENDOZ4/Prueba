import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as sc from "./styles";

const Home = () => {

  const navigate = useNavigate();
  const handleNavigate = (route: string) => {
    navigate(route);
  }

  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      <sc.Button onClick={()=>handleNavigate("/listUser")}>Lista de Usuarios</sc.Button>
      <sc.Button onClick={()=>handleNavigate("/listVehicle")}>Lista de Vehiculos</sc.Button>
    </div>
  )
}

export default Home;