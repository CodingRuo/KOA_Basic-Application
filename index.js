const Koa = require("koa");
const initDB = require("./db");
const router = require("./middleware/router");

// Initialize Database
initDB();

// Create new Koa Instance
const app = new Koa();

// Router
app.use(router.routes());

// Start Server
const port = process.env.PORT || 3003;
app.listen(port, () =>
  console.log(`Server running on http://localhist:${port}`)
);
