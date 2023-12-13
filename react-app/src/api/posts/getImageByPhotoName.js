

export default function getImageByPhotoName(photoName) {
    const photoSource = localStorage.getItem(photoName);
    return photoSource;
}