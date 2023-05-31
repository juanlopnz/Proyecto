import { useState } from "react";
import { uploadFile, getAll } from "../firebase/files"

export const useFirebaseStorage = () => {
  const [uploadProgress, setUploadProgress] = useState(0);

  const uploadImage = async (image) => {
    return new Promise((resolve, reject) => {
      const uploadTask = uploadFile(image);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
        },
        (error) => {
          reject(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };

  return {
    uploadImage,
    uploadProgress
  };
};
