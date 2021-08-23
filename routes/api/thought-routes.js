const router = require('express').Router();

const {
    createThought,
    getAllThought,
    getThoughtById,
    deleteThought,
    updateThought,
    addReaction,
    removeReaction
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
    .put(updateThought)
    
router
    .route('/:thoughtId/reactions')
    .post(addReaction)


router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeReaction)

module.exports = router;
