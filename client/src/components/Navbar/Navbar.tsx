import React from "react";
import * as sc from "./styles";

const Navbar = () => {
  return (
    <>
      <sc.Content>
        <ul>
          <li>
            <h1>aplicación web que permite registrar personas y vehículos</h1>
            <div className="center">
              <sc.A to="/usuario">Formulario de Usuario</sc.A>
              <sc.A to="/vehiculo">Formulario de Vehiculo</sc.A>
            </div>
          </li>
        </ul>
      </sc.Content>
    </>
  );
};

export default Navbar;
