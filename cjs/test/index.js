"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("../src/api");
const api = new api_1.AveApi({
    user: "demo-product",
    password: "Prueba2023",
});
const run = async () => {
    await api.onLoad();
    console.log(JSON.stringify(api.user, null, 2));
};
run();
