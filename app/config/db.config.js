module.exports = {
    HOST: "ep-shy-dawn-a4hgvkfa-pooler.us-east-1.aws.neon.tech",
    USER: "neondb_owner",
    PASSWORD: "npg_iG26aeOUxCjE",
    DB: "neondb",
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};