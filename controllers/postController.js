const arreyPosts = require('../data/posts.js');

function index(req, res) {
    res.json(arreyPosts)
}
function show(req, res) {
    const id = parseInt(req.params.id)

    const post = arreyPosts.find(post => post.id === id);

    res.status(404)


    if (!post) {
        return res.json({
            erorr: "Not Found",
            message: "post non trovato"
        });
    }
    res.json(post)
}
function store(req, res) {
    res.send('Creazione nuova pizza');
}
function update(req, res) {
    res.send('Modifica integrale della pizza ' + req.params.id);
}
function patch(req, res) {
    res.send('Modifica parziale della pizza ' + req.params.id);
}
function destroy(req, res) {

    const id = parseInt(req.params.id)

    const post = arreyPosts.find(post => post.id === id);

    res.status(404)


    if (!post) {
        return res.json({
            erorr: "Not Found",
            message: "post non trovato"
        });
    }
    arreyPosts.splice(arreyPosts.indexOf(post), 1)

    console.log(post)

    res.sendStatus(204)

};
module.exports = { index, show, store, update, patch, destroy }