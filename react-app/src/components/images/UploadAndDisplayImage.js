import { useState } from "react";

export default function UploadAndDisplayImage({handleImageChange}) {
    const [image, setImage] = useState(null);

    function handleImageSet(e) {
        setImage(e.target.files[0]);
        handleImageChange(e.target.files[0]);
    }

    return (
        <div> 
            {image && <img className = "imageSelect" src = {URL.createObjectURL(image)} /> }
            <input type = "file" name = "myImage" onChange = {(e) => handleImageSet(e)}></input>
        </div>
    );
}