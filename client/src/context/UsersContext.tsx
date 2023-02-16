import { createContext, useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { deleteTaskRequest, getTaskRequest, putTaskRequest } from "../api/users";
import { IUser } from "../interfaces";

export const UsersContext = createContext({} as any);

export const UsersContextProvider = ({ children } : any) => {

    const [data, setData] = useState<IUser[]>([]);

    const handleDelete = (id: string) => {
        toast.success("usuario eliminado");
        deleteTaskRequest(id);
        setData(data.filter(item => item.id !== id));
        console.log(id);
    }

    const getUser = async (id: string) => {
        const response = await getTaskRequest(id);
        return response;
    }

    const putUser = async (id: string, data: IUser) => {
        putTaskRequest(data, id);
    }

    return (
        <UsersContext.Provider value={{ data, setData, getUser, handleDelete, putUser }}>
            {children}
        </UsersContext.Provider>
    );
};


export const useUsers = () => {

    const context = useContext(UsersContext);

    if(!context){
        throw new Error("no esta dentro del contexto");
    }

    return context;
}