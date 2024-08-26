const router = require("express").Router({ mergeParams: true });
const comics = require("./comics");

router.use("/comics", comics);

module.exports = router;
