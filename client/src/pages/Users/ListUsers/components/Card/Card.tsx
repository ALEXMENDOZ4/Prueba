import React from "react";
import { IUser } from "../../../../../interfaces";
import * as sc from "./styles";
import { MdDeleteForever } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import { useUsers } from "../../../../../context/UsersContext";
import { useNavigate } from "react-router-dom";

interface ICard {
  item: IUser;
}

const Card = ({ item }: ICard) => {

    const { handleDelete } = useUsers();
    const navigate = useNavigate();  


    const handleNavigate = (id: string) => {
        navigate(`/usuario/edit/${id}`);
    }

  return (
    <sc.Content>
      <div className="edit" onClick={()=>handleNavigate(item.id!)}>
        <AiFillEdit/>
      </div>
      <div className="delete" onClick={()=>handleDelete(item.id!)}>
        <MdDeleteForever/>
      </div>
      <div className="title">
        <span>Información del usuario</span>
      </div>
      <div>
        <span className="title">Nombre:</span>
        <span>{item.name}</span>
      </div>
      <div>
        <span className="title">Apellido:</span>
        <span>{item.lastName}</span>
      </div>
      <div>
        <span className="title">Fecha de nacimiento:</span>
        <span>{item.birthDate}</span>
      </div>
      <div>
        <span className="title">Identificacion:</span>
        <span>{item.identification}</span>
      </div>
      <div>
        <span className="title">¿Es casado?:</span>
        <span>{String(item.married) === "1" ? "Si" : "No"}</span>
      </div>
      <div>
        <span className="title">Ingresos mensuales:</span>
        <span>{item.monthlyIncome}</span>
      </div>
      <div>
        <span className="title">profesion:</span>
        <span>{item.profession}</span>
      </div>
      <div>
        <span className="title">Vehiculo:</span>
        <span>{item.vehicle}</span>
      </div>
    </sc.Content>
  );
};

export default Card;