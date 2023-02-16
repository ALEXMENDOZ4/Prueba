import React, { useEffect, useState } from "react";
import { listTaskRequest } from "../../../api/users";
import { useUsers } from "../../../context/UsersContext";
import { IUser } from "../../../interfaces";
import Card from "./components/Card/Card";

const ListUsers = () => {
  
  const { data, setData } = useUsers();  

  useEffect(() => {
    async function loadData() {
      const response = await listTaskRequest();
      setData(response);
    }
    loadData();
  }, []);

  return (
    <>
      <div>
        {data.length !== 0 ? (
          data.map((item: IUser) => <Card key={item.id!} item={item} />)
        ) : (
          <h1 style={{ fontSize: "2rem" }}>No hay Informacion</h1>
        )}
      </div>
    </>
  );
};

export default ListUsers;
