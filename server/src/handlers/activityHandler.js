const { createActivities, getActivities } = require("../controllers/activityControllers.js");

const createActivitiesHandler = async (req,res) => {
    try {
        const {
            id,
            name,
            difficulty,
            duration,
            season
        } = req.body;
        const response = await createActivities(
            id,
            name,
            difficulty,
            duration,
            season,
        );
        return res.status(201).json(response);
    } catch (error) {
        console.log("createActivities error", error);
        return res.status(404).json({error: error.message});
    }
}

const getActivitiesHandler = async (req,res) => {
    try {
        const response = await getActivities();
        return res.status(200).json(response)
    } catch (error) {
        return res.status(404).json({error: error.message});
    }
}

module.exports = {
    createActivitiesHandler,
    getActivitiesHandler
}