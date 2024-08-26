const router = require("express").Router({ mergeParams: true });
const { checkToken } = require("./middleware");
const { isNumber, isString } = require("./utils");
const db = require("../db");

router.post("/", checkToken, async (req, res) => {

  const { id, src, date } = req.body;

  if (
    !isNumber(id) ||
    !isString(src) ||
    !isString(date)
  ) {
    return res.status(400).json({
      error: "Неверный формат"
    });
  };

  await db.insertNewComics(id, src, date);

  return res.status(200).json({
    message: "OK"
  });

});

router.delete("/", checkToken, async (req, res) => {

  const id = Number(req.query["id"]);

  if (!Number.isNaN(id)) {
    return res.status(400).json({
      error: "Неверный формат"
    });
  };

  await db.deleteComics(id);

  return res.status(200).json({
    message: "OK"
  });

});

router.get("/last", async (req, res) => {

  const offset = Number(req.query["offset"]);

  return res.status(200).json({
    message: "OK",
    items: await db.getLastComics(!Number.isNaN(offset) ? offset : 0)
  });

});

router.get("/", async (req, res) => {

  const date = Number(req.query["date"]);
  if (!date) {
    return res.status(400).json({
      error: "Неверный формат"
    });
  };

  return res.status(200).json({
    message: "OK",
    item: await db.getComics(date)
  });

});

module.exports = router;
