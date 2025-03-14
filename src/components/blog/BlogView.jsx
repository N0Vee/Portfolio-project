import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import '../style/BlogView.css'

function BlogView() {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        axios.get(`${import.meta.env.VITE_BASE_URL}/blogs/${id}`)
            .then((res) => {
                setBlog(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false);
            });
    }, [id]);

    const formatDate = (date) => {
        // This is a placeholder - replace with actual date from your API
        return new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="pageloader is-active"><span className="title">Loading...</span></div>
        );
    }

    if (!blog) {
        return (
            <section className="hero is-fullheight">
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <h1 className="title is-1">404</h1>
                        <h2 className="subtitle is-3">Blog Not Found</h2>
                        <button className="button is-primary is-medium" onClick={() => navigate('/blog')}>
                            Return to Blog List
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            {/* Header */}
            <div className="blog-header">
                <img
                    className="blog-cover-image"
                    src={`${import.meta.env.VITE_BASE_URL}${blog.ImgUrl}`}
                    alt={blog.BlogName}
                />
                <div className="blog-cover-overlay"></div>
                <div className="container blog-header-content has-text-centered">
                    <h1 className="title is-1 has-text-white">{blog.BlogName}</h1>
                    <h2 className="subtitle has-text-white-bis mt-5">{blog.DetailIntro}</h2>
                </div>
            </div>

            {/* Main Content */}
            <div className="container">
                <div className="blog-content-wrapper">
                    {/* Meta Info */}
                    <div className="blog-meta">
                        <span><i className="fas fa-calendar"></i> {formatDate()}</span>
                        <span><i className="fas fa-user"></i> Admin</span>
                    </div>

                    {/* Tags */}
                    <div className="tag-pills">
                        <span className="tag is-info is-light">Blog</span>
                        <span className="tag is-info is-light">Article</span>
                        <span className="tag is-info is-light">Web</span>
                    </div>

                    {/* Content */}
                    <div className="content blog-body">
                        <div dangerouslySetInnerHTML={{ __html: blog.DetailBody.replace(/\n/g, '<br />') }}></div>
                    </div>

                    {/* Conclusion */}
                    <div className="blog-conclusion">
                        <p className="has-text-grey-dark">{blog.DetailConclusion}</p>
                    </div>


                    {/* Read More */}
                    {blog.BlogUrl && (
                        <div className="has-text-centered my-5">
                            <a
                                href={blog.BlogUrl}
                                className="button is-primary is-medium"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Find out more
                            </a>
                        </div>
                    )}


                    {/* Navigation */}
                    <div className="blog-navigation">
                        <button className="button is-light" onClick={() => navigate('/blog')}>
                            <span className="icon"><i className="fas fa-arrow-left"></i></span>
                            <span>Back to Blogs</span>
                        </button>
                        <div>
                            <button className="button is-light" onClick={() => window.print()}>
                                <span className="icon"><i className="fas fa-print"></i></span>
                                <span>Print</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Action Button */}
            <div className="floating-action">
                <button className="button is-primary" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <i className="fas fa-arrow-up"></i>
                </button>
            </div>
        </>
    );
}

export default BlogView;