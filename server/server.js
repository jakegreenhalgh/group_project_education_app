const dotenv = require('dotenv');
const express = require('express');
const app = express();
const cors = require('cors');

const databaseURL = 'mongodb://localhost:27017';

app.use(cors());
app.use(express.json());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');
const loginRouter = require('./helpers/login_router.js');
const worldRouter = require('./helpers/ourWorld_router');


MongoClient.connect(databaseURL, { useUnifiedTopology: true })
 .then((client) => {
    const db = client.db('website');
    const userCollection = db.collection('users');
    const categoriesCollection = db.collection('categories');
    const userRouter = loginRouter(userCollection);
    const categoriesRouter = createRouter(categoriesCollection);
    const ourWorldCollection = db.collection('ourWorld');
    const ourWorldRouter = worldRouter(ourWorldCollection);
    app.use('/api/categories', categoriesRouter);
    app.use('/api/users', userRouter)
    app.use('api/ourWorld', ourWorldRouter);
 })
 .catch(console.err);

 app.listen(9000, function () {
    console.log(`Listening on port ${ this.address().port }`);
  });