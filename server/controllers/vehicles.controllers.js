import { pool } from "../db.js";

export const getVehicles = async (req, res) => {
  try {
    // throw new Error("Hubo un error");
    const [result] = await pool.query(
      "SELECT * FROM vehicles ORDER BY createdAt ASC"
    );
    // res.send("obteniendo tareas");

    if (result.length === 0) {
      return res
        .status(404)
        .json({ message: "no se encuentra ningun vehiculo" });
    }

    console.log(result);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getVehicle = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM vehicles WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0) {
      return res.status(404).json({ message: "vehiculo no encontrado" });
    }

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const postVehicles = async (req, res) => {
  try {
    const { plate, Brand, model, numberDoors, vehicleType } = req.body;

    const [result] = await pool.query(
      "INSERT INTO vehicles(plate, Brand, model, numberDoors, vehicleType) VALUES (?, ?, ?, ?, ?)",
      [plate, Brand, model, numberDoors, vehicleType]
    );

    console.log(result);
    res.json({
      id: result.insertId,
      plate,
      Brand,
      model,
      numberDoors,
      vehicleType,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const putVehicles = async (req, res) => {
  try {
    const { plate, Brand, model, numberDoors, vehicleType } = req.body;

    const [result] = await pool.query("UPDATE vehicles SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json({
      id: req.params.id,
      plate,
      Brand,
      model,
      numberDoors,
      vehicleType,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteVehicles = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM vehicles WHERE id = ?", [
      req.params.id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "el id no existe" });
    }

    res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};