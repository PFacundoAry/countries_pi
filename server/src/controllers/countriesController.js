const { Country, Activity } = require("../db");
const axios = require("axios")

const countries = async () => {    // acá paso todos los paises a la bdd
    const api = await axios('http://localhost:5000/countries') 
    const apiData = api.data?.map( async element => {
        const continents = element.continents.join(', ');
        let capital = element.capital
        if (capital !== undefined) {
            capital = capital.join(", ");
        } else {
            'Its capital is not defined'
        }
        

        await Country.findOrCreate({ //await, porque no se sabe cuento tarda a la respuesta entonces tengo que avisar
            where:{
                id: element.cca3,
                name: element.name['common'],
                flags: element.flags['png'],
                continents: continents,
                capital: capital,
                subregion: element.subregion !== undefined ? element.subregion : 'Its subregion is not defined',
                area: element.area,
                population: element.population,
            },
            row: false
        })
        await Promise.all(apiData)
        return apiData
    })
    
}

const getCountries = async () => {
    const dataCountries = await countries();
    const getCountries = await Country.findAll({ //llamo los componentes que tengo en mi base de datos 
        attributes: ['id', 'name', 'flags', 'continents', 'capital', 'subregion', 'area', 'population'],
        include: {
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"],
            through: {
                attributes: [],
            }
        }
    })
    return getCountries;
}

const getCountryByID = async (id) => {
    const dataCountries = await countries();
    const minmayID = id.toUpperCase();
    const detailCountry = await Country.findOne({
        where: {
            id: minmayID
        },
        include: {
            model: Activity,
            attributes: ["name", "difficulty", "duration", "season"],
            through: {
                attributes: [],
            }
        }
    })
    return detailCountry;
}

const getCountryByName = async (name) => {
    const dataCountries = await countries();
    const minmayName = name.toLowerCase();
    console.log('Nombre del país en minúsculas:', minmayName);
    const countryData = await Country.findAll({
        where: 
            { name: minmayName },
        raw: true
    })
    console.log('Resultados de la consulta a la base de datos:', countryData);
    return countryData.length > 0 ? countryData : 'The country was not found'
}

module.exports = {
    getCountries,
    getCountryByID,
    getCountryByName
}