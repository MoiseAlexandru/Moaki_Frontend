

export default async function imageToBase64(selectedFile) {
    
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = () => {
            resolve(reader.result);
        }
        reader.onerror = (error) => {
            reject(error);
        }
        reader.readAsDataURL(selectedFile);
    });
    /*
    reader.readAsDataURL(selectedFile);
    reader.onload = () => {
        console.log(reader.result);
        return reader.result;
    }
    */
}