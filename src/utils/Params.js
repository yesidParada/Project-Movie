module.exports = {
  path:
    process.env.NODE_ENV === "production"
      ? "https://api.themoviedb.org/3/"
      : "https://api.themoviedb.org/3/"
};
