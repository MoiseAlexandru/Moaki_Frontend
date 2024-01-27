import { useState } from "react";
import imageToBase64 from "../../utils/imageToBase64";
import "../../css/profilePage.css";

export default function UploadAndDisplayImage({handleImageChange, image = null, canBeChanged = false, imageType = "user"}) {
    
    async function handleImageSet(e) {
        await handleImageChange(e.target.files[0]);
    }

    //console.log(image);
    //console.log(canBeChanged);

    return (
        <div>
            {image && <img className = "imageSelect" src = {image} alt = "imagine" /> }
            {!image && imageType == "user" && <img className = "imageSelect" src = "/user-default.png" alt = "imagine default" />}
            {!image && imageType == "post" && <img className = "imageSelect" src = "/nothing.png" alt = "imagine default" />}
            {canBeChanged && <input className = "imageInput" type = "file" name = "myImage" onChange = {(e) => handleImageSet(e)}></input>}
        </div>
    );
}