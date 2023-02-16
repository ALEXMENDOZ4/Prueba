import React from "react";
import * as sc from "./styles";
import { MdDeleteForever } from 'react-icons/md';
import { AiFillEdit } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { IVehicles } from "../../../../../interfaces";
import { useVehicles } from "../../../../../context/VehiclesContext";
import { IoIosArrowBack } from 'react-icons/io';

interface ICard {
  item: IVehicles;
}

const Card = ({ item }: ICard) => {

    const { handleDelete } = useVehicles();
    const navigate = useNavigate();  


    const handleNavigate = (id: string) => {
        navigate(`/vehiculo/edit/${id}`);
    }

    const handleNavigate2 = () => {
      navigate("/");
    }

  return (
    <>
      <span className="icon" style={{ cursor: "pointer" }} onClick={handleNavigate2}><IoIosArrowBack size={"2rem"}/></span>
      <sc.Content>
        <div className="edit" onClick={()=>handleNavigate(item.id!)}>
          <AiFillEdit/>
        </div>
        <div className="delete" onClick={()=>handleDelete(item.id!)}>
          <MdDeleteForever/>
        </div>
        <div className="title">
          <span>Información del vehiculo</span>
        </div>
        <div>
          <span className="title">Marca:</span>
          <span>{item.Brand}</span>
        </div>
        <div>
          <span className="title">Modelo:</span>
          <span>{item.model}</span>
        </div>
        <div>
          <span className="title">Numero de puertas:</span>
          <span>{item.numberDoors}</span>
        </div>
        <div>
          <span className="title">Placa:</span>
          <span>{item.plate}</span>
        </div>
        <div>
          <span className="title">Tipo de vehículo:</span>
          <span>{item.vehicleType}</span>
        </div>
      </sc.Content>
    </>
  );
};

export default Card;