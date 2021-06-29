import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import "./write.css";

export default function Write() {
  const [values, setValues] = useState({
    photo: "",
    content: "",
    title: "",
    formData: "",
  });

  const { content, photo, title, formData } = values;

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
  }, []);

  const handleChange = (name) => (event) => {
    const value = name === "photo" ? event.target.files[0] : event.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.post("/post/createPost", formData);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="write">
      {photo && (
        <img className="writeImg" src={URL.createObjectURL(photo)} alt="" />
      )}
      <form className="writeForm">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            id="fileInput"
            type="file"
            name="photo"
            onChange={handleChange("photo")}
            accept="image"
            style={{ display: "none" }}
          />
          <input
            className="writeInput"
            placeholder="Title"
            type="text"
            name="title"
            value={title}
            onChange={handleChange("title")}
            autoFocus={true}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            className="writeInput writeText"
            placeholder="Tell your story..."
            type="text"
            name="content"
            value={content}
            onChange={handleChange("content")}
            autoFocus={true}
          />
        </div>
        <button className="writeSubmit" type="submit" onClick={onSubmit}>
          Publish
        </button>
      </form>
    </div>
  );
}
