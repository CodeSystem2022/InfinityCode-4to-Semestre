
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

let products = [
  {
    id: 1,
    name: "Autos 1",
    price: 380,
    image: "/img/01.jpg",
    stock: 5,
  },
  {
    id: 2,
    name: "Autos 2",
    price: 300,
    image: "img/02.jpg",
    stock: 5,
  },
  {
    id: 3,
    name: "Autos 3",
    price: 400,
    image: "img/03.jpg",
    stock: 5,
  },
  {
    id: 4,
    name: "Autos 4",
    price: 410,
    image: "img/04.jpg",
    stock: 5,
  },
  {
    id: 5,
    name: "Autos 5",
    price: 360,
    image: "img/05.jpg",
    stock: 5,
  },
  {
    id: 6,
    name: "Autos 6",
    price: 500,
    image: "/img/06.jpg",
    stock: 5,
  },
];

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.post("/api/pay", (req, res) => {
  const ids = req.body;
  const productsCopy = products.map((p) => ({ ...p }));
  ids.forEach((id) => {
    const product = productsCopy.find((p) => p.id === id);
    if (product.stock > 0) {
      product.stock--;
    } else {
      throw "Sin stock";
    }
  });
  products = productsCopy;
  res.send(products);
});


app.use("/", express.static("frontend"));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
