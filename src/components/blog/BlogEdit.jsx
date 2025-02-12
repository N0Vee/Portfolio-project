import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function BlogEdit() {
    const [blog, setBlog] = useState(null);
    const navigate = useNavigate();
    const { id } = useParams();
    const [file, setFile] = useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

    const handleUploadImage = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFile(selectedFile);
                setImagePreviewUrl(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    useEffect(() => {
        axios.get(`${import.meta.env.VITE_BASE_URL}/blogs/${id}`)
            .then((res) => setBlog(res.data))
            .catch((error) => console.error("Error fetching data:", error));
    }, [id]);  // Add `id` to dependency array to fetch when `id` changes

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            if (file) {
                formData.append("ImgUrl", file);
            }
            formData.append("BlogName", e.target.BlogName.value);
            formData.append("DetailIntro", e.target.DetailIntro.value);
            formData.append("DetailBody", e.target.DetailBody.value);
            formData.append("DetailConclusion", e.target.DetailConclusion.value);
            formData.append("DetailTemp", e.target.DetailTemp.value || "");
            formData.append("BlogUrl", e.target.BlogUrl.value);
    
            const response = await axios.put(`${import.meta.env.VITE_BASE_URL}/blogs/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
    
            console.log("Blog edit successfully:", response.data);
            navigate(`/edit`);  // Navigate to the updated blog page
        } catch (error) {
            console.error("Error editing blog:", error);
        }
    };
    

    return (
        <div className="container mt-6">
        <div className="box">
            <h2 className="title is-4 has-text-centered">Edit a Blog</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                {/* Blog Title */}
                <div className="field">
                    <label className="label">Blog Title</label>
                    <div className="control has-icons-right">
                        <input
                            name="BlogName"
                            className="input"
                            type="text"
                            defaultValue={blog?.BlogName}
                            placeholder="Enter blog title"
                            required
                        />
                        <span className="icon is-small is-right">
                            <i className="fas fa-heading"></i>
                        </span>
                    </div>
                </div>
    
                {/* Intro */}
                <div className="field">
                    <label className="label">Intro</label>
                    <textarea
                        name="DetailIntro"
                        className="textarea"
                        defaultValue={blog?.DetailIntro}
                        placeholder="Write an introduction..."
                        required
                    ></textarea>
                </div>
    
                {/* Body */}
                <div className="field">
                    <label className="label">Body</label>
                    <textarea
                        name="DetailBody"
                        className="textarea"
                        defaultValue={blog?.DetailBody}
                        placeholder="Write the main content..."
                        required
                    ></textarea>
                </div>
    
                {/* Conclusion */}
                <div className="field">
                    <label className="label">Conclusion</label>
                    <textarea
                        name="DetailConclusion"
                        className="textarea"
                        defaultValue={blog?.DetailConclusion}
                        placeholder="Write a conclusion..."
                        required
                    ></textarea>
                </div>
    
                {/* Temp */}
                <div className="field">
                    <label className="label">Temp</label>
                    <textarea
                        name="DetailTemp"
                        className="textarea"
                        defaultValue={blog?.DetailTemp}
                        placeholder="Temporary notes..."
                    ></textarea>
                </div>
    
                {/* Blog URL */}
                <div className="field">
                    <label className="label">URL</label>
                    <div className="control has-icons-right">
                        <input
                            name="BlogUrl"
                            className="input"
                            type="url"
                            defaultValue={blog?.BlogUrl}
                            placeholder="Enter blog URL"
                            required
                        />
                        <span className="icon is-small is-right">
                            <i className="fas fa-link"></i>
                        </span>
                    </div>
                </div>
    
                {/* Blog Image */}
                <div className="field">
                    <label className="label">Blog Image</label>
                    {imagePreviewUrl ? (
                        <img
                            src={imagePreviewUrl}
                            alt="Preview"
                            style={{ width: '500px', height: '500px' }}
                        />
                    ) : blog?.ImgUrl ? (
                        <img
                            src={`${import.meta.env.VITE_BASE_URL}${blog?.ImgUrl}`}
                            alt="Current blog image"
                            style={{ width: '500px', height: '500px' }}
                        />
                    ) : (
                        <p>No image uploaded</p>
                    )}
                    <div className="file has-name is-fullwidth">
                        <label className="file-label">
                            <input
                                type="file"
                                name="ImgUrl"
                                onChange={handleUploadImage}
                                className="file-input"
                            />
                            <span className="file-cta">
                                <span className="file-icon">
                                    <i className="fas fa-upload"></i>
                                </span>
                                <span className="file-label">Choose a file…</span>
                            </span>
                        </label>
                    </div>
                </div>
    
                <div className="field">
                    <button className="button is-link" type="submit">
                        Save Changes
                    </button>
                </div>
            </form>
        </div>
    </div>
    
    );
}

export default BlogEdit;
