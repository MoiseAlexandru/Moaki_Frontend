import { useState } from "react";

export default function UploadAndDisplayImage() {
    const [image, setImage] = useState(null);

    function handleImageChange(e) {
        setImage(e.target.files[0]);
    }

    return (
        <div> 
            <p> Select image </p>
            {image && <img className = "imageSelect" src = {URL.createObjectURL(image)} /> }
            <input type = "file" name = "myImage" onChange = {(e) => handleImageChange(e)}></input>
        </div>
    );
}