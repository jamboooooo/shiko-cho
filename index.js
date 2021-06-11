const express = require("express")
const app = express()
const hbs = require('express-handlebars')

const cors = require('cors')

app.set("view engine", "handlebars");
app.engine("handlebars", hbs());
app.use(cors())