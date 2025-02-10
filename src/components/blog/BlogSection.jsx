import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';

const ADMIN_EMAIL = 'wanidchanon@gmail.com';

const BASE_URL = "https://portfolio-project-backend-yy8b.onrender.com/blogs";

function BlogSection() {
    const [Blog, setBlog] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const storedUser = Cookies.get("user");
        if (storedUser) {
            const user = JSON.parse(storedUser);
            if (user.email === ADMIN_EMAIL) {
                setIsAdmin(true); 
            }
        }

        axios.get(BASE_URL)
            .then((res) => {
                setBlog(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            <div className="container">
                <h1 className='has-text-centered mt-6 is-size-2'>Blog</h1>
                
                {isAdmin && (
                    <Link to='/edit' className='button is-warning is-small'>
                        <span className="icon-text">
                            <span className="icon">
                                <i className="fa-solid fa-pen-to-square"></i>
                            </span>
                        </span>
                    </Link>
                )}

                {Blog ? (
                    <ul>
                        {Blog.map((blog) => (
                            <li key={blog.id} className='is-flex is-flex-direction-column'>
                                <Link to={`/view/${blog.ID}`} id='blog-box' className="box mt-5 is-flex is-flex-direction-row">
                                    <img 
                                        src="https://placehold.co/128x128" 
                                        alt="Blog"
                                    />

                                    <div className="ml-6">
                                        <strong className='is-size-4'>{blog.BlogName}</strong>
                                        <p className="mt-2">{blog.DetailIntro}</p>
                                        <a href={blog.BlogUrl} target="_blank" rel="noopener noreferrer" className="mt-2">
                                            {blog.BlogUrl}
                                        </a>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No Blog posted right now...</p>
                )}
            </div>
        </div>
    );
}

export default BlogSection;
