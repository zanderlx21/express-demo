import express from "express";
const searchRoutes = express.Router();

searchRoutes.get("/search", function(request, response){
response.json(`Keyword: ${request.query.keyword} || Page: ${request.query.page}`);
});

export default searchRoutes;