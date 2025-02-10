import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';


const BASE_URL = "https://portfolio-project-backend-yy8b.onrender.com/blogs";

function BlogView() {

    const [blog, setBlog] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();


    useEffect(() => {
        axios.get(`${BASE_URL}/${id}`)
            .then((res) => setBlog(res.data))
            .catch((error) => console.error("Error fetching data:", error));
        
    }, []);

    
  return (
    <>
        <div className="container mt-6">
            <div className="card">
                <div className="card-content">
                {/* Blog Title */}
                <h1 className="title is-3 has-text-centered">{blog?.BlogName}</h1>

                {/* Image Section */}
                <figure className="image is-4by3">
                    <img src="https://placehold.co/800x400" alt="Blog" className="blogImg" />
                </figure>

                {/* Blog Content */}
                <div className="content mt-4">
                    <p className="subtitle is-5 has-text-grey">{blog?.DetailIntro}</p>

                    <div className="columns">
                    {/* Main Blog Body */}
                    <div className="column is-two-thirds">
                        <p className="has-text-justified">{blog?.DetailBody}</p>
                    </div>

                    {/* Sidebar / Extra Details */}
                    <div className="column is-one-third">
                        <div className="box">
                            <p className="has-text-weight-semibold">Related Info</p>
                            <p>{blog?.DetailTemp}</p>
                        </div>
                    </div>
                </div>

                  {/* Blog Conclusion */}
                  <p className="has-text-weight-bold is-italic">{blog?.DetailConclusion}</p>

                  {/* Blog URL */}
                  {blog?.BlogUrl && (
                    <p className="mt-4">
                      <a href={blog.BlogUrl} className="button is-info is-light" target="_blank" rel="noopener noreferrer">
                        Read More
                      </a>
                    </p>
                  )}
          </div>
        </div>
      </div>
    </div>

        
    </>
  )
}

export default BlogView