const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define("Activity", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty: {
            type: DataTypes.ENUM('1','2','3','4','5'), // valido solo numeros del 1 al 5
            allowNull: false
        },
        duration: {
            type: DataTypes.STRING,
            allowNull: false
        },
        season: {
            type: DataTypes.ENUM('Summer','Autumn','Winter','Spring'), 
            allowNull: false
        }
    } , {
        timestamps : false
    });
};