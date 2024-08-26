const rightKey = process.env.ADMIN_KEY;

const checkToken = (req, res, next) => {

  const userKey = req.headers["x-admin-key"];
  
  if (userKey === rightKey) return next();

  return res.status(400).json({
    error: "Неверный токен"
  });

};

module.exports = { checkToken };
