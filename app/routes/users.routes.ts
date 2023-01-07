// imports
import { Router } from "express";
import {
  getUsers,
  getUser,
  postUsers,
  putUser,
  deleteUser,
  removeAdminStatus,
} from "../controllers/users.controllers";

const router = Router();

// get routes
router.get("/", getUsers);
router.get("/:id", getUser);

// post routes
router.post("/", postUsers);

// put routes
router.put("/:id", putUser);
router.put("/remove-admin-status/:id", removeAdminStatus);

// delete routes
router.delete("/:id", deleteUser);

// export router always after all routes have been defined
export default router;
