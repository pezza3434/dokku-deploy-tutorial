module.exports = function(sequelize, DataTypes){
    var Users = sequelize.define('users', {
            id: {type: DataTypes.INTEGER, primaryKey: true},
            name: DataTypes.STRING
        },
        {
            timestamps: false,
        });

    return Users;
};