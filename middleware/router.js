const KoaRouter = require("koa-router");

const router = new KoaRouter();
router.get("/", (ctx) => (ctx.body = "Welcome to the Koa Blog!!"));

module.exports = router;
