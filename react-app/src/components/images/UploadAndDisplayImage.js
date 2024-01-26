import { useState } from "react";
import imageToBase64 from "../../utils/imageToBase64";

export default function UploadAndDisplayImage({handleImageChange, image, canBeChanged = false}) {
    
    
    async function handleImageSet(e) {
        await handleImageChange(e.target.files[0]);
    }

    //console.log(image);
    //console.log(canBeChanged);

    return (
        <div>
            {image && <img className = "imageSelect" src = {image} alt = "imagine" /> }
            {canBeChanged && <input type = "file" name = "myImage" onChange = {(e) => handleImageSet(e)}></input>}
        </div>
    );
}