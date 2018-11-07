const express = require("express");

const routes = express.Router();

const TweetController = require('./controllers/TweetControler');
const LikeController = require('./controllers/LikeControler');

// routes.get('/', (req, res) => {
//     return res.send("Olá mundo.")
// });

routes.get('/tweets', TweetController.index);
routes.post('/tweets', TweetController.store);

routes.post('/likes/:id', LikeController.store)

module.exports = routes;