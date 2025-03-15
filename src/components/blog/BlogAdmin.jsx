import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Cookies from "js-cookie";

function BlogAdmin() {
    const navigate = useNavigate();
    const [Blog, setBlog] = useState([]);

    const userId = Cookies.get("USER_ID");
    const userEmail = Cookies.get("USER_EMAIL");

    useEffect(() => {

        if (userId == null || userEmail == null) {
            navigate("/blog");
        }

        axios.get(import.meta.env.VITE_BASE_URL + "/authen", {
            headers: {
                "User-ID": userId, 
                "User-Email": userEmail 
            }
        })
        .then(response => {
            if (!response.data.isAdmin) {
                navigate("/blog");
                
            } 
        })
        .catch(error => {
            console.error('Error:', error);
        });

        axios.get(import.meta.env.VITE_BASE_URL + "/blogs")
            .then((res) => {
                setBlog(res.data);
                console.log(res.data);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const handleDel = (ID) => {
        axios.delete(`${import.meta.env.VITE_BASE_URL}/blogs/${ID}`)
            .then(() => {
                console.log("Blog deleted successfully!");
                window.location.reload();
            })
            .catch((error) => console.error("Error deleting blog:", error));
    }
    

    return (
        <div id='blog-bg'>
            <div className="container pt-6">

                <h1 className='has-text-centered is-size-2'>Blog</h1>
                
                {Blog ? (
                    <ul>
                    
                    <Link to='/blog' className='button is-warning is-small'>
                    <span className="icon-text">
                        <span className="icon">
                            <i className="fa-solid fa-arrow-left"></i>
                        </span>
                    </span>
                    </Link>

                    <Link to='/add' className='button is-success is-small is-pulled-right'>
                    <span className="icon-text">
                        <span className="icon">
                            <i className="fa-solid fa-plus"></i>
                        </span>
                    </span>
                    </Link>


                        {Blog.map((blog) => (
                            <li key={blog.ID} className='is-flex is-flex-direction-column'>
                                <div id='blog-box' className="box mt-5 is-flex is-flex-direction-row">
                                    <img 
                                        src={`${import.meta.env.VITE_BASE_URL}${blog?.ImgUrl}`} 
                                        alt="Blog"
                                        id='blogImgShow'

                                    />

                                    <div id='blog-wrapper' className="ml-6">
                                        
                                        <strong className='is-size-4'>{blog.BlogName}</strong>

                                        <button onClick={() => handleDel(blog.ID)} className='button is-danger is-small is-pulled-right'>
                                        <span className="icon-text">
                                            <span className="icon">
                                                <i className="fa-solid fa-trash"></i>
                                            </span>
                                        </span>
                                        </button>

                                        <Link to={`/edit/${blog.ID}`}>
                                        <button className='button is-warning is-small is-pulled-right mr-3'>
                                        <span className="icon-text">
                                            <span className="icon">
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </span>
                                        </span>
                                        </button>
                                        </Link>
                                        
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

export default BlogAdmin;
