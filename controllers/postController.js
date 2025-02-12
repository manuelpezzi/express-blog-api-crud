const arreyPosts = require('../data/posts.js');

function index(req, res) {
    res.json(arreyPosts)
}
function show(req, res) {
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
}
