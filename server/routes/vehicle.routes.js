import { Router } from "express";
import { getVehicle, getVehicles, postVehicles, putVehicles, deleteVehicles } from "../controllers/vehicles.controllers.js";

const router = Router();

router.get("/vehicles", getVehicles);

router.get("/vehicles/:id", getVehicle);

router.post("/vehicles", postVehicles);

router.put("/vehicles/:id", putVehicles);

router.delete("/vehicles/:id", deleteVehicles);

export default router;