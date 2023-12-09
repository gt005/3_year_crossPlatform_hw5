import express from "express";
import tableRoutes from "./furniture/commonRoutes";
import authRoutes from './authorization/userRoutes';

const commonRoutes = express.Router();

commonRoutes.use('/furniture', tableRoutes);
commonRoutes.use('/auth', authRoutes);

export default commonRoutes;