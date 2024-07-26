import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static("./client"));

app.post("/api/data", (req, res) => {
  const { message } = req.body || {};
  console.log("[/api/data] message:", message);
  res.send(message);
});

app.get("/api/time", (req, res) => {
  const currentTime = new Date().toString();
  console.log("[/api/time] currentTime:", currentTime);
  res.send(currentTime);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
