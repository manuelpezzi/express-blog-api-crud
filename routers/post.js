const express = require('express');

const router = express.Router();
const arreyPost = require("../data/posts.js")
//index
router.get('/', (req, res) => {

    res.json(arreyPost)


});
//show
router.get('/:id', (req, res) => {

    const id = parseInt(req.params.id)

    const post = arreyPost.find(post => post.id === id);

    res.status(404)


    if (!post) {
        return res.json({
            erorr: "Not Found",
            message: "post non trovato"
        });
    }
    res.json(post)


});
//store
router.post('/', (req, res) => {

    res.send('creazione nuovo post');


});
//upadate
router.put('/:id', (req, res) => {
    res.send('modifica integrale del post' + req.params.id);
});
//patch
router.patch('/:id', (req, res) => {
    res.send('modifica parziale del post' + req.params.id);
});
//delete
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id)

    const post = arreyPost.find(post => post.id === id);

    res.status(404)


    if (!post) {
        return res.json({
            erorr: "Not Found",
            message: "post non trovato"
        });
    }
    arreypost.splice(arreypost.indexOf(post), 1)

    res.sendStatus(204)

});


module.exports = router;