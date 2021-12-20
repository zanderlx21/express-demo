import express from "express";
import routes from "./app-routes";

const languageRoutes = express.Router();

languageRoutes.get("/", function (request, response) {
  response.json("getting all Languages");
});

languageRoutes.get("/random", function (request, response) {
  response.json("Random Languages");
});

export default languageRoutes;
