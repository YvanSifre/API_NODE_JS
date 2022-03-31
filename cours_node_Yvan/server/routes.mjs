import express from "express";
const router = express.Router();

import { add, getAll, getByName, remove } from "./products.mjs";

// add
router.post("/products", (req, res) => {
  const { name, quantity } = req.body;
  res.send(add(name, quantity));
});

// getAll
router.get("/products", (_, res) => {
  res.send(JSON.stringify(getAll()));
});

// getByName
router.get("/products/:name", (req, res) => {
  const name = req.params.name;

  const pdt = getByName(name);
  res.send(pdt ? JSON.stringify(pdt) : `Produit "${name}" introuvable`);
});

// delete
router.delete("/products/:name", (req, res) => {
  const produit = req.params.name;
  const quantity = req.query.quantity;

  res.send(remove(produit, quantity));
});

export default router;
