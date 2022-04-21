const express = require("express");
var cors = require("cors");
const res = require("express/lib/response");
const app = express();
const port = process.env.PORT || 5000;

//middleware
app.use(cors());
app.use(express.json()); // middle ware body parser bodole, sortcut system

//route ba api bole
// app.get("/", (req, res) => {
//   res.send("Look mama. Bangladesh is a land of rivers. !!!");
// });

// app.get("/fruits/banana", (req, res) => {
//   const fruits = {
//     name: "komola",
//     price: 10,
//     quantity: 50,
//   };
//   res.send(fruits);
// });

const users = [
  { id: 1, name: "sabana", email: "sabana@gmail.com", phone: "017888888" },
  { id: 2, name: "Shabnoor", email: "Shabnoor@gmail.com", phone: "017888888" },
  {
    id: 3,
    name: "Suchorita",
    email: "Suchorita@gmail.com",
    phone: "017888888",
  },
  { id: 4, name: "Suchanda", email: "Suchanda@gmail.com", phone: "017888888" },
  { id: 5, name: "Srabonti", email: "Srabonti@gmail.com", phone: "017888888" },
  { id: 6, name: "Sabila", email: "Sabila@gmail.com", phone: "017888888" },
  { id: 7, name: "Sohana", email: "Sohana@gmail.com", phone: "017888888" },
];

app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/users/:id", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.send(user);
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "apple", "oranges"]);
});

app.get("/fruits/mango/fazli", (req, res) => {
  res.send("sour sour fazli flavour.");
});

//server site theke data patano
app.post("/users", (req, res) => {
  console.log("request", req.body); // request holo data asa
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user); // response holo data patano
});

app.get("/users", (req, res) => {
  res.send(users);
});

// const users = ["komola", "apple", "mango", "banana"];

// //dynamic user id
// app.get("/users/:id", (req, res) => {
//   const id = req.params.id;
//   const name = users[id];
//   res.send({ id, name });
// });

app.listen(port, () => {
  console.log("Listening to port.", port);
});
