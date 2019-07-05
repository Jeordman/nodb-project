require("dotenv").config({ path: __dirname + "/../../.env" });
const express = require("express");
const sc = require("./controllers/serverController");
const { SERVER_PORT } = process.env;

const app = express();

app.use(express.json());

app.get("/api/list", sc.fullList);
app.post("/api/list", sc.addListItem);
app.delete("/api/list/:id" , sc.deleteItem)
app.put("/api/list/pro/:id", sc.addPro)
app.put("/api/list/con/:id", sc.addCon)


app.listen(SERVER_PORT, () => {
    console.log(`Server initialized ${SERVER_PORT}`)
})