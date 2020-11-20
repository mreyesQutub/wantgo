import React, { useState } from "react";
import ImageUploader from "react-images-upload";

const Image = props => {
    const [pictures, setPictures] = useState([]);

    const onDrop = picture => {
        setPictures([...pictures, picture]);
        console.log(picture)
    };
    return (
        <ImageUploader
            withPreview={true}
            {...props}
            withIcon={true}
            onChange={onDrop}
            imgExtension={[".jpg", ".gif", ".png", ".gif"]}
            maxFileSize={5242880}
        />
    );
};

export default Image;