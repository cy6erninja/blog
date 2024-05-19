// src/components/MarkdownPost.js
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function MarkdownPost({ postId }) {
    const [content, setContent] = useState('');

    useEffect(() => {
        import(`../posts/${postId}.md`)
            .then(res => {
                fetch(res.default)
                    .then(response => response.text())
                    .then(text => setContent(text));
            })
            .catch(err => console.log(err));
    }, [postId]);

    return (
        <div className="markdown-post">
            <ReactMarkdown children={content} remarkPlugins={[remarkGfm]} />
        </div>
    );
}

export default MarkdownPost;
