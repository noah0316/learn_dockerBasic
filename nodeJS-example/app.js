const Koa = require("koa");
const app = new Koa();

app.use((ctx) => {
  ctx.body = "Hello Koa with docker";
});

app.listen(3000, "0.0.0.0", () => {
  console.log("server is listening to port 3000");
});
