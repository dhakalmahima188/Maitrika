const express = require('express');

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const recordRoutes = express.Router();
const dbo = require('../db/conn');

recordRoutes.route("/").get(async function (req, res) {
    res.send("hello")
})

recordRoutes.route("/data").post(async function (req, res) {
    const dbConnect = dbo.getDb();
    const matchDocument = {
        name: req.body.name,
        location: req.body.location,
        age: req.body.age,
        status: req.body.status,
        created_at: new Date(),
    };
    console.log(matchDocument)

    dbConnect
        .collection('matches')
        .insertOne(matchDocument, function (err, result) {
            if (err) {
                res.status(400).send('Error inserting matches!');
            } else {
                console.log(`Added a new match with id ${result.insertedId}`);
                res.status(200).send({ message: `Added Patient ${req.body.name}` });
            }
        });
})

recordRoutes.route("/data").get(async function (req, res) {
    const dbConnect = dbo.getDb();

    dbConnect
        .collection('matches')
        .find({})
        .limit(50)
        .toArray(function (err, result) {
            if (err) {
                res.status(400).send('Error fetching listings!');
            } else {
                res.json({patients: result});
            }
        });
})

module.exports = recordRoutes;