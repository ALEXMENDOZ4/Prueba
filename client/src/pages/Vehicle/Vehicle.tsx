import { createTaskVehicles, getTaskVehicle, listTaskVehicles, putTaskVehicles } from '../../api/vehicles';
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as sc from "./styles";
import toast from 'react-hot-toast';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate, useParams } from "react-router-dom";
import { IVehicles } from '../../interfaces';

const Vehiculo = () => {

  // const { data, setData, getUser, putUser } = useUsers();  
  const params = useParams();
  const [user, setUser] = useState<IVehicles>({
    Brand: "",
    model: "",
    numberDoors: 0,
    plate: "",
    vehicleType: ""
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<IVehicles>({
    // defaultValues: user,
  });

  useEffect(()=> {
    const data = async () => {
      const data = await listTaskVehicles();
      console.log("data: ", data);
    }

    data();
  },[])

  useEffect(() => {
    const loadUser = async () => {
      
      if(params.id){
        const vehicle = await getTaskVehicle(params.id);

        const fields = ["Brand", "model", "numberDoors", "plate", "vehicleType"];
        fields.forEach((field : any) => setValue(field, vehicle[field]));
        setUser(user);
      }
    }
    loadUser();
  }, [])
  
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/");
  }


  const onSubmit = async (information: IVehicles) => {

    if(!params.id){
      
      const data = {
        ...information,
        numberDoors: Number(information.numberDoors)
      }

      await createTaskVehicles(data)
      .then(()=>{
        toast.success("Datos enviados");
      })
      .catch(() => {
        toast.error("Hubo un error");
      });
    } else{

      const data = {
        ...information,
        numberDoors: Number(information.numberDoors)
      }

      await putTaskVehicles(data, params.id,).then(()=>{
        toast.success("Datos actualizados");
      })
      .catch(() => {
        toast.error("Hubo un error");
      });
    }
    navigate("/");
    // reset();
    // setData([...data, information])
    // console.log(data);
  };


  return (
    <>
      <sc.Form onSubmit={handleSubmit(onSubmit)}>
        <span className="icon" onClick={handleNavigate}><IoIosArrowBack/></span>
        <h2>{params.id ? "Formulario para actualizar registro de vehiculo" : "Formulario de registro de vehiculo"}</h2>
        <sc.Content>
          <div className="contentInput">
            <input
              type="text"
              placeholder="Placa"
              {...register("plate", { required: true })}
            />
            {errors.plate?.type === "required" && <p>Es requerido</p>}
          </div>
          <div className="contentInput">
            <input
              type="text"
              placeholder="Marca"
              {...register("Brand", { required: true })}
            />
            {errors.Brand?.type === "required" && <p>Es requerido</p>}
          </div>
          <div className="contentInput">
            <input
              type="text"
              placeholder="Modelo"
              {...register("model", { required: true })}
            />
            {errors.model?.type === "required" && <p>Es requerido</p>}
          </div>
          <div className="contentInput">
            <input
              type="text"
              placeholder="Número de puertas"
              {...register("numberDoors", { required: true })}
            />
            {errors.numberDoors?.type === "required" && <p>Es requerido</p>}
          </div>
          <div className="contentInput">
            <input
              type="text"
              placeholder="Tipo de vehículo"
              {...register("vehicleType", { required: true })}
            />
            {errors.vehicleType?.type === "required" && <p>Es requerido</p>}
          </div>
        </sc.Content>
        <sc.ContentButton>
          <button type="submit">Enviar</button>
        </sc.ContentButton>
      </sc.Form>
    </>
  );
};

export default Vehiculo;