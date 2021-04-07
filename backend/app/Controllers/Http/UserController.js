"use strict";

const User = use("App/Models/User");
const Database = use("Database");

class UserController {
  async index({ request, response, view }) {
    const user = await User.all();

    return user;
  }

  async store({ request }) {
    const data = request.only(["username", "email", "password"]);

    const trx = await Database.beginTransaction();

    const user = await User.create(data, trx);

    await trx.commit();

    return user;
  }

  async update({ params, request, response, auth }) {
    const data = request.only(["username", "email", "password"]);
    const user = auth.user;

    if (data.username) {
      user.username = data.username;
    }

    if (data.email) {
      user.email = data.email;
    }

    if (data.password) {
      user.password = data.password;
    }

    await user.save();

    return user;
  }
}

module.exports = UserController;
