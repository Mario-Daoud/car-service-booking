module.exports = function (req, res, next) {
  if (!req.user.hasPermission) return res.status(403).send("Acces Denied");
  next();
};
