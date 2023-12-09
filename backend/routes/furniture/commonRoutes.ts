import express from "express";
import tableRoutes from "./tableRoutes";
import chairRoutes from "./chairRoutes";
import wardrobeRoutes from "./wardrobeRoutes";

const commonRoutes = express.Router();

commonRoutes.use('/tables', tableRoutes);
commonRoutes.use('/chairs', chairRoutes);
commonRoutes.use('/wardrobes', wardrobeRoutes);

export default commonRoutes;