import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookies from "js-cookie";
import "../style/BlogSection.css";

function BlogSection() {
    const [Blog, setBlog] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false)
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredBlogs, setFilteredBlogs] = useState([]);

    const userId = Cookies.get("USER_ID");
    const userEmail = Cookies.get("USER_EMAIL");

    useEffect(() => {

        axios.get(import.meta.env.VITE_BASE_URL + "/authen", {
            headers: {
                "User-ID": userId,
                "User-Email": userEmail
            }
        })
            .then(response => {
                if (response.data.isAdmin) {
                    setIsAdmin(true);

                } else {
                    setIsAdmin(false);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

        axios.get(import.meta.env.VITE_BASE_URL + "/blogs")
            .then((res) => {
                setBlog(res.data);
                setFilteredBlogs(res.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    useEffect(() => {
        if (Blog) {
            const filtered = Blog.filter((blog) =>
                blog.BlogName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                blog.DetailIntro.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredBlogs(filtered);
        }
    }, [searchTerm, Blog]);

    return (
        <div id='blog-bg' className='pt-6'>
            <div className="container">
                <h1 className="has-text-centered is-size-2">Blog</h1>

                {isAdmin && (
                    <Link to='/edit' id="edit-button" className='button is-warning is-small'>
                        <span className="icon-text">
                            <span className="icon">
                                <i className="fa-solid fa-pen-to-square"></i>
                            </span>
                        </span>
                    </Link>
                )}

                <div id="search-container" className="mt-5 field is-flex is-align-items-center">
                    <div className="control is-inline">
                        <input
                            id="search-box"
                            className="input is-small"
                            type="text"
                            placeholder="Search blogs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>


                {filteredBlogs.length > 0 ? (
                    <ul>
                        {filteredBlogs.map((blog) => (
                            <li key={blog.id} className="is-flex is-flex-direction-column">
                                <Link to={`/view/${blog.ID}`} id="blog-box" className="box mt-5 is-flex is-flex-direction-row">
                                    <img
                                        src={`${import.meta.env.VITE_BASE_URL}${blog?.ImgUrl}`}
                                        alt="Blog"
                                        id="blogImgShow"
                                    />
                                    <div className="ml-6">
                                        <strong className="is-size-4">{blog.BlogName}</strong>
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
                    <p>No Blog found based on your search...</p>
                )}
            </div>
        </div>

    );
}

export default BlogSection;
