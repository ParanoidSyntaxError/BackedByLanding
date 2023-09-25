import { CSSProperties } from 'react';
import NavigateBar from '../components/navigate-bar';
import BlogCard from '../components/blog-card';
import blogPosts from '../blog-posts.json';
import ReactMarkdown from 'react-markdown';
import {useParams} from "react-router-dom";

function BlogPost() {
    const root: CSSProperties = {
        fontFamily: 'monospace',
    }

    const blogRoot: CSSProperties = {
        width: '80vw',
        margin: '0 auto'
    }

    const date: CSSProperties = {
        fontSize: '1.5rem',
        color: 'lightgrey'
    }

    const title: CSSProperties = {
        fontSize: '5rem',
        color: '#382436'
    }

    const author: CSSProperties = {
        fontSize: '2rem',
        color: 'grey'
    }

    const contentRoot: CSSProperties = {

    }

    const {url} = useParams();

    const blog = blogPosts.filter((blog) => {
        return blog.url == url;
    })[0];

    return (
        <div style={root}>
            <div>
                <NavigateBar/>
            </div>
            <div style={blogRoot}>
                <div style={date}>
                    {blog.date}
                </div>
                <div style={title}>
                    {blog.title}
                </div>
                <div style={author}>
                    {blog.author}
                </div>
                <div style={contentRoot}>
                    <ReactMarkdown>
                        {blog.content}
                    </ReactMarkdown>
                </div>
            </div>
        </div>
    );
}

export default BlogPost;