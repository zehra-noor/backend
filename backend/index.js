import express from "express";
const app = express();

app.use("/", (req, res) => {
  res.json({ message: "hello world!" });
});

const port = 9000;
app.listen(port, () => console.log(`starting server on port : ${port}`));
