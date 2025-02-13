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
    constnewId = arreyPosts[arreyPosts.length - 1].id + 1;

    const newPost = {
        id: newId,
        name: req.body.name,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags

    }
    arreyPosts.push(newPost)
    console.log(arreyPosts);

    res.status(201);
    res.json(newPost);
}
function update(req, res) {
    const id = parseInt(req.params.id);

    const post = arreyPosts.find(post => post.id === id);

    if (!post) {
        res.status(404);

        return res.json({
            error: "Not Found",
            message: "Post non torvato"
        })
    }


    post.name = req.body.name;
    post.image = req.body.image;
    post.content = req.body.ingredients;


    console.log(arreyPosts)


    res.json(post);

}
function patch(req, res) {
    const id = parseInt(req.params.id)

    const post = arreyPosts.find(post => post.id === id);

    if (!post) {
        res.status(404);


        return res.json({

            erorr: "Not Found",
            message: "Pizza non trovata"
        })
    }

    for (let key in req.body) {
        post[key] = req.body[key];

    }

    console.log(arreyPosts)
    res.json(post)


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