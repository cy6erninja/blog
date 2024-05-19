// src/components/Blog.js
import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
    { id: 1, title: 'First Post', content: 'This is my first post.' },
    { id: 2, title: 'Second Post', content: 'This is my second post.' }
];

function Blog() {
    return (
        <div>
            <h1>Blog</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Blog;
