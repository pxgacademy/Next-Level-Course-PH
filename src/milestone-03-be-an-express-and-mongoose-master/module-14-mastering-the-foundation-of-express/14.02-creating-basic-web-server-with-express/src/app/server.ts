import app from "./app";

const port = process.env.PORT || 5000;

let server;

(async () => {
  server = app.listen(port, () => {
    console.log(`I am listening from ${port}`);
  });
})();
