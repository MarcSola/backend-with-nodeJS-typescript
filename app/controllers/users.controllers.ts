// imports
import { Request, Response } from "express";
import User from "../models/user";

// API methods
// GET
export const getUsers = async (req: Request, res: Response) => {
  // get users
  const users = await User.findAll();
  // generate response
  if (users) {
    res.status(200).json({
      statusMsg: "getUsers was successful",
      users: users,
    });
  } else {
    res.status(400).json({
      statusMsg: "getUsers was not successful",
    });
  }
};

export const getUser = async (req: Request, res: Response) => {
  // destructure id from request params
  const { id } = req.params;
  // get user
  const user = await User.findByPk(id);
  // generate response
  if (user) {
    res.status(200).json({
      statusMsg: "getUser was successful",
      user: user,
    });
  } else {
    res.status(404).json({
      statusMsg: `getUser was not successful. User ${id} does not exist`,
    });
  }
};

// POST
export const postUsers = async (req: Request, res: Response) => {
  // destructure body from request
  const { body } = req;
  try {
    // email check to avoid uploading repeated email
    const existEmail = await User.findOne({
      where: {
        email: body.email,
      },
    });

    if (existEmail) {
      return res.status(400).json({
        statusMsg: "Email already in use",
      });
    }

    // creation of new user to upload
    const user = await User.create({
      name: body.name,
      email: body.email,
      status: body.status,
    });

    // upload new user and generate response
    await (await user).save();
    res.status(200).json({
      statusMsg: "User was added successfully",
    });
  } catch (error) {
    // something went wrong on server side
    res.status(500).json({
      statusMsg:
        "Something went wrong when trying to upload new user. Contact admin.",
      error: error,
    });
  }
};

// PUT
export const putUser = async (req: Request, res: Response) => {
  // destructure body from request and id from request params
  const { id } = req.params;
  const { body } = req;
  try {
    // find user by id
    const userToUpdate = await User.findByPk(id);
    if (userToUpdate) {
      // check to avoid updating user if
      // body email already in use by another user
      // using user ids
      const existEmail = await User.findOne({
        where: {
          email: body.email,
        },
      });
      if (existEmail) {
        if (
          userToUpdate?.getDataValue("id") !== existEmail?.getDataValue("id")
        ) {
          return res.status(400).json({
            statusMsg: "Email already in use",
          });
        }
      }
      // update user if check was successful and generate response
      await userToUpdate.update(body);
      res.status(200).json({
        statusMsg: "User was updated successfully",
      });
    } else {
      res.status(404).json({
        statusMsg: `User ${id} does not exist`,
      });
    }
  } catch (error) {
    // something went wrong on server side
    res.status(500).json({
      statusMsg: `Something went wrong when trying to update user ${id}. Contact admin.`,
      error: error,
    });
  }
};

export const removeAdminStatus = async (req: Request, res: Response) => {
  // destructure id from request params
  const { id } = req.params;
  // find user by id
  const userToUpdate = await User.findByPk(id);
  if (userToUpdate) {
    // update user if check was successful and generate response
    await userToUpdate.update({ status: false });
    res.status(200).json({
      statusMsg: "User admin status removed successfully",
    });
  } else {
    res.status(404).json({
      statusMsg: `User ${id} does not exist`,
    });
  }
};

// DELETE
export const deleteUser = async (req: Request, res: Response) => {
  // destructure id from request params
  const { id } = req.params;
  // find user by id
  const userToDelete = await User.findByPk(id);
  if (userToDelete) {
    // delete user if check was successful and generate response
    await userToDelete.destroy();
    res.status(200).json({
      statusMsg: `User ${id} was deleted successfully`,
    });
  } else {
    res.status(404).json({
      statusMsg: `User ${id} does not exist`,
    });
  }
};
