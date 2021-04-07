"use strict";

const Route = use("Route");

Route.get("users", "UserController.index");
Route.post("users", "UserController.store").validator("User");

Route.post("sessions", "SessionController.store").validator("Session");

Route.post("passwords", "ForgotPasswordController.store").validator(
  "ForgotPassword"
);
Route.put("passwords", "ForgotPasswordController.update").validator(
  "ResetPassword"
);

Route.resource("types", "TypeController")
  .apiOnly()
  .validator(
    new Map([
      [["types.store"], ["Type"]],
      [["types.update"], ["Type"]],
    ])
  );

Route.group(() => {
  Route.put("users", "UserController.update").validator("UserEdit");

  Route.resource("bets", "BetController")
    .apiOnly()
    .validator(new Map([[["bets.store"], ["Bet"]]]));
}).middleware(["auth"]);
