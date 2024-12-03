import React, { useState } from "react";
import "./EventPicturesUpload.css";

const EventPicturesUpload = () => {
  const [images, setImages] = useState(Array(5).fill(null));

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));
    const newImages = [...images];

    let index = 0;
    for (let i = 0; i < newImages.length && index < imageFiles.length; i++) {
      if (!newImages[i]) {
        newImages[i] = URL.createObjectURL(imageFiles[index]);
        index++;
      }
    }

    setImages(newImages);
  };

  const handleRemoveImage = (indexToRemove) => {
    setImages((prevImages) => {
      const newImages = [...prevImages];
      newImages[indexToRemove] = null;
      return newImages;
    });
  };

  return (
    <div className="upload-wrapper">
      <div className="label-and-button">
        <button
          className="upload-button"
          onClick={() => document.getElementById("fileInput").click()}
        >
          Select File
        </button>
      </div>
      <input
        id="fileInput"
        type="file"
        accept="image/*"
        multiple
        className="hidden-input"
        onChange={handleFileChange}
      />
      <div className="preview-row">
        {images.map((image, index) => (
          <div key={index} className="image-container">
            {image ? (
              <>
                <img src={image} alt={`Selected ${index}`} className="image" />
                <button
                  className="remove-button"
                  onClick={() => handleRemoveImage(index)}
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

export default EventPicturesUpload;
