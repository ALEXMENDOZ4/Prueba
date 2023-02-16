import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { deleteTaskRequest, getTaskRequest, putTaskRequest } from "../api/users";
import { deleteTaskVehicles, getTaskVehicle, putTaskVehicles } from "../api/vehicles";
import { IUser, IVehicles } from "../interfaces";

export const VehiclesContext = createContext({} as any);

export const VehiclesContextProvider = ({ children } : any) => {

    const [data, setData] = useState<IVehicles[]>([]);

    const handleDelete = (id: string) => {
        toast.success("usuario eliminado");
        deleteTaskVehicles(id);
        setData(data.filter(item => item.id !== id));
        console.log(id);
    }

    const getVehicles = async (id: string) => {
        const response = await getTaskVehicle(id);
        return response;
    }

    const putVehicles = async (id: string, data: IVehicles) => {
        putTaskVehicles(data, id);
    }

    return (
        <VehiclesContext.Provider value={{ data, setData, getVehicles, handleDelete, putVehicles }}>
            {children}
        </VehiclesContext.Provider>
    );
};


export const useVehicles = () => {

    const context = useContext(VehiclesContext);

    if(!context){
        throw new Error("no esta dentro del contexto");
    }

    return context;
}