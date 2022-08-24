const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const loginRouter = function (collection) {

    const router = express.Router();
// gets all users
    router.get('/', (req, res) => {
        collection
         .find()
         .toArray()
         .then((docs) => res.json(docs))
         .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
         });
    })

// finds who is logged in
    router.get('/:logged_in', (req, res) => {
        const logged = req.params.logged_in;
        collection
          .findOne({ logged_in: logged })
          .then((doc) => res.json(doc))
          .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
          });
      });

// updates every user to logged out 
        router.put('/out', (req, res) => {
            collection
            .updateMany({}, {$set: {logged_in: "false"}})
            .then(result => {
              res.json(result);
            })
            .catch((err) => {
              res.status(500);
              res.json({ status: 500, error: err });
            });
          });
    

// returns user with a name and password that matches
    router.get('/:name/:password', (req, res) => {
        const name = req.params.name;
        const password = req.params.password
        console.log(name)
        console.log(password)
        collection
          .findOne({ name: name }, {password: {password}})
          .then((doc) => res.json(doc))
          .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
          });
      });

// set active user to logged in = true
      router.put('/:id', (req, res) => {
        const id = req.params.id;
        collection
        .updateOne({ _id: ObjectID(id) }, { $set: {logged_in: "true"} })
        .then(result => {
          res.json(result);
        })
        .catch((err) => {
          res.status(500);
          res.json({ status: 500, error: err });
        });
      });

// save new content to users

// saves quiz

router.put('/save/saved_quiz/:id', (req, res) => {
  const id = req.params.id;
  collection
  .updateMany({ _id: ObjectID(id)}, { $set: { saved_quiz: req.body}})
  .then(result => {
    res.json(result);
  })
  .catch((err) => {
    res.status(500);
    res.json({ status: 500, error: err });
  });
});

// saves favs

router.put('/save/favourites/:id', (req, res) => {
  const id = req.params.id;
  collection
  .updateMany({ _id: ObjectID(id)}, { $set: { favourites: req.body}})
  .then(result => {
    res.json(result);
  })
  .catch((err) => {
    res.status(500);
    res.json({ status: 500, error: err });
  });
});

router.post("/", (req, res) => {
  const newItem = req.body;
  collection.insertOne(newItem)
  .then((result) => {
      res.json(result.ops[0]);
  })
  .catch((err) => {
      console.error(err);
      res.status(500);
      res.json({ status: 500, error: err})
  })

})
    return router

    }
module.exports = loginRouter