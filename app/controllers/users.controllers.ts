// imports
import { Request, Response } from "express";

// API methods
// GET
export const getUsers = (req: Request, res: Response) => {
  res.json({
    message: "getUsers",
  });
};

export const getUser = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: "getUser",
    id: id,
  });
};

// POST
export const postUsers = (req: Request, res: Response) => {
  const { body } = req;
  res.json({
    message: "postUsers",
    body: body,
  });
};

// PUT
export const putUser = (req: Request, res: Response) => {
  const { id } = req.params;
  const { body } = req;
  res.json({
    message: "putUsers",
    id: id,
    body: body,
  });
};

// DELETE
export const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;
  res.json({
    message: "deleteUser",
    id: id,
  });
};
