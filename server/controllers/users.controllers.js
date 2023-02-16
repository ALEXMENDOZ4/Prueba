import { pool } from "../db.js";

export const getUsers = async (req, res) => {

  try {
    // throw new Error("Hubo un error");
    const [result] = await pool.query(
      "SELECT * FROM users ORDER BY createdAt ASC"
    );
    // res.send("obteniendo tareas");

    if (result.length === 0) {
      return res
        .status(404)
        .json({ message: "no se encuentra ningun usuario" });
    }

    console.log(result);
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM users WHERE id = ?", [
      req.params.id,
    ]);

    if (result.length === 0) {
      return res.status(404).json({ message: "usuario no encontrado" });
    }

    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const postUsers = async (req, res) => {
  try {
    const {
      name,
      lastName,
      birthDate,
      identification,
      profession,
      monthlyIncome,
      vehicle,
      married,
    } = req.body;

    const [result] = await pool.query(
      "INSERT INTO users(name, lastName, birthDate, identification, profession, monthlyIncome, vehicle, married) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [
        name,
        lastName,
        birthDate,
        identification,
        profession,
        monthlyIncome,
        vehicle,
        married,
      ]
    );

    console.log(result);
    res.json({
      id: result.insertId,
      name,
      lastName,
      birthDate,
      identification,
      profession,
      monthlyIncome,
      vehicle,
      married,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const putUsers = async (req, res) => {
  try {
    const {
      name,
      lastName,
      birthDate,
      identification,
      profession,
      monthlyIncome,
      vehicle,
      married,
    } = req.body;

    const [result] = await pool.query("UPDATE users SET ? WHERE id = ?", [
      req.body,
      req.params.id,
    ]);
    res.json({
      id: req.params.id,
      name,
      lastName,
      birthDate,
      identification,
      profession,
      monthlyIncome,
      vehicle,
      married,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteUsers = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM users WHERE id = ?", [
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