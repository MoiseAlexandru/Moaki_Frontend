import { useState } from "react";

export default function UploadAndDisplayImage({handleImageChange, initialImage, canBeChanged = false}) {
    const [image, setImage] = useState(initialImage ? initialImage : null);

    function handleImageSet(e) {
        setImage(e.target.files[0]);
        handleImageChange(e.target.files[0]);
    }

    return (
        <div> 
            {image && <img className = "imageSelect" src = {URL.createObjectURL(image)} alt = "imagine" /> }
            {canBeChanged && <input type = "file" name = "myImage" onChange = {(e) => handleImageSet(e)}></input>}
        </div>
    );
}