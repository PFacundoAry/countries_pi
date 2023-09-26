const { getCountries, getCountryByID, getCountryByName } = require("../controllers/countriesController.js");

const getCountriesHandler = async (req,res) => {
    try {
        const countriesData = await getCountries();
        return res.status(200).json(countriesData);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getCountriesByIDHandler = async (req,res) => {
    try {
        const {id} = req.params;
        const detailCountry = await getCountryByID(id);
        return res.status(200).json(detailCountry);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getCountryByNameHandler = async (req, res) => {
    try {
        const {name} = req.query;
        const nameCountry = await getCountryByName(name);
        return res.status(200).json(nameCountry);
    } catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = {
    getCountriesHandler,
    getCountriesByIDHandler,
    getCountryByNameHandler
};