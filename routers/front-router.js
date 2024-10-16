const express = require(`express`);
const router = express.Router();

const {getIndex, getProducts, getServices}= require(`../controllers/front-controller`)


router.get(`/`, getIndex)
router.get(`/services`, getServices)
router.get(`/products`, getProducts)



module.exports = router;