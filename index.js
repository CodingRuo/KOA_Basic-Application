const Koa = require("koa");
const initDB = require("./db");
const router = require("./middleware/router");
const views = require("koa-views");
const session = require("koa-session");
const bodyParser = require("koa-bodyparser");
const methodOverride = require("./middleware/method-override");

// Initialize Database
initDB();

// Create new Koa Instance
const app = new Koa();

app.keys = ["secret key"];

// Views
app.use(views(`${__dirname}/views`, { extension: "ejs" }));

// Session
app.use(session(app));
app.use(bodyParser());
app.use(methodOverride());

// Router
app.use(router.routes());

// Start Server
const port = process.env.PORT || 3003;
app.listen(port, () =>
  console.log(`Server running on http://localhist:${port}`)
);
