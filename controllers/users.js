const User = require('../models/User');

exports.getAllUsers = async (ctx) => {
  try {
    const users = User.getAll();
    ctx.status = 200;
    ctx.body = { statuscode: "Success get method", user: users };
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};

exports.getUserById = async (ctx) => {
  const { id } = ctx.params;
  try {
    const user = User.getById(id);
    if (user) {
      ctx.status = 200;
      ctx.body = { statuscode: "Success get method", user: user };
    } else {
      ctx.status = 404;
      ctx.body = { error: 'User not found' };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};

exports.createUser = async (ctx) => {
  const userData = ctx.request.body;
  try {
    const newUser = User.createUser(userData);
    ctx.status = 201;
    ctx.body = { statuscode: "Success post method", user: newUser };
  } catch (error) {
    ctx.status = 400;
    ctx.body = { error: error.message };
  }
};

exports.updateUser = async (ctx) => {
  const { id } = ctx.params;
  const userData = ctx.request.body;
  try {
    const updatedUser = User.updateUser(id, userData);
    if (updatedUser) {
      ctx.status = 200;
    ctx.body = { statuscode: "Success put method", user: updatedUser };
    } else {
      ctx.status = 404;
      ctx.body = { error: 'User not found' };
    }
  } catch (error) {
    ctx.status = 400;
    ctx.body = { error: error.message };
  }
};

exports.deleteUser = async (ctx) => {
  const { id } = ctx.params;
  try {
    const deletedUser = User.deleteUser(id);
    if (deletedUser) {
      ctx.status = 200;
      ctx.body = { statuscode: "Success delete method", user: deletedUser };
    } else {
      ctx.status = 404;
      ctx.body = { error: 'User not found' };
    }
  } catch (error) {
    ctx.status = 500;
    ctx.body = { error: 'Internal Server Error' };
  }
};
