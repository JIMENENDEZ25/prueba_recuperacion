module.exports = (sequelize, Sequelize) => {

    const Product = sequelize.define("product", {
        id_product: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        category: {
            type: Sequelize.STRING,
        },
        price: {
            type: Sequelize.DECIMAL(10, 2),
        },
        stock: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
        },
        income_date: {
            type: Sequelize.DATE,
            defaultValue: Sequelize.NOW,
        },
    });
    return Product;
};