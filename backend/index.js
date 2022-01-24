import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"
import RestaurantsDAO from "./dao/restaurantsDAO.js"

// Configure Dotenv - Load in Environment Variables
dotenv.config()

// Get Mongo Client
const MongoClient = mongodb.MongoClient

// Get Port Number
const port = process.env.PORT || 8000

// Attempt to Connect to Database
MongoClient.connect(
    process.env.RESTREVIEWS_DB_URI,
    {
        maxPoolSize: 50,
        wtimeoutMS: 2500,
        useNewUrlParser: true
    }
)
.catch(err => {
    console.error(err.stack)
    process.exit(1)
})
.then(async client => {
    await RestaurantsDAO.injectDB(client)
    app.listen(port, () => {
        console.log(`Listening on Port ${port}!`)
    })
})