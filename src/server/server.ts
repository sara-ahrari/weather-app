import "dotenv/config"
import express from "express"
import apiRouter from "./routes"

const app = express()
app.use(apiRouter)

const port = process.env.PORT || 80
app.listen(port, () => console.log(`Server listening on port: ${port}`))
