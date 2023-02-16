import axios from "axios";
import { IUser } from "../interfaces";

export const apiUrl = import.meta.env.VITE_APP_API;

const listTaskRequest = async () => {
   const data = await axios.get(apiUrl);
   return data.data;
}

const getTaskRequest = async (id: string) => {
   const data = await axios.get(`${apiUrl}/${id}`);
   return data.data;
}

const createTaskRequest = async (users: IUser) => {
   await axios.post(apiUrl, users);
}

const deleteTaskRequest = async (id: string) => {
   await axios.delete(`${apiUrl}/${id}`);
}

const putTaskRequest = async (users: IUser, id: string) => {
   await axios.put(`${apiUrl}/${id}`, users);
}

export { listTaskRequest, getTaskRequest, createTaskRequest, deleteTaskRequest, putTaskRequest };