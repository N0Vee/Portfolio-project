import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function BlogAdd() {
    const navigate = useNavigate();
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

            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/blogs`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            console.log("Blog added successfully:", response.data);
            navigate("/edit");
        } catch (error) {
            console.error("Error adding blog:", error);
        }
    };

    return (
        <div className="container mt-6">
            <div className="box">
            <h2 className="title is-4 has-text-centered">Create a Blog</h2>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="field">
                    <label className="label">Blog Title</label>
                    <div className="control has-icons-left">
                        <input
                            name="BlogName"
                            className="input"
                            type="text"
                            placeholder="Enter blog title"
                            required
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-heading"></i>
                        </span>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Intro</label>
                    <div className="control has-icons-left">
                        <textarea
                            name="DetailIntro"
                            className="textarea"
                            placeholder="Write an introduction..."
                            required
                        ></textarea>
                        
                    </div>
                </div>

                <div className="field">
                    <label className="label">Body</label>
                    <div className="control has-icons-left">
                        <textarea
                            name="DetailBody"
                            className="textarea"
                            placeholder="Write the main content..."
                            required
                        ></textarea>
                        
                    </div>
                </div>

                <div className="field">
                    <label className="label">Conclusion</label>
                    <div className="control has-icons-left">
                        <textarea
                            name="DetailConclusion"
                            className="textarea"
                            placeholder="Write a conclusion..."
                            required
                        ></textarea>
                        
                    </div>
                </div>

                <div className="field">
                    <label className="label">Temp</label>
                    <div className="control has-icons-left">
                        <textarea
                            name="DetailTemp"
                            className="textarea"
                            placeholder="Temporary notes..."
                        ></textarea>
                        
                    </div>
                </div>

                <div className="field">
                    <label className="label">URL</label>
                    <div className="control has-icons-left">
                        <input
                            name="BlogUrl"
                            className="input"
                            type="url"
                            placeholder="Enter blog URL"
                            required
                        />
                        <span className="icon is-small is-left">
                            <i className="fas fa-link"></i>
                        </span>
                    </div>
                </div>

                <div className="field">
                    <label className="label">Blog Image</label>
                    {imagePreviewUrl && (
                        <img
                            src={imagePreviewUrl}
                            alt="Preview"
                            style={{ width: '500px', height: '500px', marginBottom: '15px' }}
                        />
                    )}
                    <div className="file has-name is-fullwidth">
                        <label className="file-label">
                            <input
                                onChange={handleUploadImage}
                                className="file-input"
                                type="file"
                                name="ImgUrl"
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

                <div className="field is-grouped is-grouped-centered mt-5">
                    <button type="submit" className="button is-success">
                        Submit
                    </button>
                    <button type="reset" className="button is-danger">
                        Reset
                    </button>
                </div>
            </form>
            </div>
        </div>

    );
}

export default BlogAdd;
