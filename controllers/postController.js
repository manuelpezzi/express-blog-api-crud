const arrayPosts = require('../data/posts.js');


function index(req, res) {
    res.json(arrayPosts)
}
function show(req, res) {
    const id = parseInt(req.params.id)

    const post = arrayPosts.find(post => post.id === id);

    res.status(404)


    if (!post) {
        return res.json({
            error: "Not Found",
            message: "post non trovato"
        });
    }
    res.json(post)
}
function store(req, res) {
    const newId = arrayPosts[arrayPosts.length - 1].id + 1;

    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags

    }
    arrayPosts.push(newPost)
    console.log(arrayPosts);

    res.status(201);
    res.json(newPost);
}
function update(req, res) {
    const id = parseInt(req.params.id);

    const post = arrayPosts.find(post => post.id === id);

    if (!post) {
        res.status(404);

        return res.json({
            error: "Not Found",
            message: "Post non torvato"
        })
    }


    post.title = req.body.title;
    post.image = req.body.image;
    post.content = req.body.content;


    console.log(arrayPosts)


    res.json(post);

}
function patch(req, res) {
    const id = parseInt(req.params.id)

    const post = arrayPosts.find(post => post.id === id);

    if (!post) {
        res.status(404);


        return res.json({

            error: "Not Found",
            message: "post non trovato"
        })
    }

    for (let key in req.body) {
        post[key] = req.body[key];

    }

    console.log(arrayPosts)
    res.json(post)


}
function destroy(req, res) {

    const id = parseInt(req.params.id)

    const post = arrayPosts.find(post => post.id === id);

    res.status(404)


    if (!post) {
        return res.json({
            error: "Not Found",
            message: "post non trovato"
        });
    }
    arreyPosts.splice(arrayPosts.indexOf(post), 1)

    console.log(post)

    res.sendStatus(204)

};
module.exports = { index, show, store, update, patch, destroy }