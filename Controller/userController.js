import prisma from "../DB/db.config.js";

export const getUsers = async (req, res) => {
  try {
    const user = await prisma.user.findMany({});
    res.json({ status: 200, data: user, message: "done" });
  } catch (error) {
    console.log(error);
    res.json({ status: 500, message: "Operation failed" });
  }
};

export const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await prisma.user.findUnique({
      where: {
        id: Number(userId),
      },
    });
    res.json({ status: 200, data: user, message: "done" });
  } catch (error) {
    console.log(error);
    res.json({ status: 500, message: "Operation failed" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const findUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (findUser) {
      res.json({
        status: 200,
        message: "Email Already Taken, please enter another email.",
      });
      return;
    }

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    res.json({ status: 200, data: user, message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.json({ status: 500, message: "Operation failed" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const { name, email, password } = req.body;

    const update = await prisma.user.update({
      where: {
        id: Number(userId),
      },
      data: {
        name,
        email,
        password,
      },
    });
    res.json({
      status: 200,
      data: update,
      message: "User updated successfully",
    });
  } catch (error) {
    console.log(error);
    res.json({ status: 500, message: "Operation failed" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await prisma.user.delete({
      where: {
        id: Number(userId),
      },
    });
    res.json({ status: 200, data: user, message: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.json({ status: 500, message: "Operation failed" });
  }
};
