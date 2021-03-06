const db = require("../models");

// Defining methods for the userController
module.exports = {
    findAll: function (req, res) {
        db.User
            .find()
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByEmail: function (req, res) {
        console.log(`findByEmail: ${JSON.stringify(req.query)}`);
        db.User
            .findOne({ email: req.query.email })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.User
            .create({ email: req.query.email })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findOrCreateUser: function (req, res) {
        db.User
            .findOne({ email: req.query.email })
            .then(dbModel => {
                if (dbModel) { res.json(dbModel) }
                else {
                    db.User
                        .create({ email: req.query.email })
                        .then(dbModel => res.json(dbModel))
                        .catch(err => res.status(422).json(err));
                }
            });
    },
    addGiftToUser: function (req, res) {
        db.User
            .findOne({ email: req.query.email })
            .then(dbModel => {
                console.log("found user");
                const aGift = {
                    ...req.body
                }
                if (dbModel) {
                    console.log(dbModel)
                    dbModel.giftCollection.push(aGift);
                    console.log(dbModel)
                    dbModel.save().then(saved_result => {
                        console.log("Saved!")
                        res.json(dbModel)
                    })
                }
                else {
                    console.log("Creating")
                    db.User
                        .create({ email: req.query.email })
                        .then(dbModel => {
                            dbModel.giftCollection.push(aGift);
                            db.User.update(dbModel);
                            res.json(dbModel)
                        })
                        .catch(err => res.status(422).json(err));
                }
            });
    },
    update: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
