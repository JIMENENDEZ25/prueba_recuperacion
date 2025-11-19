module.exports = (app) => {
    const products = require("../controllers/product.controller.js");
    var router = require("express").Router();


    router.post("/", products.create);
    router.get("/", products.findAll);
    router.get("/:id", products.findOne);
    router.get("/low-stock", products.findLowStock);
    router.get("/category/:category", products.findByCategory);
    router.put("/:id", products.update);
    router.delete("/:id", products.delete);

    app.use("/products", router);
            };