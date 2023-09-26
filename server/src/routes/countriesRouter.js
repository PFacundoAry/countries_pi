const { Router } = require("express");
const { getCountriesHandler, getCountriesByIDHandler, getCountryByNameHandler} = require("../handlers/countriesHandler");
const countriesRouter = Router();

countriesRouter.get("/", getCountriesHandler);
countriesRouter.get("/:id", getCountriesByIDHandler);
countriesRouter.get("/$:name", getCountryByNameHandler);

module.exports = countriesRouter;

