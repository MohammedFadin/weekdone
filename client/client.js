const express = require("express")
const bodyParser = require('body-parser')
// const dotenv = require('dotenv').config()
const axios = require("axios")
const health = require("@cloudnative/health-connect")
const backend_endpoint = process.env.BACKEND_URL+':'+process.env.BACKEND_PORT

let healthcheck = new health.HealthChecker()

const app = express()
const port = process.env.CLIENT_PORT

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'))

app.use('/live', health.LivenessEndpoint(healthcheck))
app.use('/ready', health.ReadinessEndpoint(healthcheck))

app.post('/api/entries', (req, res) => {
      axios.post(`http://${backend_endpoint}/api/entries`, req.body).then((response) => {
          console.log("all good")
      }, (error) => {
          console.log(error)
      })
})

app.get('/api/entries', (req, res) => {
    axios.get(`http://${backend_endpoint}/api/entries`).then((response) => {
        res.send(response.data)
        console.log(response.data)
    }, (error) => {
        res.json({ error: 'Ops... server seems to be offline' })
    })
})

app.listen(port, () => {
    console.log(`WeekDone Client App Listening on port ${port}`)
})