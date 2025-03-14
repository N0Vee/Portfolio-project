import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from "js-cookie";

function BlogView() {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { id } = useParams();
    const userId = Cookies.get("USER_ID");
    const userEmail = Cookies.get("USER_EMAIL");

    useEffect(() => {
        if (userId == null || userEmail == null) {
            navigate("/blog");
            return;
        }
        
        axios.get(import.meta.env.VITE_BASE_URL + "/authen", {
            headers: {
                "User-ID": userId,
                "User-Email": userEmail
            }
        })
        .then(response => {
            if (!response.data.isAdmin) {
                navigate("/edit");
            }
        })
        .catch(error => {
            console.error('Error:', error);
            navigate("/blog");
        });
    }, [userId, userEmail, navigate]);

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

    if (loading) {
        return (
            <div className="section">
                <div className="container has-text-centered">
                    <div className="button is-loading is-large is-info">Loading</div>
                </div>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="section">
                <div className="container">
                    <div className="notification is-danger">
                        <h2 className="title is-4">Blog not found</h2>
                        <p>The blog you are looking for could not be found.</p>
                        <button className="button is-info mt-4" onClick={() => navigate('/blog')}>
                            Back to Blogs
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <section className="section">
            <div className="container">
                {/* Hero Banner */}
                <div className="hero is-info is-bold mb-6">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title is-2">{blog.BlogName}</h1>
                            <h2 className="subtitle is-5">{blog.DetailIntro}</h2>
                        </div>
                    </div>
                </div>

                <div className="columns is-variable is-8">
                    {/* Main Content Column */}
                    <div className="column is-8">
                        {/* Featured Image */}
                        <figure className="image mb-6">
                            <img 
                                className="has-ratio" 
                                src={`${import.meta.env.VITE_BASE_URL}${blog.ImgUrl}`} 
                                alt={blog.BlogName}
                                style={{ borderRadius: '6px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}
                            />
                        </figure>

                        {/* Article Content */}
                        <div className="content is-medium">
                            <div className="blog-body" dangerouslySetInnerHTML={{ __html: blog.DetailBody.replace(/\n/g, '<br />') }}></div>
                            
                            {/* Conclusion */}
                            <div className="notification is-light is-info mt-6">
                                <p className="is-size-5 has-text-weight-medium is-italic">{blog.DetailConclusion}</p>
                            </div>
                            
                            {/* Read More Button */}
                            {blog.BlogUrl && (
                                <div className="has-text-centered mt-6">
                                    <a 
                                        href={blog.BlogUrl} 
                                        className="button is-link is-medium is-rounded" 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        <span className="icon">
                                            <i className="fas fa-external-link-alt"></i>
                                        </span>
                                        <span>Read More</span>
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Sidebar Column */}
                    <div className="column is-4">
                        <div className="card">
                            <header className="card-header">
                                <p className="card-header-title">
                                    Related Information
                                </p>
                            </header>
                            <div className="card-content">
                                <div className="content">
                                    {blog.DetailTemp}
                                </div>
                            </div>
                        </div>

                        {/* Navigation Card */}
                        <div className="card mt-5">
                            <header className="card-header">
                                <p className="card-header-title">
                                    Blog Navigation
                                </p>
                            </header>
                            <div className="card-content">
                                <div className="buttons">
                                    <button className="button is-fullwidth is-outlined is-info" onClick={() => navigate('/blog')}>
                                        Back to Blog List
                                    </button>
                                    <button className="button is-fullwidth is-outlined is-info" onClick={() => window.print()}>
                                        Print Article
                                    </button>
                                    <button className="button is-fullwidth is-outlined is-info" onClick={() => navigator.share({
                                        title: blog.BlogName,
                                        text: blog.DetailIntro,
                                        url: window.location.href
                                    }).catch(err => console.log('Share failed:', err))}>
                                        Share Article
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Back Button */}
                <div className="has-text-centered mt-6">
                    <button className="button is-light" onClick={() => navigate('/blog')}>
                        <span className="icon">
                            <i className="fas fa-arrow-left"></i>
                        </span>
                        <span>Back to Blog List</span>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default BlogView;