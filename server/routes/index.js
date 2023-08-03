import { Router } from "express";
import  {getCharacters}  from "../controllers/getCharacters.js";

const router = Router()

router.get('/', getCharacters)

export default router;