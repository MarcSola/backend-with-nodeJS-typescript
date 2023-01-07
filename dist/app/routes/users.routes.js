"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// imports
const express_1 = require("express");
const users_controllers_1 = require("../controllers/users.controllers");
const router = (0, express_1.Router)();
// get routes
router.get("/", users_controllers_1.getUsers);
router.get("/:id", users_controllers_1.getUser);
// post routes
router.post("/", users_controllers_1.postUsers);
// put routes
router.put("/:id", users_controllers_1.putUser);
// delete routes
router.delete("/:id", users_controllers_1.deleteUser);
// export router always after all routes have been defined
exports.default = router;
//# sourceMappingURL=users.routes.js.map