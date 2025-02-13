const express = require('express');
const app = express();
const port = 3000;
const postRouter = require('./routers/postRouters.js')

app.use(express.static('public'));

app.use(express.json());

//homepage
app.get('/', (req, res) => {
    res.send("Server del mio blog")

});

app.use('/posts', postRouter)

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
});