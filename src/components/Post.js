// src/components/Post.js
import React from 'react';
import { useParams } from 'react-router-dom';
import MarkdownPost from './MarkdownPost';

function Post() {
    const { postId } = useParams();

    return (
        <div>
            <MarkdownPost postId={postId} />
        </div>
    );
}

export default Post;
