import { AveApi } from "../src/api";

const api = new AveApi({
        user: "demo-product",
        password: "Prueba2023",
    });

const run = async () => {
    await api.onLoad();
    console.log(JSON.stringify(api.user, null, 2));
};
run();
