const router = require('express').Router();

const {
    createThought,
    getAllThought,
    getThoughtById,
    deleteThought,
} = require('../../controllers/thought-controller');

router
    .route('/')
    .get(getAllThought)

router
    .route('/:userId')
    .post(createThought)

router
    .route('/:userId/:thoughtId')
    .delete(deleteThought)

router
    .route('/:thoughtId')
    .get(getThoughtById)
    

module.exports = router;
