// Requiring our models
const db = require('../models')

// Routes
module.exports = app => {
    // GET route for getting all of the runs
    app.get('/api/runs', (req, res) => {
        // findAll returns all entries for a table when used with no options
        db.Run.findAll({}).then(dbRun => res.json(dbRun))
    })

    // POST route for saving a new Run
    app.post('/api/run', (req, res) => {
        db.Run.create({
            levels_completed: req.body.completed,
            levels_per_hour: req.body.perHour,
            complete: req.body.isComplete,
        }).then(dbRun => res.json(dbRun))
    })

    // DELETE route for deleting Run using the ID (req.params.id)
    app.delete('/api/run/:id', (req, res) => {
        // We just have to specify which Run we want to destroy with "where"
        db.Run.destroy({
            where: {
                id: req.params.id,
            },
        }).then(dbRun => res.json(dbRun))
    })

    // PUT route for updating Run. We can get the updated Run data from req.body
    app.put('/api/run', (req, res) => {
        db.Run.update(
            {
                levels_completed: req.body.completed,
                levels_per_hour: req.body.perHour,
                complete: req.body.isComplete,
            },
            {
                where: {
                    id: req.body.id,
                },
            }
        ).then(dbRun => res.json(dbRun))
    })
    app.post('/api/level', (req, res) => {
        db.Level.create({
            difficulty: req.body.difficulty,
            complete: req.body.complete,
        }).then(dbLevel => res.json(dbLevel))
    })
    app.get('/api/level', (req, res) => {
        db.Level.findAll({}).then(dbLevel => res.json(dbLevel))
    })
}

