const express = require('express');
const cors = require('cors');
const { uuid } = require('uuidv4');

const app = express();

app.use(cors());

app.use(express.json());

const posts = [];
const comments = [];

app.get('/posts', (request, response) => {

    const postValues = [];

    posts.map(value => {
        postValues.push({
            id: value.id,
            message: value.message
        });
    });

    return response.json(postValues);
});

app.get('/posts/:id', (request, response) => {
    const { id } = request.params;

    const postIndex = posts.findIndex(post => post.id === id);

    if (postIndex < 0) {
        return response.status(404).json({ error: "Not Found" });
    }

    return response.json({
        id: posts[postIndex].id,
        message: posts[postIndex].message
    });
});

app.post('/posts', (request, response) => {
    const { message, comment } = request.body;

    const post = { id: uuid(), message, comment: [] };

    posts.push(post);

    return response.json({
        id: post.id,
        message: post.message
    });
});

app.get('/posts/:id/comments', (request, response) => {
    const { id } = request.params;
    const { postId, comment } = request.body;
    
    const postIndex = posts.findIndex(post => post.id === id);

    if (postIndex < 0 || posts[postIndex].comment == "") {
        return response.status(404).json({ error: "Not Found" });
    }

    return response.json(posts[postIndex].comment);

});

app.post('/posts/:id/comments', (request, response) => {
    const { id } = request.params;
    const { postId, comment } = request.body;
    
    const postIndex = posts.findIndex(post => post.id === id);

    if (postIndex < 0) {
        return response.status(404).json({ error: "Not Found" });
    }

    const postComment = {
        id: uuid(),
        postId: posts[postIndex].id,
        comment: comment
    };

    posts[postIndex].comment.push(postComment);


    return response.json({
        id: postComment.id,
        comment: postComment.comment
    });
});

app.listen(3333, () => {
    console.log('Running');
})