import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function BlogAdd() {
    const [blog, setBlog] = useState(null);
    const navigate = useNavigate();
    const BASE_URL = "https://portfolio-project-backend-yy8b.onrender.com/blogs";

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await axios.post(`${BASE_URL}`, {
                
                ImgUrl: "TEST",
                BlogName: e.target.BlogName.value,
                DetailIntro: e.target.DetailIntro.value,
                DetailBody: e.target.DetailBody.value,
                DetailConclusion: e.target.DetailConclusion.value,
                DetailTemp: e.target.DetailTemp.value,
                BlogUrl: e.target.BlogUrl.value
            });
    
            console.log("Blog added successfully:", response.data);
            navigate("/edit");
        } catch (error) {
            console.error("Error adding blog:", error);
        }
    };

    return (
        <div className='container mt-6'>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label mt-3">Blog Title</label>
                    <div className="control">
                        <input name="BlogName" className="input" type="text"  />
                    </div>

                    <label className="label mt-3">Intro</label>
                    <div className="control">
                        <textarea name="DetailIntro" className="textarea"  />
                    </div>

                    <label className="label mt-3">Body</label>
                    <div className="control">
                        <textarea name="DetailBody" className="textarea"  />
                    </div>

                    <label className="label mt-3">Conclusion</label>
                    <div className="control">
                        <textarea name="DetailConclusion" className="textarea"  />
                    </div>

                    <label className="label mt-3">Temp</label>
                    <div className="control">
                        <textarea name="DetailTemp" className="textarea"  />
                    </div>

                    <label className="label mt-3">URL</label>
                    <div className="control">
                        <input name="BlogUrl" className="input" />
                    </div>

                    <div className='mt-6'>
                        <button type='submit' className='button is-success mr-4'>Submit</button>
                        <button type='reset' className='button is-danger'>Reset</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default BlogAdd;
