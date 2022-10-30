const monoogse = require("mongoose");

module.exports = () => {
  monoogse.connect("mongodb://localhost:27017/koa-blog", {
    useNewUrlParser: true,
  });

  const db = monoogse.connection;
  db.on("error", (error) => {
    throw new Error(`error connecting to db: ${error}`);
  });
  db.once("open", () => console.log("database connected"));
};
