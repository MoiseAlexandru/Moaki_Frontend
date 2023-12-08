

export default function getImageByPhotoName(photoName) {
    const photoSource = localStorage.getItem(photoName);
    console.log(photoName);
    return photoSource;
}