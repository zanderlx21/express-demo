import express, { response } from 'express';
const routes = express.Router();

routes.get("/", function(request, response) {
response.json("Home");
});

routes.get("/node", function(request, response) {
    response.json("Node");
})

export default routes;