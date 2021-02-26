const app = require('./server/index');

let PORT = 3000;
app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
