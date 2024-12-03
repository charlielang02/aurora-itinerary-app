import React, { useState } from "react";
import "./TagInput.css";

const TagInput = () => {
  const [tags, setTags] = useState([]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && event.target.value.trim() !== "" && tags.length < 10) {
      setTags([...tags, event.target.value.trim()]);
      event.target.value = ""; // Clear input field
    }
  };

  const handleRemoveTag = (indexToRemove) => {
    setTags((prevTags) => prevTags.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="tag-input-wrapper">
      <div className="label-and-input">
        <input
          type="text"
          placeholder="Enter a tag..."
          className="tag-input"
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="tags-row">
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className="tag-container">
            {tags[index] ? (
              <>
                <span className="tag">{tags[index]}</span>
                <button
                  className="remove-button"
                  onClick={() => handleRemoveTag(index)}
                >
                  ×
                </button>
              </>
            ) : (
              <span className="placeholder-text">+</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TagInput;
