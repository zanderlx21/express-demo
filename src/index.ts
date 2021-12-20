import express from "express";
import routes from "./routes/app-routes";
import languageRoutes from "./routes/languageRoutes";
import userRoutes from "./routes/user-routes";
import searchRoutes from "./routes/search-routes";

const app = express();

const port = 3000;

app.use(express.json());
app.use("/", routes);
app.use("/languages/", languageRoutes);
app.use("/users/", userRoutes);
app.use("/", searchRoutes);

// Directly set routes
app.get("/students", function (request, response) {
  response.json("Getting all students...");
});

app.post("/students", function (request, response) {
  response.json("Adding a student");
});

app.put("/students", function (request, response) {
  response.json("Updating a student");
});

app.delete("/students", function (request, response) {
  response.json("Deleting a student");
});

app.listen(port, function () {
  console.log(`listening on ${port}`);
});
