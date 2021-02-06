import express from "express";

const app = express();

app.use('/', (req, res) => {
  res.send('OK');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`start: http:localhost:3000`);
});
