// imports
import { Router } from "express";
import {
  getUsers,
  getUser,
  postUsers,
  putUser,
  deleteUser,
} from "../controllers/users.controllers";

const router = Router();

// get routes
router.get("/", getUsers);
router.get("/:id", getUser);

// post routes
router.post("/", postUsers);

// put routes
router.put("/:id", putUser);

// delete routes
router.delete("/:id", deleteUser);

// export router always after all routes have been defined
export default router;
