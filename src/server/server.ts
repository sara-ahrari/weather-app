import "dotenv/config"
import express from "express"
import apiRouter from "./routes"
import swaggerUi from "swagger-ui-express"
import swaggerDocument from "../docs/swagger.json"

const app = express()

app.use(apiRouter)
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

const port = process.env.PORT || 80
app.listen(port, () => console.log(`Server listening on port: ${port}`))
