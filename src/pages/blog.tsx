import { CSSProperties } from 'react';
import NavigateBar from '../components/navigate-bar';
import BlogCard from '../components/blog-card';
import blogPosts from '../blog-posts.json';
import { useNavigate } from 'react-router-dom';

function Blog() {
    const root: CSSProperties = {
    }

    const blogRoot: CSSProperties = {
        margin: '0 auto',
        marginTop: '4rem',
        width: 'fit-content'
    }

    const blogCardRoot: CSSProperties = {
        margin: '4rem 0'
    }
    
    const navigate = useNavigate();

    const BlogCards = () => {
        return blogPosts.map((blog) =>
            <div style={blogCardRoot} onClick={() => {navigate(blog.url)}}>
                {BlogCard(blog.date, blog.title, blog.author)}
            </div>
        )
    }

    return (
        <div style={root}>
            <div>
                <NavigateBar/>
            </div>
            <div style={blogRoot}>
                {BlogCards()}
            </div>
        </div>
    );
}

export default Blog;