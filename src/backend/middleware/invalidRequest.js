const handleInvalidJSON = (err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    console.error(err);
    return res.sendStatus(400); 
  }

  next();
};

module.exports = { handleInvalidJSON };
