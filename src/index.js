const express = require("express");
// const mysql = require("mysql2");

const usersRoutes = require("./routes/users.js");
const middlewareLogRequest = require("./middleware/logs.js");

const app = express();

app.use(middlewareLogRequest);
app.use(express.json());

app.use(express.static('public'))

app.use("/users", usersRoutes);

// app.use('/', (req, res) => {
//   console.log("Berhasil terhubung");
//   res.send("Selamat Datang");
// })

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server berhasil di running di port http://localhost:${PORT}`);
});

