module.exports = (sequelize, DataTypes) => {
    const Run = sequelize.define('Run', {
        levels_completed: DataTypes.INTEGER,
        levels_per_hour: DataTypes.INTEGER,
        complete: DataTypes.BOOLEAN,
    })
    return Run
}
