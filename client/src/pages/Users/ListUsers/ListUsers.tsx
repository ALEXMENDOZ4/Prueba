import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { listTaskRequest } from "../../../api/users";
import { useUsers } from "../../../context/UsersContext";
import { IUser } from "../../../interfaces";
import Card from "./components/Card/Card";
import { IoIosArrowBack } from "react-icons/io";

const ListUsers = () => {
  const { data, setData } = useUsers();
  const navigate = useNavigate();

  useEffect(() => {
    async function loadData() {
      const response = await listTaskRequest();
      setData(response);
    }
    loadData();
  }, []);

  const handleNavigate2 = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        {data.length !== 0 ? (
          data.map((item: IUser) => <Card key={item.id!} item={item} />)
        ) : (
          <>
            <span
              className="icon"
              style={{
                cursor: "pointer",
                position: "relative",
                top: "3rem",
                right: "3rem",
              }}
              onClick={handleNavigate2}
            >
              <IoIosArrowBack size={"2rem"} />
            </span>
            <h1 style={{ fontSize: "2rem" }}>No hay Informacion</h1>
          </>
        )}
      </div>
    </>
  );
};

export default ListUsers;
