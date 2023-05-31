import { firebaseStorage } from "./config";
import { ref, uploadBytesResumable, listAll } from "firebase/storage";

export const uploadFile = (file) => {
  if(!file){
    alert("Please choose a file to upload");
    return;
  }

  const storageRef = ref(firebaseStorage, file.name);
  const uploadTask = uploadBytesResumable(storageRef, file);

  return uploadTask
}

export const getAll = async () => {
  const listRef = ref(firebaseStorage, '/files/');
  return listAll(listRef);
}