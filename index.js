import express from 'express';

const app = express();
const PORT = 8080;
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Welcome to node azure ccid");
})

app.get('/about', (req, res) => {
    res.json({
        message: "This is simple node app",
        developer: "A random Crazy person"
    })
})
// allowing server to decide IP address automatically
app.listen(PORT, '0.0.0.0',() => {
    console.log(Server running on Port: ${PORT});
})