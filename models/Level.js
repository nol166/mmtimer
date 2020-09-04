module.exports = (sequelize, DataTypes) => {
    const Level = sequelize.define('Level', {
        difficulty: DataTypes.STRING,
        complete: DataTypes.BOOLEAN,
        duration: DataTypes.INTEGER
    })
    return Level
}
