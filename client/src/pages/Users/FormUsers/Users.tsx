import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { createTaskRequest } from "../../../api/users";
import * as sc from "./styles";
import toast from 'react-hot-toast';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate, useParams } from "react-router-dom";
import { IUser } from "../../../interfaces";
import { useUsers } from "../../../context/UsersContext";


const Users = () => {

  const { data, setData, getUser, putUser } = useUsers();  
  const params = useParams();
  const [user, setUser] = useState<IUser>({
    name: "",
    lastName: "",
    birthDate: "",
    identification: "",
    profession: "",
    monthlyIncome: "",
    vehicle: "",
    married: 0,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<IUser>({
    // defaultValues: user,
  });

  useEffect(() => {
    const loadUser = async () => {
      
      if(params.id){
        const user = await getUser(params.id);

        const data = {
          ...user,
          married: String(user.married),
        }

        const fields = ["name", "lastName", "birthDate", "identification", "profession", "monthlyIncome", "vehicle", "married"];
        fields.forEach((field : any) => setValue(field, data[field]));
        setUser(user);
      }
    }
    loadUser();
  }, [])
  
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/listUser");
  }


  const onSubmit = async (information: IUser) => {

    if(!params.id){
      
      await createTaskRequest(information)
      .then(()=>{
        toast.success("Datos enviados");
      })
      .catch(() => {
        toast.error("Hubo un error");
      });
    } else{

      await putUser(params.id, information).then(()=>{
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
        <h2>{params.id ? "Formulario para actualizar registro de usuario" : "Formulario de registro de usuario"}</h2>
        <sc.Content>
          <div className="contentInput">
            <input
              type="text"
              placeholder="Nombre"
              {...register("name", { required: true })}
            />
            {errors.name?.type === "required" && <p>Es requerido</p>}
          </div>
          <div className="contentInput">
            <input
              type="text"
              placeholder="Apellido"
              {...register("lastName", { required: true })}
            />
            {errors.lastName?.type === "required" && <p>Es requerido</p>}
          </div>
          <div className="contentInput">
            <input
              type="date"
              placeholder="Fecha de nacimiento"
              {...register("birthDate", { required: true })}
            />
            {errors.birthDate?.type === "required" && <p>Es requerido</p>}
          </div>
          <div className="contentInput">
            <input
              type="text"
              placeholder="Identificación"
              {...register("identification", { required: true })}
            />
            {errors.identification?.type === "required" && <p>Es requerido</p>}
          </div>
          <div className="contentInput">
            <input
              type="text"
              placeholder="Profesión"
              {...register("profession", { required: true })}
            />
            {errors.profession?.type === "required" && <p>Es requerido</p>}
          </div>
          <div className="contentInput">
            <input
              type="text"
              placeholder="Ingresos mensuales"
              {...register("monthlyIncome", { required: true })}
            />
            {errors.monthlyIncome?.type === "required" && <p>Es requerido</p>}
          </div>
          <div className="contentInput">
            <input
              type="text"
              placeholder="Vehículo"
              {...register("vehicle", { required: true })}
            />
            {errors.vehicle?.type === "required" && <p>Es requerido</p>}
          </div>
          <div className="align">
            <span>¿Casado?</span>
            <div>
              <label htmlFor="radio_1">Si</label>
              <input
                id="radio_1"
                type="radio"
                value={"1"}
                {...register("married", { required: true })}
              />
              {errors.married?.type === "required" && <p>Es requerido</p>}
            </div>
            <div>
              <label htmlFor="radio_2">No</label>
              <input
                id="radio_2"
                type="radio"
                value={"0"}
                {...register("married", { required: true })}
              />
              {errors.married?.type === "required" && <p>Es requerido</p>}
            </div>
          </div>
        </sc.Content>
        <sc.ContentButton>
          <button type="submit">Enviar</button>
        </sc.ContentButton>
      </sc.Form>
    </>
  );
};

export default Users;