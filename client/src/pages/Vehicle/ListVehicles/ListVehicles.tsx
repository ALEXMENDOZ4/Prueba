import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { listTaskVehicles } from "../../../api/vehicles";
import { useVehicles } from "../../../context/VehiclesContext";
import { IVehicles } from "../../../interfaces";
import Card from "./components/Card/Card";
import { IoIosArrowBack } from "react-icons/io";

const ListVehicles = () => {
  const { data, setData } = useVehicles();
  const navigate = useNavigate();

  useEffect(() => {
    const data = async () => {
      const data = await listTaskVehicles();
      setData(data);
    };

    data();
  }, []);

  const handleNavigate2 = () => {
    navigate("/");
  };

  return (
    <>
      <div>
        {data.length !== 0 ? (
          data.map((item: IVehicles) => <Card key={item.id!} item={item} />)
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

export default ListVehicles;
