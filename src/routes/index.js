const express = require('express');
const movieRouter = require('./movie.router');
const genreRouter = require('./genre.router');
const actorRouter = require('./actor.router');
const directorRouter = require('./director.router');
const router = express.Router();

// colocar las rutas aquí
router.use(movieRouter);
router.use(genreRouter);
router.use(actorRouter);
router.use(directorRouter);

module.exports = router;