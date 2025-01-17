import { Router } from "express";
import {test, signup, signin, profile, verifEmail} from "../controllers/user.controller";

import jwtVerif from "../middlewares/jwt.middleware";

const router = Router();

router.get("/test", jwtVerif ,test);
router.post("/signup", signup)
router.post("/signin", signin)
router.get("/profile", jwtVerif, profile)
router.get("/verifEmail/:token", verifEmail)

export default router;