const jsonserver = require("json-server")
const server = jsonserver.create()
const router = jsonserver.router("db.json")
const middlewares = jsonserver.defaults()

server.use(middlewares)
server.use("",router)  
server.listen(process.env.PORT || 5000, () => {
    console.log("JSON is running")
})