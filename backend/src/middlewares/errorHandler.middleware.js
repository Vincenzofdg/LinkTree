const errors = {
  ValidationError: 400,
};

module.exports = (err, _req, res, _next) => {
  const status = errors[err.name];
  if (!status) return res.status(500);
  res.status(status).json({ msg: err.message });
};
