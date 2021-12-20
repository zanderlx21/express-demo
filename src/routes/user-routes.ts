import express from "express";
const userRoutes = express.Router();

userRoutes.post("/", function (request, response) {
  console.log(request.body);
});

userRoutes.get("/", function (request, response) {
  response.json(request.body);
});

// Get a user by ID
userRoutes.get("/:id", function (request, response) {
  response.json(`User ID: ${request.params.id}`);
});

export default userRoutes;
