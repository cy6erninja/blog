// src/components/Post.js
import React from 'react';
import { useParams } from 'react-router-dom';

const posts = [
    { id: 1, title: 'First Post', content: 'This is my first post.' },
    { id: 2, title: 'Second Post', content: 'This is my second post.' }
];

function Post() {
    const { postId } = useParams();
    const post = posts.find(p => p.id === parseInt(postId));

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}

export default Post;
