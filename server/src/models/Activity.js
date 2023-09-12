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
            type: DataTypes.INTEGER,
            validate: {
                isBetween1And5: function(value) {
                    if (value < 1 || value > 5) {
                      throw new Error('El número debe estar entre 1 y 5.');
                    }
                  }
            },
            allowNull: false
        },
        season: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
};