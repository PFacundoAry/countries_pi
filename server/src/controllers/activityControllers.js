const { Activity } = require("../db");

const createActivities = async (id,
    name,
    difficulty,
    duration,
    season) => {
    const newActivity = await Activity.create({
        id,
        name,
        difficulty,
        duration,
        season
    });
    return newActivity;
}

const getActivities = async () => {
    const activitiesDB = await Activity.findAll();
    return activitiesDB;
}

module.exports = {
    createActivities,
    getActivities
}