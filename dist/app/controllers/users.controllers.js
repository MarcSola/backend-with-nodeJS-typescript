"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.putUser = exports.postUsers = exports.getUser = exports.getUsers = void 0;
// API methods
// GET
const getUsers = (req, res) => {
    res.json({
        message: "getUsers",
    });
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    const { id } = req.params;
    res.json({
        message: "getUser",
        id: id,
    });
};
exports.getUser = getUser;
// POST
const postUsers = (req, res) => {
    const { body } = req;
    res.json({
        message: "postUsers",
        body: body,
    });
};
exports.postUsers = postUsers;
// PUT
const putUser = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        message: "putUsers",
        id: id,
        body: body,
    });
};
exports.putUser = putUser;
// DELETE
const deleteUser = (req, res) => {
    const { id } = req.params;
    res.json({
        message: "deleteUser",
        id: id,
    });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=users.controllers.js.map