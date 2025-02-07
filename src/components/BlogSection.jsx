import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BaseUrl = "http://localhost:3000/blogs";

function BlogSection() {
    const [Blog, setBlog] = useState(null);

    useEffect(() => {
        axios.get(BaseUrl)
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
                {Blog ? (
                    <ul>
                        {Blog.map((blog) => (
                            <li key={blog.id} className='is-flex is-flex-direction-column'>
                                <div id='blog-box' className="box mt-6 is-flex is-flex-direction-row">
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
                                </div>
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
