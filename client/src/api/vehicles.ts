import axios from "axios";
import { IVehicles } from "../interfaces";

export const apiUrl = import.meta.env.VITE_APP_VEHICLES;

const listTaskVehicles = async () => {
   const data = await axios.get(apiUrl);
   return data.data;
}

const getTaskVehicle = async (id: string) => {
   const data = await axios.get(`${apiUrl}/${id}`);
   return data.data;
}

const createTaskVehicles = async (vehicle: IVehicles) => {
   await axios.post(apiUrl, vehicle);
}

const deleteTaskVehicles = async (id: string) => {
   await axios.delete(`${apiUrl}/${id}`);
}

const putTaskVehicles = async (vehicle: IVehicles, id: string) => {
   await axios.put(`${apiUrl}/${id}`, vehicle);
}

export { listTaskVehicles, getTaskVehicle, createTaskVehicles, deleteTaskVehicles, putTaskVehicles };