import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function BlogEdit() {
    const [blog, setBlog] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();
    const BASE_URL = "https://portfolio-project-backend-yy8b.onrender.com/blogs";

    useEffect(() => {
        axios.get(`${BASE_URL}/${id}`)
            .then((res) => setBlog(res.data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            BlogName: e.target.BlogName.value,
            DetailIntro: e.target.DetailIntro.value,
            DetailBody: e.target.DetailBody.value,
            DetailConclusion: e.target.DetailConclusion.value,
            DetailTemp: e.target.DetailTemp.value,
        };

        axios.put(`${BASE_URL}/${id}`, data)
            .then(() => {
                console.log("Blog updated successfully!");
                navigate('/edit');
            })
            .catch((error) => console.error("Error updating blog:", error));
    };

    return (
        <div className='container mt-6'>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label mt-3">Blog Title</label>
                    <div className="control">
                        <input name="BlogName" className="input" defaultValue={blog?.BlogName || ''} type="text" placeholder="Text input" />
                    </div>

                    <label className="label mt-3">Intro</label>
                    <div className="control">
                        <textarea name="DetailIntro" className="textarea" defaultValue={blog?.DetailIntro || ''} placeholder="Text input" />
                    </div>

                    <label className="label mt-3">Body</label>
                    <div className="control">
                        <textarea name="DetailBody" className="textarea" defaultValue={blog?.DetailBody || ''} placeholder="Text input" />
                    </div>

                    <label className="label mt-3">Conclusion</label>
                    <div className="control">
                        <textarea name="DetailConclusion" className="textarea" defaultValue={blog?.DetailConclusion || ''} placeholder="Text input" />
                    </div>

                    <label className="label mt-3">Temp</label>
                    <div className="control">
                        <textarea name="DetailTemp" className="textarea" defaultValue={blog?.DetailTemp || ''} placeholder="Text input" />
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

export default BlogEdit;
